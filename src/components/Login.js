// SignInForm.jsx
import React from "react";
import { Input, Button, Typography } from "@material-tailwind/react";

const SignInForm = ({ toggleModal, toggleModals }) => {
    const handleSignUpClick = () => {
        toggleModal(); // Close the SignInModal
        toggleModals(); // Open the SignUpModal
    };
    const handleGoogleSignIn = () => {
        // Call the function to initiate Google Sign-In process
        // For example, you can use the Google Sign-In API
    };
    return (
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
    );
};

export default SignInForm;
