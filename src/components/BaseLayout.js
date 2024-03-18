import React, { useState } from "react";
import NavBar from "./NavBar";

import PropTypes from "prop-types";
import SignInDialog from "./LoginDailog";
import SignUpDialog from "./SignupDailog";
import Footer from "./Footer";

import DrawerDefault from "../components/Profile";
import { useDispatch, useSelector } from "react-redux";

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

    const data = useSelector((state) => state.user.login?.data?.data);
    // const dummyUser = data ? data.data : {};
    // const dummyUser = {
    //     name: "John Doe",
    //     email: "john@example.com",
    //     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     hackathons: ["Hackathon 1", "Hackathon 2", "Hackathon 3"],
    // };
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
            <DrawerDefault
                opens={showProile}
                onClose={closeDrawer}
                user={data}
            />
            <SignUpDialog
                showModal={showSignUpModal}
                toggleModal={toggleSignUpModal}
            />
            <SignInDialog
                showModal={showSignInModal}
                toggleModal={toggleSignInModal}
                toggleModals={toggleSignUpModal}
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
