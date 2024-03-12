// SignInForm.jsx
import React from 'react';
import { Input, Button, Typography } from "@material-tailwind/react";

function SignInForm({toggleModal,toggleModals}) {
    const handleSignUpClick = () => {
        toggleModal(); // Close the SignInModal
        toggleModals(); // Open the SignUpModal
      };
      const handleGoogleSignIn = () => {
        // Call the function to initiate Google Sign-In process
        // For example, you can use the Google Sign-In API
    };
    return (
        <form className='account-form  w-96 mx-auto border border-black rounded-xl mt-2 p-2' onSubmit={(evt) => evt.preventDefault()}>
            <div className={'account-form-fields sign-in flex flex-col gap-y-4 sign-up w-72 mx-auto'}>
                <Input id='email' name='email' type='email' label='E-mail' placeholder='abc@gmail.com' required />
                <Input id='password' name='password' type='password' label='Password' placeholder='*******' required />
            </div>
            <br />
            <div style={{alignItems: 'center' ,display: 'flex', flexDirection: 'column'}}>
            <Button className='btn-submit-form' type='submit' style={{ cursor: 'pointer' }}>
                Sign in
            </Button>
            <Button onClick={handleGoogleSignIn} className='btn-google-sign-in' style={{ cursor: 'pointer', marginTop: '10px' }}>
                    Sign in with Google
                </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
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
}

export default SignInForm;
