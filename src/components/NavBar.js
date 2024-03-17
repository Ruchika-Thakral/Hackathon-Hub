import React from "react";
import {
    Navbar,
    //MobileNav,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = ({ toggleSignInModal, toggleSignUpModal, openDrawer }) => {
    const user = useSelector(state=>state.user.login.data)
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                {user && <Link
                    onClick={openDrawer}
                    className="flex items-center"
                    style={{ cursor: "pointer" }}
                >
                    Profile
                </Link>}
                
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Link
                    to="/hackathons"
                    className="flex items-center"
                    style={{ cursor: "pointer" }}
                >
                    Hackathons
                </Link>
            </Typography>
            {!user &&  <>
            <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={toggleSignInModal}
            >
                Login
            </Button>
            <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={toggleSignUpModal}
            >
                Signup
            </Button>
            </>}
           
        </ul>
    );

    return (
        <Navbar className="w-full px-4 py-2 lg:px-8 lg:py-4 bg-orange-600">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                    variant="h1"
                >
                    HackerHub
                </Typography>
                <div className="hidden lg:block">{navList}</div>
            </div>

            {/* <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav> */}
        </Navbar>
    );
};

export default NavBar;
