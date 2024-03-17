import React from "react";

import HorizontalScrollBar from "../components/HorizontalScrollBar";
import NavBar from "../components/NavBar";
import { useState } from "react";
import SignUpDialog from "../components/SignupDailog";
import SignInDialog from "../components/LoginDailog";
import Faq from "../components/Faq";
import DrawerDefault from "../components/Profile";
import DualFormCard from "../components/Host";
import Footer from "../components/Footer";
import BaseLayout from "../components/BaseLayout";
import Categories from "../components/Categories";

function Home() {
    // const [showSignInModal, setShowSignInModal] = useState(false);
    // const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showProile, setShowProfile] = useState(false);
    const openDrawer = () => setShowProfile(true);
    const closeDrawer = () => setShowProfile(false);

    // Function to toggle sign-in modal display
    // const toggleSignInModal = () => {
    //     setShowSignInModal(!showSignInModal);
    // };

    // // Function to toggle sign-up modal display
    // const toggleSignUpModal = () => {
    //     setShowSignUpModal(!showSignUpModal);
    // };
    const dummyUser = {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hackathons: ["Hackathon 1", "Hackathon 2", "Hackathon 3"],
    };
    return (
        <BaseLayout>
            <div className="bg-white">
                {/* <NavBar toggleSignInModal={toggleSignInModal} toggleSignUpModal={toggleSignUpModal} showProile={showProile} openDrawer={openDrawer} closeDrawer={closeDrawer}/> */}
                {/* <SignUpDialog
                    showModal={showSignUpModal}
                    toggleModal={toggleSignUpModal}
                />
                <SignInDialog
                    showModal={showSignInModal}
                    toggleModal={toggleSignInModal}
                    toggleModals={toggleSignUpModal}
                /> */}
                <DrawerDefault
                    opens={showProile}
                    onClose={closeDrawer}
                    user={dummyUser}
                />
                <Categories />
                <HorizontalScrollBar />
                <DualFormCard />
                <Faq />
                {/* <Footer /> */}
                {/* <Profile/> */}
            </div>
        </BaseLayout>
    );
}

export default Home;
