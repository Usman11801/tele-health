import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import BlogGrid from "../components/Blog/BlogGrid";

const Blog = () => {
  return (
    <>
      {/* <TopHeader /> */}

      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        bgImage="page-title-four"
      />

      <BlogGrid />

      <Footer />
    </>
  );
};

export default Blog;
