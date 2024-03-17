// SignInDialog.jsx
import React from "react";
import { Dialog, Card, CardHeader, Typography } from "@material-tailwind/react";
import SignInForm from "./ELogin";

const SignInDialog = ({ showModal, toggleModal, toggleModals ,setShowSignInModal}) => {
    return (
        <Dialog open={showModal} handler={toggleModal} size={"xs"}>
            {/* <span className="close" onClick={toggleModal} style={{ cursor: 'pointer' }}>&times;</span> */}

            <div className="container ">
                <Card className="mx-auto w-full max-w-[36rem] px-8">
                    <CardHeader
                        color="gray"
                        floated={false}
                        shadow={false}
                        className="w-72 m-2 grid place-items-center text-center mx-auto"
                    >
                        <Typography variant="h5" color="white">
                            Sign in to your account
                        </Typography>
                    </CardHeader>
                    <SignInForm
                        toggleModal={toggleModal}
                        toggleModals={toggleModals}
                        onSuccess={toggleModal}
                    />
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
