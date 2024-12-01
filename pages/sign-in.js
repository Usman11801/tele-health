import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import SignInForm from "../components/authentication/SignInForm";

const SignIn = () => {
  return (
    <>
      {/* <TopHeader /> */}

      {/* <Navbar /> */}

      {/* <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
        bgImage="page-title-one"
      /> */}

      <SignInForm />

      {/* <Footer /> */}
    </>
  );
};

export default SignIn;
