import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="services-area pb-70" style={{paddingTop:"5%"}}>
        <div className="container">
          <div className="">
            <h2 style={{textAlign:'center'}}>GLP-1 Weight Management Options</h2>
          </div>
          <p style={{textAlign:'center'}}>These are absorbed by the body to help reduce appetite and cravings.</p>

          <div className="row justify-content-center">

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  {/* <i className="icofont-doctor"></i> */}

                  {/* <Link href="/service-details"> */}
                    <h3>ECompounded Oral Semaglutide Tablets</h3>
                  {/* </Link> */}
                  <p>
                  Daily Dissolving Tablets
                  </p>
                  <img src="https://framerusercontent.com/images/7jPa1mOiCkvvq2Zhn8kEzCTpmU.png" width={100}/>

                  <p>Tablet dosing of Semaglutide delivers the medication in a pleasant, easy, mint-flavored dissolving tablet. This is ideal for anyone who prefers an easily portable, on-the-go option for their medications, all with a delicious taste. </p>
                </div>
                     <div style={{paddingTop:'15px'}}>
                     <div className="common-btn2">
                     <Link href="/appointment">Get Appointment</Link>
                     </div>                     </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  {/* <i className="icofont-doctor"></i> */}

                  {/* <Link href="/service-details"> */}
                    <h3>Compounded Oral Semaglutide Drops
</h3>
                  {/* </Link> */}
                  <p>
                  Daily Sublingual Drops

                  </p>
                  <img src="	https://framerusercontent.com/images/h39OiSnFxj1Dyc0HeheNeDST5CM.png?scale-down-to=1024" width={150}/>

                  <p>Tablet dosing of Semaglutide delivers the medication in a pleasant, easy, mint-flavored dissolving tablet. This is ideal for anyone who prefers an easily portable, on-the-go option for their medications, all with a delicious taste. </p>
                </div>
                <div style={{paddingTop:'15px'}}>
                     <div className="common-btn2">
                     <Link href="/appointment">Get Appointment</Link>
                     </div>
                     </div>
                 
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-6">
              <div className="service-item">
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
            </div> */}

            {/* <div className="col-sm-6 col-lg-3">
              <div className="service-item">
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
              <div className="service-item">
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
              <div className="service-item">
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
              <div className="service-item">
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
              <div className="service-item">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
