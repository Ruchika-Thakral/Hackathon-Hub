// SignInForm.jsx
import React, { useEffect, useState } from "react";
import {
    Input,
    Button,
    Typography,
    Spinner,
    Dialog,
    CardHeader,
    CardBody,
    Card,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/user/userSlice";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
// import { showNotification } from "./Notification";

const Login = ({
    showModal,
    toggleModal,
    setShowSignInModal,
    handleToggleSignUp,
    handleToggleSignIn,
}) => {
    const [formData1, setFormData1] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData1((prevstate) => ({ ...prevstate, [name]: value }));
    };
    const handleSignUpClick = () => {
        handleToggleSignIn(false);
        handleToggleSignUp(true);
        // toggleModal(); // Close the SignInModal
        // toggleModals(); // Open the SignUpModal
    };
    const handleGoogleSignIn = () => {
        // Call the function to initiate Google Sign-In process
        // For example, you can use the Google Sign-In API
    };
    const dispatch = useDispatch();
    // const data = null;
    // useSelector((state) => state.user.login.data);
    // const status = data ? data.status : null;
    // const error = useSelector((state) => state.user.login.error);
    // const loading = useSelector((state) => state.user.login.loading);
    const [showError, setShowError] = useState(false);
    const error = useSelector((state) => state.user.error);
    const loading = useSelector((state) => state.user.loading);
    const [passwordInputType, setPasswordInputType] = useState("password");

    const handleTogglePassword = (type = "none") => {
        if (type === "none") {
            if (passwordInputType === "password") {
                setPasswordInputType("text");
            }
            if (passwordInputType === "text") {
                setPasswordInputType("password");
            }
        }
        if (type === "password") {
            setPasswordInputType(type);
        }
        if (type === "text") {
            setPasswordInputType(type);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await dispatch(userLogin(formData1)).unwrap();

            // showNotification({type: "success", message: "Login successful!"})
            setShowError(false);
            setFormData1({
                email: "",
                password: "",
            });
            handleToggleSignIn(false);
            navigate("/hackathons");
            toast.success("Login Successful!");
        } catch (error) {
            setShowError(true);
            // toast.error("Login Failed!");
        }
    };

    useEffect(() => {
        setShowError(false);
    }, [showModal]);

    const navigate = useNavigate();
    // useEffect(() => {
    //     if (status === 200) {
    //         setShowSignInModal(false);
    //         // navigate('/')
    //         // toast.success("SignIn Success!", {
    //         //     position: "top-center",
    //         //     transition:Slide
    //         // });
    //     }
    // }, [status]);
    const dialogHandler = () => {
        // toggleModal();
        handleToggleSignIn(false);
        handleTogglePassword("password");
        setFormData1({
            email: "",
            password: "",
        });
    };

    return (
        <>
            <Dialog open={showModal} handler={dialogHandler} size={"xs"}>
                {/* <ToastContainer /> */}
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
                            {loading ? (
                                <div className="w-full h-72">
                                    <Spinner className="mx-auto mt-16 h-16 w-16" />
                                </div>
                            ) : (
                                <form
                                    className="account-form w-full mx-auto rounded-xl mt-2 p-2"
                                    onSubmit={handleSubmit}
                                >
                                    <div
                                        className={
                                            "account-form-fields mb-1 sign-in flex flex-col gap-y-4 sign-up w-full mx-auto"
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
                                            type={passwordInputType}
                                            // type="password"
                                            label="Password"
                                            icon={
                                                passwordInputType ===
                                                "password" ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="w-5 h-5"
                                                        onClick={() =>
                                                            handleTogglePassword()
                                                        }
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
                                                            clipRule="evenodd"
                                                        />
                                                        <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
                                                    </svg>
                                                ) : passwordInputType ===
                                                  "text" ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="w-5 h-5"
                                                        onClick={() =>
                                                            handleTogglePassword()
                                                        }
                                                    >
                                                        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ) : null
                                            }
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
                                        {showError && error && (
                                            <Typography className="text-red-500 text-xs w-fit">
                                                {error?.message ||
                                                    "empty error"}
                                            </Typography>
                                        )}
                                        <Button
                                            className="btn-submit-form cursor-pointer"
                                            type="submit"
                                            // size="sm"
                                            // onClick={handleSubmit}
                                            // style={{ cursor: "pointer" }}
                                        >
                                            Sign in
                                        </Button>
                                        {/* <Button
                                    onClick={handleGoogleSignIn}
                                    className="btn-google-sign-in mt-2 cursor-pointer"
                                    // style={{ cursor: "pointer", marginTop: "10px" }}
                                >
                                    Sign in with Google
                                </Button> */}
                                        <Typography
                                            variant="small"
                                            className="mt-4 flex justify-center"
                                        >
                                            Don&apos;t have an account?
                                            <Typography
                                                // as="a"
                                                // href="#signup"
                                                variant="small"
                                                color="blue-gray"
                                                className="ml-1 font-bold cursor-pointer"
                                                onClick={handleSignUpClick}
                                            >
                                                Sign up
                                            </Typography>
                                        </Typography>
                                    </div>
                                </form>
                            )}
                        </CardBody>
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
        </>
    );
};

export default Login;
