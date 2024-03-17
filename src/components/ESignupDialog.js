// SignUpDialog.jsx
import React from "react";
import { Dialog, Card, CardHeader, Typography } from "@material-tailwind/react";
import SignUpForm from "./ESignup";

function SignUpDialog({ showModal, toggleModal ,setShowSignUpModal}) {
    return (
        <Dialog className='h-96' open={showModal} handler={toggleModal} size={"xs"}>
            {/* <span className="close" onClick={toggleModal} style={{ cursor: 'pointer' }}>&times;</span> */}
            <div className="container">
                <CardHeader
                    color="gray"
                    floated={false}
                    shadow={false}
                    className="w-72 grid place-items-center text-center mx-auto"
                >
                    <Typography variant="h5" color="white">
                        Create an account
                    </Typography>
                </CardHeader>
                <Card
                    className="mx-auto w-full max-w-[36rem]"
                    style={{ maxHeight: "70vh", overflowY: "auto" }}
                >
                        <SignUpForm onSuccess={toggleModal} setShowSignUpModal={setShowSignUpModal}/>
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
