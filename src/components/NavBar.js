import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Input,
    Collapse,
    Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

// const user = null;
// const user = { role: "admin" };
const NavBar = ({ toggleSignInModal, toggleSignUpModal, openDrawer }) => {
    // const [openNav, setOpenNav] = useState(true);

    // const navList = (
    //     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    //         <Typography
    //             as="li"
    //             variant="small"
    //             color="blue-gray"
    //             className="flex items-center gap-x-2 p-1 font-medium"
    //         >
    //             <Link
    //                 onClick={openDrawer}
    //                 className="flex items-center cursor-pointer"
    //                 // style={{ cursor: "pointer" }}
    //             >
    //                 Bio
    //             </Link>
    //         </Typography>
    //         <Typography
    //             as="li"
    //             variant="small"
    //             color="blue-gray"
    //             className="flex items-center gap-x-2 p-1 font-medium"
    //         >
    //             <Link
    //                 to="/hackathons"
    //                 className="flex items-center cursor-pointer"
    //                 // style={{ cursor: "pointer" }}
    //             >
    //                 Hackathons
    //             </Link>
    //         </Typography>
    //         <Button
    //             variant="text"
    //             size="sm"
    //             className="hidden lg:inline-block"
    //             onClick={toggleSignInModal}
    //         >
    //             Login
    //         </Button>
    //         <Button
    //             variant="text"
    //             size="sm"
    //             className="hidden lg:inline-block"
    //             onClick={toggleSignUpModal}
    //         >
    //             Signup
    //         </Button>
    //     </ul>
    // );

    // return (
    //     <Navbar className="w-full px-3 py-2 lg:px-8 lg:py-4 bg-orange-600 rounded-none border-0">
    //         <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
    //             <Typography
    //                 as="a"
    //                 href="#"
    //                 className="mr-4 cursor-pointer py-1.5 font-medium"
    //                 variant="h3"
    //             >
    //                 HackerHub
    //             </Typography>
    //             <div className="hidden lg:block">{navList}</div>
    //         </div>

    //         {/* <MobileNav open={openNav}>
    //             <div className="container mx-auto">
    //                 {navList}
    //                 <div className="flex items-center gap-x-1">
    //                     <Button fullWidth variant="text" size="sm" className="">
    //                         <span>Log In</span>
    //                     </Button>
    //                     <Button
    //                         fullWidth
    //                         variant="gradient"
    //                         size="sm"
    //                         className=""
    //                     >
    //                         <span>Sign in</span>
    //                     </Button>
    //                 </div>
    //             </div>
    //         </MobileNav> */}
    //     </Navbar>
    // );

    const user = useSelector((state) => state.user.login?.data);

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    // const data = useSelector((state) => state.user.login.data);
    // const dummyUser = data ? data.data : {};

    // const [showProile, setShowProfile] = useState(false);
    // const openDrawer = () => setShowProfile(true);
    // const closeDrawer = () => setShowProfile(false);

    // const user = useSelector((state) => state.user.login.data);

    const navList = (
        <ul className="mt-2 mb-4 text-[#eaeff7] flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            {/* {user ? ( */}
                 {!user? (
                <Typography
                    as="li"
                    variant="small"
                    // color="blue-gray"
                    className="flex items-center gap-x-2 p-1 font-semibold"
                >
                    <Link
                        to="/hackathons"
                        className="flex items-center gap-x-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                            />
                        </svg>
                        Dashboard
                    </Link>
                </Typography>
            ) : null}
            <Typography
                as="li"
                variant="small"
                // color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-semibold "
            >
                <Link
                    to={
                        // user?.role === "admin"
                        !user
                            ? "/admin/hackathons"
                            : "/hackathons"
                    }
                    className="flex items-center gap-x-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                        />
                    </svg>
                    Hackathons
                </Link>
            </Typography>
            
            {/* {user?.role === "admin" ? ( */}
            {!user? (
                <Typography
                    as="li"
                    variant="small"
                    // color="blue-gray"
                    className="flex items-center gap-x-2 p-1 font-semibold"
                >
                    <Link
                        to="/admin/evaluators"
                        className="flex items-center gap-x-1"
                    >
                        <svg
                            className="h-6 w-6 text-slate-900"
                            // width="24"
                            // height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <circle cx="9" cy="7" r="4" />{" "}
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />{" "}
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        Evaluators
                    </Link>
                </Typography>
            ) : null}
            {user ? (
                <Typography
                    as="li"
                    variant="small"
                    // color="blue-gray"
                    className="flex items-center gap-x-2 p-1 font-semibold"
                >
                    <Link
                        to="/ideasubmission"
                        className="flex items-center gap-x-1"
                    >
                        {/* <svg
                            className="h-6 w-6 text-slate-900"
                            // width="24"
                            // height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <circle cx="9" cy="7" r="4" />{" "}
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />{" "}
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg> */}
                        Team Deatails
                    </Link>
                </Typography>
            ) : null}
            {user ? (
                <Typography
                    as="li"
                    variant="small"
                    // color="blue-gray"
                    className="flex items-center gap-x-2 p-1 font-semibold"
                >
                    <Link to="/results" className="flex items-center gap-x-1">
                        {/* <svg
                            className="h-6 w-6 text-slate-900"
                            // width="24"
                            // height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <circle cx="9" cy="7" r="4" />{" "}
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />{" "}
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg> */}
                        Results
                    </Link>
                </Typography>
            ) : null}
            {!user ? (
                <Button
                    size="sm"
                    variant="outlined"
                    className=" rounded-md border-2 opacity-85 hover:opacity-100"
                    ripple={true}
                    onClick={toggleSignInModal}
                    color="white"
                >
                    Login
                </Button>
            ) : null}
            {!user ? (
                <Button
                    size="sm"
                    variant="outlined"
                    className="rounded-md border-2 opacity-85 hover:opacity-100"
                    ripple={true}
                    onClick={toggleSignUpModal}
                    color="white"
                >
                    Register
                </Button>
            ) : null}
            {user ? (
                <Link
                    as="li"
                    onClick={openDrawer}
                    className="flex items-center cursor-pointer"
                >
                    <Avatar
                        src="https://avatar.iran.liara.run/public"
                        alt={""}
                        size="sm"
                        className="w-8 h-8"
                    />
                </Link>
            ) : null}
        </ul>
    );

    return (
        <Navbar className="w-full mx-auto bg-[#050911] px-4 py-2 lg:px-8 lg:py-2 rounded-none border-0">
            <div className="w-full mx-auto flex flex-wrap items-center justify-between text-incedo-primary-600">
                <Link to="/">
                    <Typography
                        // as="a"
                        // href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold"
                        variant="h5"
                        // color="inherit-color"
                    >
                        HackerHub
                    </Typography>
                </Link>
                <div className="hidden lg:block">{navList}</div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    {/* <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
                        <div className="relative w-full gap-2 md:w-max">
                            <Input
                                type="search"
                                placeholder="Search"
                                containerProps={{
                                    className: "min-w-[288px]",
                                }}
                                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                                labelProps={{
                                    className:
                                        "before:content-none after:content-none",
                                }}
                            />
                            <div className="!absolute left-3 top-[13px]">
                                <svg
                                    width="13"
                                    height="14"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                                        fill="#CFD8DC"
                                    />
                                    <path
                                        d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                                        stroke="#CFD8DC"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Button size="md" className="mt-1 rounded-lg sm:mt-0">
                            Search
                        </Button>
                    </div> */}
                </div>
            </Collapse>
            {/* <DrawerDefault
                opens={showProile}
                onClose={closeDrawer}
                user={dummyUser}
            /> */}
        </Navbar>
    );
};

export default NavBar;
