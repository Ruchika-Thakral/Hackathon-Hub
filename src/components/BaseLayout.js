import React, { useState } from "react";
import NavBar from "./NavBar";

import PropTypes from "prop-types";
import Login from "./Login";
import Signup from "./Singup";
import Footer from "./Footer";
import ProfileDrawer from "./ProfileDrawer";
import { useSelector } from "react-redux";
import { USER } from "../constants";
import { selectUserDetails } from "../features/user/userSlice";
import { Slide, ToastContainer, toast } from "react-toastify";
// import { Notification } from "./Notification";

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

    const handleToggleSignUp = (b = null) => {
        if (b === null) {
            setShowSignUpModal(!showSignUpModal);
            return;
        }

        if (b === true) {
            setShowSignUpModal(b);
            return;
        }
        if (b === false) {
            setShowSignUpModal(b);
            return;
        }
    };

    // Function to toggle sign-up modal display
    const handleToggleSignIn = (b = null) => {
        if (b === null) {
            setShowSignInModal(!showSignInModal);
            return;
        }

        if (b === true) {
            setShowSignInModal(b);
            return;
        }
        if (b === false) {
            setShowSignInModal(b);
            return;
        }
    };

    const userData = useSelector(selectUserDetails);
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
            {/* <Notification /> */}
            {/* <ToastContainer /> */}
            <ProfileDrawer
                opens={showProile}
                onClose={closeDrawer}
                user={userData}
            />
            <Signup
                showModal={showSignUpModal}
                toggleModal={toggleSignUpModal}
                setShowSignUpModal={setShowSignUpModal}
                toggleSignInModal={toggleSignInModal}
                toggleSignUpModal={toggleSignUpModal}
                handleToggleSignIn={handleToggleSignIn}
                handleToggleSignUp={handleToggleSignUp}
            />
            <Login
                showModal={showSignInModal}
                toggleModal={toggleSignInModal}
                setShowSignInModal={setShowSignInModal}
                toggleSignInModal={toggleSignInModal}
                toggleSignUpModal={toggleSignUpModal}
                handleToggleSignIn={handleToggleSignIn}
                handleToggleSignUp={handleToggleSignUp}
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
