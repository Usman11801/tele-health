import React, { useEffect, useState } from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/HomeOne/HeroSlider";
import Stats from "../components/HomeOne/Stats";
import AboutSection from "../components/HomeOne/AboutSection";
import Services from "../components/HomeOne/Services";
import OurExpertise from "../components/HomeOne/OurExpertise";
import VideoIntro from "../components/Common/VideoIntro";
import OurDoctors from "../components/Common/OurDoctors";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import NewsletterForm from "../components/Common/NewsletterForm";
import Footer from "../components/_App/Footer";
import axios from 'axios';


const Index = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchToken = async (userEmail, oobCode) => {
    console.log("Fetching token...");
    console.log("baseUrl>>>>>>>>", baseUrl, "====Email>", userEmail, "====oobCode>", oobCode);
  
    try {
      const response = await fetch(`${baseUrl}/getToken?email=${userEmail}&oob=${oobCode}&action=login`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add other headers if required
        },
      });
      console.log("Fetch response:", response);
      if (!response.ok) {
        console.log("Error in response condition>>>>>>>>>>>>");
        throw new Error(`Error is: ${response.status}`);
      }
      console.log("Fetch succeeded, parsing JSON...");
  
      const data = await response.json();
      console.log('Raw data>>>>>>>>:', data);
      localStorage.setItem("token", data?.data?.accessToken);
      localStorage.setItem("hasActiveSubscription", data?.data?.hasActiveSubscription);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };
  

  useEffect(() => {
    // const userEmail = window.localStorage.getItem('emailForSignIn');
    // const urlParams = new URLSearchParams(window.location.search);
    const oobCode = 121323; // This should be dynamically fetched from URL parameters
    // console.log("userEmail>>>>>>", userEmail);
        const userEmail = 'qweqwe@gmail.com';

    // console.log("oobCode>>>>>>", oobCode);

    if (userEmail && oobCode) {
      fetchToken(userEmail, oobCode);
    }
  }, []);

  return (
    <>
      {/* <TopHeader /> */}

      <Navbar />

      <HeroSlider />

      {/* <Stats /> */}

      <AboutSection />

      <Services />

      <OurExpertise />

      <VideoIntro />

      <OurDoctors />

      <LatestBlogPost />

      <NewsletterForm />

      <Footer />
    </>
  );
};

export default Index;
