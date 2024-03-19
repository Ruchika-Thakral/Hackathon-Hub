// SignInDialog.jsx
import React, { useEffect, useState } from "react";
import {
    Dialog,
    Card,
    CardHeader,
    Typography,
    CardBody,
    Input,
    Button,
} from "@material-tailwind/react";
// import SignInForm from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/user/userSlice";

const SignInDialog = ({ showModal, toggleModal, toggleModals }) => {
    const handleSignUpClick = () => {
        toggleModal(); // Close the SignInModal
        toggleModals(); // Open the SignUpModal
    };
    const handleGoogleSignIn = () => {
        // Call the function to initiate Google Sign-In process
        // For example, you can use the Google Sign-In API
    };

    const [formData1, setFormData1] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData1((prevstate) => ({ ...prevstate, [name]: value }));
    };

    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.login.data);
    const status = data ? data.status : null;
    const error = useSelector((state) => state.user.login.error);
    const loading = useSelector((state) => state.user.login.loading);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData1);
        dispatch(userLogin(formData1));
        console.log("loggedin");
        toggleModal();
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    // useEffect(() => {
    //     if (status === 200) {
    //         onSuccess();
    //     }
    // }, [status, onSuccess]);

    return (
        <Dialog open={showModal} handler={toggleModal} size="xs">
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
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="E-mail"
                                    placeholder="abc@gmail.com"
                                    onChange={handleChange}
                                    value={formData1.email}
                                    required
                                />
                                    <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    onChange={handleChange}
                                    value={formData1.password}
                                    placeholder="*******"
                                    required
                                />
                            </div>
                            <br />
                            <div
                                className="flex flex-col align-middle"
                                // style={{
                                //     alignItems: "center",
                                //     display: "flex",
                                //     flexDirection: "column",
                                // }}
                            >
                                <Button
                                    className="btn-submit-form cursor-pointer"
                                    type="submit"
                                    // onClick={handleSubmit}
                                    // style={{ cursor: "pointer" }}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    onClick={handleGoogleSignIn}
                                    className="btn-google-sign-in mt-2 cursor-pointer"
                                    // style={{ cursor: "pointer", marginTop: "10px" }}
                                >
                                    Sign in with Google
                                </Button>
                                <Typography
                                    variant="small"
                                    className="mt-4 flex justify-center"
                                >
                                    Don&apos;t have an account?
                                    <Typography
                                        as="a"
                                        href="#signup"
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold"
                                        onClick={handleSignUpClick}
                                    >
                                        Sign up
                                    </Typography>
                                </Typography>
                            </div>
                        </form>
                    </CardBody>
                    {/* <SignInForm
                        toggleModal={toggleModal}
                        toggleModals={toggleModals}
                    /> */}
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

export default SignInDialog;
