// SignUpDialog.jsx
import React, { useState } from "react";
import {
    Dialog,
    Card,
    CardHeader,
    Typography,
    CardBody,
    Input,
    Button,
} from "@material-tailwind/react";
import SignUpForm from "./Singup";

function SignUpDialog({ showModal, toggleModal }) {
    const [isEmailVerified, setEmailVerified] = useState(false);
    const [otp, setOtp] = useState("");

    const handleEmailVerification = () => {
        // Perform email verification logic here, e.g., send OTP to the provided email
        // After verification, set isEmailVerified to true
        setEmailVerified(true);
    };

    const handleVerifyOTP = () => {
        // Perform OTP verification logic here
        // After verification, you can redirect the user or perform any other action
        console.log("OTP verified");
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
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    label="First Name"
                                    placeholder="First Name"
                                    required
                                />
                                <Input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    required
                                />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="E-mail"
                                    placeholder="Email"
                                    required
                                />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Password"
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
                                {!isEmailVerified && (
                                    <Button
                                        className="w-fit cursor-pointer"
                                        type="button"
                                        onClick={handleEmailVerification}
                                        // style={{ cursor: "pointer" }}
                                    >
                                        Verify Email
                                    </Button>
                                )}
                                {isEmailVerified && (
                                    <>
                                        <Input
                                            id="otp"
                                            name="otp"
                                            type="text"
                                            label="Enter OTP"
                                            value={otp}
                                            onChange={(evt) =>
                                                setOtp(evt.target.value)
                                            }
                                            required
                                        />
                                        <Button
                                            className="w-fit cursor-pointer"
                                            type="button"
                                            onClick={handleVerifyOTP}
                                            // style={{ cursor: "pointer" }}
                                        >
                                            Verify OTP
                                        </Button>
                                    </>
                                )}
                            </div>
                            <br />
                            <div className="w-fit mx-auto">
                                <Button
                                    className="btn-submit-form cursor-pointer"
                                    type="submit"
                                    // style={{ cursor: "pointer" }}
                                >
                                    Sign up
                                </Button>
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
}

export default SignUpDialog;
