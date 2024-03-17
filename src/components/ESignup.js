import React, { useEffect, useState } from "react";
import { Input, Button, Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { otpVerification, userLogin, userRegistration } from "../features/user/userSlice";

const SignUpForm = ({onSuccess}) => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        otp:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData(prevstate=>(
            {...prevstate,
            [name]:value}
        ))
    }
    const data=useSelector(state=>state.user.register.data)
    const status=data?data.status:null
    const error=useSelector(state=>state.user.register.error)
    const loading=useSelector(state=>state.user.register.loading)
    const dispatch=useDispatch()
    
    const [emailVerification, setEmailVerification] = useState(false);
    const loginDetails={email:formData.email,password:formData.password}
    useEffect(()=>{
        if(status===200)
        {
            setEmailVerification(true);
        }
        if(status===201)
        {
            dispatch(userLogin(loginDetails))
            onSuccess()
            
        }     // otp is successfullyverified`
    },[status,setEmailVerification,onSuccess,dispatch,loginDetails])
    const handleEmailVerification = () => {
       dispatch(userRegistration(formData))
        // Perform email verification logic here, e.g., send OTP to the provided email
        // After verification, set isEmailVerified to true
        
    };
    const otpDetails={email:formData.email,otp:formData.otp}
    const handleSubmit = async(e) => {
        e.preventDefault()
        dispatch(otpVerification(otpDetails))
        // Perform OTP verification logic here
        // After verification, you can redirect the user or perform any other action
        
    };


    return (
        <>
        {loading ? <div className="w-full h-96"><Spinner className="mx-auto mt-44 h-16 w-16"/></div>:<form
        className="account-form w-96 mx-auto border border-black rounded-xl mt-2 p-2"
        onSubmit={handleSubmit}
    >
        <div
            className={
                "account-form-fields flex flex-col gap-y-4 sign-up w-72 mx-auto"
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
            {/* <Input
                id="last-name"
                name="last-name"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                required
            /> */}
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
    </form>}
    </>
        
    );
};

export default SignUpForm;
