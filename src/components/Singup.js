// SignUpForm.jsx
import React, { useState } from 'react';
import { Input, Button} from "@material-tailwind/react";

function SignUpForm() {
    const [isEmailVerified, setEmailVerified] = useState(false);
    const [otp, setOtp] = useState('');

    const handleEmailVerification = (evt) => {
        // Perform email verification logic here, e.g., send OTP to the provided email
        // After verification, set isEmailVerified to true
        setEmailVerified(true);
    };

    const handleVerifyOTP = (evt) => {
        // Perform OTP verification logic here
        // After verification, you can redirect the user or perform any other action
        console.log('OTP verified');
    };

    return (
        <form className='account-form w-96 mx-auto border border-black rounded-xl mt-2 p-2' onSubmit={(evt) => evt.preventDefault()}>
            <div className={'account-form-fields flex flex-col gap-y-4 sign-up w-72 mx-auto'}>
                    <Input id='first-name' name='first-name' type='text' label='First Name' placeholder='First Name' required />
                    <Input id='last-name' name='last-name' type='text' label='Last Name' placeholder='Last Name' required />
                    <Input id='email' name='email' type='email' label='E-mail' placeholder='Email' required />
                    <Input id='password' name='password' type='password' label='Password' placeholder='Password' required />
                    <Input id='repeat-password' name='repeat-password' type='password' label='Confirm password' placeholder='Label Password' required />
                {!isEmailVerified && (
                    <Button className='w-fit' type='button' onClick={handleEmailVerification} style={{ cursor: 'pointer' }}>
                        Verify Email
                    </Button>
                )}
                {isEmailVerified && (
                    <>
                        <Input id='otp' name='otp' type='text' label='Enter OTP' value={otp} onChange={(evt) => setOtp(evt.target.value)} required />
                        <Button className='w-fit' type='button' onClick={handleVerifyOTP} style={{ cursor: 'pointer' }}>
                            Verify OTP
                        </Button>
                    </>
                )}
            </div>
            <br />
            <div className='w-fit mx-auto'>
            <Button className='btn-submit-form' type='submit' style={{ cursor: 'pointer'}}>
                Sign up
            </Button>
            </div>
        </form>
    );
}


export default SignUpForm;