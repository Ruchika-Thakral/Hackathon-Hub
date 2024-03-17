// SignInDialog.jsx
import React from "react";
import {
    Dialog,
    Card,
    CardHeader,
    Typography,
    CardBody,
    Input,
    Button,
} from "@material-tailwind/react";
import SignInForm from "./Login";

const SignInDialog = ({ showModal, toggleModal, toggleModals }) => {
    const handleSignUpClick = () => {
        toggleModal(); // Close the SignInModal
        toggleModals(); // Open the SignUpModal
    };
    const handleGoogleSignIn = () => {
        // Call the function to initiate Google Sign-In process
        // For example, you can use the Google Sign-In API
    };

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
                            onSubmit={(e) => e.preventDefault()}
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
                                    required
                                />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
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
