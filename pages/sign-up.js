import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import SignUpForm from "../components/authentication/SignUpForm";

const SignUp = () => {
  return (
    <>
      {/* <TopHeader /> */}

      {/* <Navbar /> */}

      {/* <PageBanner
        pageTitle="Sign Up"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign Up"
        bgImage="page-title-one"
      /> */}

      <SignUpForm />

      {/* <Footer /> */}
    </>
  );
};

export default SignUp;
