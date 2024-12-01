import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesCard from "../components/Services/ServicesCard";
import OurExpertise from "../components/Services/OurExpertise";
import Footer from "../components/_App/Footer";

const Services = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        bgImage="page-title-one"
      />

      <ServicesCard />

      <OurExpertise />

      <Footer />
    </>
  );
};

export default Services;
