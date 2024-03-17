import {
    Button,
    Card,
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
    const {details}=useContext(CreateContext)
    const login=useSelector(state=>state.user.login.data)
    const userId=login?login.data.userId:null
    const hackathonId=details.hackathonId
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const [formdata, setFormData] = useState({
        name: "",
        email1: "",
        email2: "",
        email3: "",
    });
    const emails=[formdata.email1]
    const name=formdata.name
    const team={emails,name}
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
            dispatch(teamRegistration({hackathonId,userId,team}))
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
                <Card>
                    <form
                        onSubmit={submitHandler}
                        className="flex flex-col gap-y-4 mx-auto my-4 w-96 border border-black hover:border-cyan-400 rounded-xl p-2"
                    >
                        <Typography
                            variant="h2"
                            color="black"
                            className="w-fit mx-auto"
                        >
                            Team Registration
                        </Typography>
                        <Input
                            type="text"
                            label="Team Name"
                            size="lg"
                            name="name"
                            value={formdata.teamname}
                            onChange={handleChange}
                        />
                        {errors.teamname && (
                            <div className="text-red-500 w-fit">
                                {errors.teamname}
                            </div>
                        )}

                        <Input
                            type="email"
                            label="Email 1"
                            size="lg"
                            name="email1"
                            value={formdata.email1}
                            onChange={handleChange}
                        />
                        {errors.email1 && (
                            <div className="text-red-500 w-fit">
                                {errors.email1}
                            </div>
                        )}

                        <Input
                            type="email"
                            label="Email 2"
                            size="lg"
                            name="email2"
                            value={formdata.email2}
                            onChange={handleChange}
                        />
                        {errors.email2 && (
                            <div className="text-red-500 w-fit">
                                {errors.email2}
                            </div>
                        )}

                        <Input
                            type="email"
                            label="Email 3"
                            size="lg"
                            name="email3"
                            value={formdata.email3}
                            onChange={handleChange}
                        />
                        {errors.email3 && (
                            <div className="text-red-500 w-fit">
                                {errors.email3}
                            </div>
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
