import React, {useState} from "react";
import NavBar from "./NavBar";

import PropTypes from "prop-types";
import SignInDialog from "./LoginDailog";
import SignUpDialog from "./SignupDailog";
import Footer from "./Footer";

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
    return (
        <div className="bg-gray-200 min-h-screen">
            <NavBar toggleSignInModal={toggleSignInModal} toggleSignUpModal={toggleSignUpModal}/>
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
