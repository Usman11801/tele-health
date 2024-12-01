import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title-two">
            <span>Services</span>
            <h2>Our Hospital Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-doctor"></i>
                  <Link href="/service-details">
                    <h3>Expert Doctor</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-prescription"></i>
                  <Link href="/service-details">
                    <h3>Diagnosis</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-patient-file"></i>
                  <Link href="/service-details">
                    <h3>Pathology</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-tooth"></i>
                  <Link href="/service-details">
                    <h3>Dental Care</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-heart-beat-alt"></i>
                  <Link href="/service-details">
                    <h3>Cardiology</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-drug"></i>
                  <Link href="/service-details">
                    <h3>Medicine</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-dna-alt-1"></i>
                  <Link href="/service-details">
                    <h3>Neurology</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item bg rounded-4">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <Link href="/service-details">
                    <h3>Ambulance</h3>
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
