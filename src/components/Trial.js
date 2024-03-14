import React, { useEffect, useState } from "react";
import { selectUserDetails, login, logout } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Typography } from "@material-tailwind/react";

const Trial = () => {
    const user = useSelector(selectUserDetails);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div>
            <Input type="text" value={email} onChange={handleEmailChange} />
            <br />
            <Input type="text" value={name} onChange={handleNameChange} />

            <br />
            <Button
                onClick={() => {
                    // console.log("logginb "+email)
                    dispatch(login({ email, name }));
                }}
            >
                Login
            </Button>

            <br />
            <Button onClick={() => dispatch(logout())}>Logout</Button>
            <Typography>{user ? user.email : "Not logged in"}</Typography>
        </div>
    );
};

export default Trial;
