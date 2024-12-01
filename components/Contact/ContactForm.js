import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    toast.success("Message sent succesfully")


    e.preventDefault();
    try {
      const url = `${baseUrl}/submit-contact`;
      const { name, email, number, subject, message } = contact;
      const payload = { name, email, number, subject, message };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the headers
        },
        body: JSON.stringify(payload)
      });      console.log(response);
      setContact(INITIAL_STATE);
      // alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <ToastContainer/>
      <div className="drop-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 p-0">
              <div className="drop-item drop-img">
                <div className="drop-left">
                  <h2>Drop your message for any info or question</h2>

                  <form >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Your email address"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            value={contact.number}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            required
                          />
                        </div>
                      </div> */}

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Your Subject"
                            value={contact.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            cols="30"
                            rows="6"
                            className="form-control"
                            placeholder="Your message..."
                            value={contact.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button onClick={handleSubmit} className="drop-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5 p-0">
              <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                <img src="/images/about4.jpg" alt="Contact" />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>

                  <h3>Emergency Call</h3>
                  <p>+07 554 332 322</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
