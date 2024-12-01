import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area service-area-two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Get Special Services For Covid-19</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-doctor"></i>
                  <Link href="/service-details">
                    <h3>Expert Doctors</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-helicopter"></i>
                  <Link href="/service-details">
                    <h3>Emergency Helicopter</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-architecture"></i>
                  <Link href="/service-details">
                    <h3>Leading Technology</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-user-male"></i>
                  <Link href="/service-details">
                    <h3>24 Hours Open</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <Link href="/service-details">
                    <h3>Free Ambulance</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-home"></i>
                  <Link href="/service-details">
                    <h3>Home Advise</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
