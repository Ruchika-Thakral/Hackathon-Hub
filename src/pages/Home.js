import React from 'react'

import HorizontalScrollBar from '../components/HorizontalScrollBar';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import SignInDialog from '../components/ELoginDailog';
import SignUpDialog from '../components/ESignupDialog';
// import SignUpDialog from '../components/ESignupDailog';
import Faq from '../components/Faq';
import DrawerDefault from '../components/Profile';
import DualFormCard from '../components/Host';
import Footer from '../components/Footer';
import { useSelector } from "react-redux";

function Home() {
  
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showProile, setShowProfile] = useState(false);
  const openDrawer = () => setShowProfile(true);
  const closeDrawer = () => setShowProfile(false);
 
  // Function to toggle sign-in modal display
  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };
 
  // Function to toggle sign-up modal display
  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };
  const data=useSelector(state=>state.user.login.data)
  const dummyUser = data?data.data:{}
    return (
    <div>
  
    <NavBar toggleSignInModal={toggleSignInModal} toggleSignUpModal={toggleSignUpModal} showProile={showProile} openDrawer={openDrawer} closeDrawer={closeDrawer}/>
    <SignUpDialog showModal={showSignUpModal} toggleModal={toggleSignUpModal} setShowSignUpModal={setShowSignUpModal}/>
    <SignInDialog showModal={showSignInModal} toggleModal={toggleSignInModal} toggleModals={toggleSignUpModal} setShowSignInModal={setShowSignInModal}/>
    <DrawerDefault opens={showProile} onClose={closeDrawer} user={dummyUser}/>
    <HorizontalScrollBar/>
    <DualFormCard/>
    <Faq/>
    <Footer/>
    {/* <Profile/> */}
    </div>
    )

}

export default Home
