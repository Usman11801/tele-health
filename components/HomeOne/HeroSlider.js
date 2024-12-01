import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import { useRouter } from 'next/router';


const HeroSlider = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      <img
                        src="/images/home-one/home-slider1.png"
                        alt="Shape"
                      />
                    </div>

                    <h1>
                      {currentPath=='/semaglutide-oral'?"Oral Semaglutide Prescribed Online":
                    currentPath=='/glp-1-weight-management'?"Compounded GLP-1 Weight Management":currentPath=='/tirzepatide'?"Compounded Tirzepatide Prescribed Online":currentPath=='/phentermine'?"Online Prescription For Medical Weight Management":currentPath=='/sleep'?"Insomnia Treatment":currentPath=='/testosterone'?"Testosterone Therapy":""
                    }
                    </h1>
                    <p>
                   <span style={{fontWeight:500,fontSize:'1.7rem'}}> 
                   {currentPath=='/semaglutide-oral'?"$199":
                    currentPath=='/glp-1-weight-management'?"$247 ":currentPath=='/tirzepatide'?"$399":currentPath=='/phentermine'?"$102":currentPath=='/sleep'?"29":currentPath=='/testosterone'?"$79":""
                    }
                   {" "} on First Month </span>
                    <br/>
                   <span style={{fontWeight:400,fontSize:'1.1rem'}}>

                   {currentPath=='/semaglutide-oral'?"$$249":
                    currentPath=='/glp-1-weight-management'?"$297 ":currentPath=='/tirzepatide'?"$499":currentPath=='/phentermine'?"$149":currentPath=='/sleep'?"$59":currentPath=='/testosterone'?"$129":""
                    }
                    
                      per Month Thereafter</span>{" "}
                      <br/>
                      {currentPath=='/phentermine' || currentPath=='/sleep' || currentPath=='/testosterone'?"":
                      <span>
                      No Injections - Compounded Medication Placed Under Your Tongue
                     Tablets or Drops - Choose The Best Method For You!
                     The same active ingredient in Ozempic®*, and Rybelsus®* 
                     Everything Included - No Insurance Needed
                     </span>
                      }

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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-two">
                      <img
                        src="/images/home-one/home-slider2.png"
                        alt="Shape"
                      />
                    </div>
                    <h1>Caring Health is Important Than All</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-three">
                      <img
                        src="/images/home-one/home-slider3.png"
                        alt="Shape"
                      />
                    </div>
                    <h1>We Offer Highly Treatments</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
