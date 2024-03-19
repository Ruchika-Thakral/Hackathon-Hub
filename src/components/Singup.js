import React, { useEffect, useState } from "react";
import { Input, Button, Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
    otpVerification,
    userLogin,
    userRegistration,
} from "../features/user/userSlice";
import { Typography, CardHeader, Card, Dialog, CardBody } from "@material-tailwind/react";

const Signup = ({ showModal, toggleModal, setShowSignUpModal }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        otp: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevstate) => ({ ...prevstate, [name]: value }));
    };
    const data = useSelector((state) => state.user.register.data);
    const status = data ? data.status : null;
    const error = useSelector((state) => state.user.register.error);
    const loading = useSelector((state) => state.user.register.loading);
    const dispatch = useDispatch();
    const loginData = { email: formData.email, password: formData.password };
    const [emailVerification, setEmailVerification] = useState(false);
    useEffect(() => {
        if (status === 200) {
            setEmailVerification(true);
        }
        if (status === 201) {
            setShowSignUpModal(false);
            dispatch(userLogin(loginData));
        }
    }, [status]);
    const handleEmailVerification = () => {
        dispatch(userRegistration(formData));
    };
    const otpDetails = { email: formData.email, otp: formData.otp };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(otpVerification(otpDetails));
    };

    return (
        <Dialog
            className="h-96"
            open={showModal}
            handler={toggleModal}
            size={"xs"}
        >
            {/* <span className="close" onClick={toggleModal} style={{ cursor: 'pointer' }}>&times;</span> */}
            <div className="container">
                <Card className="mx-auto w-full px-16 py-4">
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h5" color="white">
                            Sign in to your account
                        </Typography>
                    </CardHeader>
                    <CardBody>
                        {loading ? (
                            <div className="w-full h-96">
                                <Spinner className="mx-auto mt-44 h-16 w-16" />
                            </div>
                        ) : (
                            <form
                                className="account-form w-full mx-auto rounded-xl mt-2 p-2"
                                onSubmit={handleSubmit}
                            >
                                <div
                                    className={
                                        "account-form-fields sign-in flex flex-col gap-y-4 sign-up w-full mx-auto"
                                    }
                                >
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        label="Name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="E-mail"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        label="Password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Input
                                        id="repeat-password"
                                        name="repeat-password"
                                        type="password"
                                        label="Confirm password"
                                        placeholder="Label Password"
                                        required
                                    />
                                    {!emailVerification && (
                                        <Button
                                            className="w-fit"
                                            type="button"
                                            onClick={handleEmailVerification}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Verify Email
                                        </Button>
                                    )}

                                    {emailVerification && (
                                        <>
                                            <Input
                                                id="otp"
                                                name="otp"
                                                type="text"
                                                label="Enter OTP"
                                                value={formData.otp}
                                                onChange={handleChange}
                                                required
                                            />
                                        </>
                                    )}
                                    {error && <h4>{error.message}</h4>}
                                </div>
                                <br />
                                <div className="w-fit mx-auto">
                                    <Button
                                        className="btn-submit-form"
                                        type="submit"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        )}
                    </CardBody>
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center justify-center gap-2 font-medium opacity-60"
                    >
                        Credentials are secured
                    </Typography>
                </Card>
            </div>
        </Dialog>
    );
};

export default Signup;
