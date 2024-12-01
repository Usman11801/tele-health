import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:info@disin.com">info@disin.com</a>
                      <a href="mailto:hello@disin.com">hello@disin.com</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+07554332322">Call: +07 554 332 322</a>
                      <a href="tel:+236256256365">Call: +236 256 256 365</a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      210-27 Quadra, Market Street, Victoria Canada
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/about">Blog</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Our Expertise</Link>
                    </li>
                    <li>
                      <Link href="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link href="/doctor">Doctors</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <Link href="/service-details">Dental Care</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Cardiology</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Hijama Therapy</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Massage Therapy</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Ambluance Sevices</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Medicine</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-feedback">
                  <h3>Feedback</h3>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="your_message"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-left">
                      <button type="submit" className="btn feedback-btn">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "}
              <a href="https://hibootstrap.com/" target="_blank">
                HiBootstrap
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
