import {
    Button,
    Card,
    CardHeader,
    Dialog,
    Input,
    Typography,
} from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { teamRegistration } from "../features/team/teamSlice";
import { CreateContext } from "../App";

const TeamRegistration = ({ open, setOpen }) => {
    const { details } = useContext(CreateContext);
    const login = useSelector((state) => state.user.login.data);
    const userId = login ? login.data.userId : null;
    const hackathonId = details.hackathonId;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formdata, setFormData] = useState({
        name: "",
        email1: "",
        email2: "",
        email3: "",
    });
    const emails = [formdata.email1];
    const name = formdata.name;
    const team = { emails, name };
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formdata.name) {
            newErrors.teamname = "Team Name is Required";
        }
        if (formdata.email1 && !validateEmail(formdata.email1)) {
            newErrors.email1 = "Email is invalid";
        }
        if (formdata.email2 && !validateEmail(formdata.email2)) {
            newErrors.email2 = "Email is invalid";
        }
        if (formdata.email3 && !validateEmail(formdata.email3)) {
            newErrors.email3 = "Email is invalid";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            dispatch(teamRegistration({ hackathonId, userId, team }));
        }
        setErrors(newErrors);
    };
    const validateEmail = (email) => {
        // Regex pattern for email validation
        const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
        return pattern.test(email);
    };
    return (
        <div>
            <Dialog
                size="xs"
                open={open}
                handler={() => setOpen((cur) => !cur)}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full px-16 py-4">
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid w-full h-16 place-items-center place-self-center"
                    >
                        <Typography variant="h5" color="white">
                            Register Your Team
                        </Typography>
                    </CardHeader>
                    <form
                        onSubmit={submitHandler}
                        className="flex flex-col gap-y-4 mx-auto my-4 w-96 borderrounded-xl p-2"
                    >
                        <Input
                            type="text"
                            label="Team Name*"
                            size="sm"
                            name="name"
                            value={formdata.teamname}
                            onChange={handleChange}
                        />
                        {errors.teamname && (
                            <Typography className="text-red-500 text-xs w-fit">
                                {"*"+errors.teamname}
                            </Typography>
                        )}

                        <Input
                            type="email"
                            label="Member 1 Email"
                            size="sm"
                            name="email1"
                            value={formdata.email1}
                            onChange={handleChange}
                        />
                        {errors.email1 && (
                            <Typography className="text-red-500 text-xs w-fit">
                                {errors.email1}
                           </Typography>
                        )}

                        <Input
                            type="email"
                            label="Member 2 Email"
                            size="sm"
                            name="email2"
                            value={formdata.email2}
                            onChange={handleChange}
                        />
                        {errors.email2 && (
                            <Typography className="text-red-500 text-xs w-fit">
                                {errors.email2}
                           </Typography>
                        )}

                        <Input
                            type="email"
                            label="Member 3 Email"
                            size="sm"
                            name="email3"
                            value={formdata.email3}
                            onChange={handleChange}
                        />
                        {errors.email3 && (
                            <Typography className="text-red-500 text-xs w-fit">
                                {errors.email3}
                            </Typography>
                        )}
                        <div className="w-fit mx-auto">
                            <Button className="mt-2" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Card>
            </Dialog>
        </div>
    );
};

export default TeamRegistration;
