import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="slider-item slider-item-two"
        style={{ backgroundImage: `url(/images/home-one/home-slider-bg.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="slider-text">
                <div className="slider-shape">
                  <img src="/images/covid-circle-image.png" alt="Shape" />
                </div>

                <h1>Stay Home And Be Aware About Covid-19</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>

                <div className="common-btn">
                  <Link href="/appointment">Get Appointment</Link>
                  <Link href="/about" className="cmn-btn-right">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
