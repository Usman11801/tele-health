import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const AboutSection = () => {

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about1.jpg" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                
                <img src="/images/about-shape1.png" alt="About" />
                <h2>What are Compounded 
GLP-1 Medications?</h2>
                <p>
                Compounded GLP-1 Medications are patient-specific medications created in a state Board of Pharmacy or FDA licensed compounding facility per a prescription from a licensed healthcare professional. Compounded drugs are required to exclusively use ingredients from FDA-licensed facilities, and test sterile compounds for potency, sterility, and purity. 

While compounded drugs are legal they do not undergo pre-market approval from the FDA as they are not made in large batches for the public, compounds are made based on specific orders from a medical professional. Because of that the dose, route of administration, and efficacy may differ from commercially available, brand-name, drugs.{" "}
                </p>

                <ul>
                  {/* <li>
                    <i className="icofont-check-circled"></i>
                    Browse Our Website
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Choose Service
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Send Messege
                  </li> */}
                </ul>

                <div className="common-btn2">
                     <Link href="/appointment">Get Appointment</Link>
                     </div>              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
