import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
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

    const [isSignIn, setIsSignIn] = useState(null);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const token = window.localStorage.getItem("token");
        setIsSignIn(token);
      }
    }, []);
  
    const handleLogout = () => {
      window.localStorage.clear();
      setIsSignIn(null);
    };    return (
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
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Treatments
                    </Link>

                    <ul className="dropdown-menu">
                      {/* <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Home Demo - 1
                        </Link>
                      </li> */}

                      <li className="nav-item">
                        <Link
                          href="/semaglutide-oral/"
                          className={`nav-link ${
                            currentPath == "/semaglutide-oral/" && "active"
                          }`}
                        >
                          Oral Semaglutide Weight 
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/glp-1-weight-management/"
                          className={`nav-link ${
                            currentPath == "/glp-1-weight-management/" && "active"
                          }`}
                        >
                         GLP-1 Weight 
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/tirzepatide/"
                          className={`nav-link ${
                            currentPath == "/tirzepatide/" && "active"
                          }`}
                        >
                          Tirzepatide Weight 
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/phentermine/"
                          className={`nav-link ${
                            currentPath == "/phentermine/" && "active"
                          }`}
                        >
                         hentermine Weight 
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/sleep/"
                          className={`nav-link ${
                            currentPath == "/sleep/" && "active"
                          }`}
                        >
                         Insomnia Therapy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/testosterone/"
                          className={`nav-link ${
                            currentPath == "/testosterone/" && "active"
                          }`}
                        >
                        Testosterone Therapy
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about/"
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                  <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                      FAQ
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/appointment/"
                          className={`nav-link ${
                            currentPath == "/appointment/" && "active"
                          }`}
                        >
                          Appointment
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/departments/"
                          className={`nav-link ${
                            currentPath == "/departments/" && "active"
                          }`}
                        >
                          Departments
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/testimonials/"
                          className={`nav-link ${
                            currentPath == "/testimonials/" && "active"
                          }`}
                        >
                          Testimonials
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/sign-up/"
                          className={`nav-link ${
                            currentPath == "/sign-up/" && "active"
                          }`}
                        >
                          Sign Up
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/sign-in/"
                          className={`nav-link ${
                            currentPath == "/sign-in/" && "active"
                          }`}
                        >
                          Sign In
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ's
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 Error Page
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/privacy-policy/"
                          className={`nav-link ${
                            currentPath == "/privacy-policy/" && "active"
                          }`}
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/terms-condition/"
                          className={`nav-link ${
                            currentPath == "/terms-condition/" && "active"
                          }`}
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Services
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/service-details/"
                          className={`nav-link ${
                            currentPath == "/service-details/" && "active"
                          }`}
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                  <Link
                          href="/doctors/"
                          className={`nav-link ${
                            currentPath == "/doctors/" && "active"
                          }`}
                        >
                          Doctors
                        </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/doctors/"
                          className={`nav-link ${
                            currentPath == "/doctors/" && "active"
                          }`}
                        >
                          Doctors
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/doctor-details/"
                          className={`nav-link ${
                            currentPath == "/doctor-details/" && "active"
                          }`}
                        >
                          Doctor Details
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blogs
                        </Link>
                    {/* <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Blog
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link href="/sign-in/" className={`nav-link ${currentPath === "/sign-in/" ? "active" : ""}`}>
            {isSignIn === null ? (
              <span onClick={()=>{router.push("/")}}>Login</span>
            ) : (
              <span onClick={isSignIn ? handleLogout : null}>
                {isSignIn ? "Logout" : "Sign In"}
              </span>
            )}
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

export default Navbar;
