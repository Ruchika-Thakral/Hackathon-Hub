import React, { useState } from "react";
import NavBar from "./NavBar";
 
import PropTypes from "prop-types";
import Login from "./Login";
import Signup from "./Singup";
import Footer from "./Footer";
import ProfileDrawer from "./ProfileDrawer";
import { useSelector } from "react-redux";
import { USER } from "../constants";
 
const BaseLayout = ({ children }) => {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const toggleSignInModal = () => {
        setShowSignInModal(!showSignInModal);
    };
 
    // Function to toggle sign-up modal display
    const toggleSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);
    };
 
    const data = USER
    // useSelector((state) => state.user.login?.data?.data);
    const [showProile, setShowProfile] = useState(false);
    const openDrawer = () => setShowProfile(true);
    const closeDrawer = () => setShowProfile(false);
 
    return (
        <div className="bg-gray-200 min-h-screen">
            <NavBar
                toggleSignInModal={toggleSignInModal}
                toggleSignUpModal={toggleSignUpModal}
                openDrawer={openDrawer}
            />
            <ProfileDrawer
                opens={showProile}
                onClose={closeDrawer}
                user={data}
            />
            <Signup
                showModal={showSignUpModal}
                toggleModal={toggleSignUpModal}
                setShowSignUpModal={setShowSignUpModal}
            />
            <Login
                showModal={showSignInModal}
                toggleModal={toggleSignInModal}
                setShowSignInModal={setShowSignInModal}
            />
            {children}
            <Footer />
        </div>
    );
};
 
BaseLayout.propTypes = {
    children: PropTypes.node,
};
 
export default BaseLayout;