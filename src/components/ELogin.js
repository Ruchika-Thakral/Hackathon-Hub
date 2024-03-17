// SignInForm.jsx
import React, { useEffect, useState } from "react";
import { Input, Button, Typography, Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/user/userSlice";

const SignInForm = ({ toggleModal, toggleModals,setShowSignInModal,onSuccess}) => {
    const [formData1,setFormData1]=useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData1(prevstate=>(
            {...prevstate,
            [name]:value}
        ))
    }
    const handleSignUpClick = () => {
        // toggleModal(); // Close the SignInModal
        // toggleModals(); // Open the SignUpModal
    };
    const handleGoogleSignIn = () => {
        // Call the function to initiate Google Sign-In process
        // For example, you can use the Google Sign-In API
    };
    const dispatch=useDispatch()
    const data=useSelector(state=>state.user.login.data)
    const status=data?data.status:null
    const error=useSelector(state=>state.user.login.error)
    const loading=useSelector(state=>state.user.login.loading)
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(userLogin(formData1))

    }
    useEffect(()=>{
    if(status===200)
    {
        onSuccess()
    }
    },[status,onSuccess])
   
    return (
        <>{loading?<div className="w-full h-72"><Spinner className="mx-auto mt-16 h-16 w-16"/></div>:<form
        className="account-form  w-96 mx-auto border border-black rounded-xl mt-2 p-2"
        onSubmit={handleSubmit}
    >
        <div
            className={
                "account-form-fields sign-in flex flex-col gap-y-4 sign-up w-72 mx-auto"
            }
        >
            <Input
                id="email"
                name="email"
                type="email"
                label="E-mail"
                onChange={handleChange}
                value={formData1.email}
                placeholder="abc@gmail.com"
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
        <div
            style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            }}
        >
             {error && <h4>{error.message}</h4>}
            <Button
                className="mt-4"
                type="submit"
                style={{ cursor: "pointer" }}>
                Sign in
            </Button>
            <Button
                onClick={handleGoogleSignIn}
                className="btn-google-sign-in"
                style={{ cursor: "pointer", marginTop: "10px" }}
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
    </form>}</>
        
    );
};

export default SignInForm;
