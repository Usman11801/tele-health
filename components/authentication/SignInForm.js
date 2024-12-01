import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { auth, sendSignInLinkToEmail } from '../../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInForm = () => {
  const [loginOption, setLoginOption] = useState("email");
  const [loginInput, setLoginInput] = useState("");

  const router = useRouter();

  const handleOptionChange = (e) => {
    setLoginOption(e.target.value);
  };

  const handleEmailLogin = async (e) => {
    toast.success("Please check your email for login")

    e.preventDefault();
    const email = loginInput;
    const actionCodeSettings = {
      url: email==="usman11801@gmail.com"? 'http://localhost:3000/doctorSide': 'http://localhost:3000/', 
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      localStorage.setItem('emailForSignIn', email);

      const urlParams = new URLSearchParams(window.location.search);
      const oobCode = urlParams.get('oobCode');
      localStorage.setItem("oobCode",oobCode)
      // router.push('/otp-verify');
    } catch (error) {
      console.error('Error sending email link:', error);
    }
  };

  const handleLoginInput = (e) => {
    setLoginInput(e.target.value);
  };

  return (
    <>
              <ToastContainer />

    <div className="signup-area ptb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 pl-0">
            <div className="login-left">
              <img src="/images/login-bg.jpg" alt="Login" />
            </div>
          </div>
          <div className="col-lg-6 ptb-100">
            <div className="signup-item">
              <div className="signup-head">
                <h2>Login Here</h2>
              </div>
              <div className="signup-form">
                <form>
                  <div className="row">
                    <p>Login with <span style={{ fontWeight: 600 }}>Email</span> or <span style={{ fontWeight: 600 }}>Phone Number</span> ?</p>
                    <div className="col-lg-12 mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="email"
                          checked={loginOption === "email"}
                          onChange={handleOptionChange}
                        />
                        <label className="form-check-label">Email</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="phone"
                          checked={loginOption === "phone"}
                          onChange={handleOptionChange}
                        />
                        <label className="form-check-label">Phone</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type={loginOption === "email" ? "email" : "tel"}
                          className="form-control"
                          placeholder={
                            loginOption === "email"
                              ? "Your Email"
                              : "Your Phone Number"
                          }
                          onChange={handleLoginInput}
                        />
                      </div>
                      <p>
                        Don't have an account yet?{" "}
                        <Link href="/sign-up">Sign Up Here</Link>
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button
                          disabled={!loginInput}
                          onClick={handleEmailLogin}
                          className="btn signup-btn"
                        >
                          Login
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
    </>

  );
};

export default SignInForm;
