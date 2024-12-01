import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const DocNav = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">

                  <li className="nav-item">
                  <Link
                          href="/doctorSide/"
                          className={`nav-link ${
                            currentPath == "/doctorSide/" && "active"
                          }`}
                        >
                          Home
                        </Link>


                  </li>

                  <li className="nav-item">

                  <Link
                          href="/patient-history/"
                          className={`nav-link ${
                            currentPath == "/patient-history/" && "active"
                          }`}
                        >
                          History
                        </Link>
                  </li>


                </ul>
                
              </div>

              <div className="nav-srh">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search..."
                  />

                  <button className="search-icon icon-search">
                    <i className="icofont-search-1"></i>
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocNav;
