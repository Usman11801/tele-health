import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expertise</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <Link href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-doctor-alt"></i>
                        <h3>Certified Doctors</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <Link href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-stretcher"></i>
                        <h3>Emergency</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <Link href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-network"></i>
                        <h3>Teachnology</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <Link href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-ambulance-cross"></i>
                        <h3>Ambulance</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <img src="/images/about4.jpg" alt="Expertise" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
