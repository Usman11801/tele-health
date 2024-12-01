import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
    gender: "",
    dateOfBirth: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { NEXT_PUBLIC_BASE_URL } = process.env;
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email_address: formData.email,
          phone_number: formData.phoneNumber,
          zip_code: formData.zipCode,
          gender: formData.gender,
          date_of_birth: formData.dateOfBirth,
        }),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
      const data = await response.json();
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
    
  };

  return (
    <div className="signup-area ptb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 pl-0">
            <div className="signup-left">
              <img src="/images/signup-bg.jpg" alt="SignUp" />
            </div>
          </div>

          <div className="col-lg-6 ptb-100">
            <div className="signup-item">
              <div className="signup-head">
                <h2>Sign Up Here</h2>
                <p>
                  Already have an account? <Link href="/sign-in">Sign In</Link>
                </p>
              </div>

              <div className="signup-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phoneNumber"
                          className="form-control"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="zipCode"
                          className="form-control"
                          placeholder="Zip Code"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          name="gender"
                          className="form-control"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="date"
                          name="dateOfBirth"
                          className="form-control"
                          placeholder="Date of Birth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            Yes, I agree with all{" "}
                            <Link href="/terms-condition">
                              Terms & Conditions
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="text-center">
                        <button type="submit" className="btn signup-btn">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
