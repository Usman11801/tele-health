import React from 'react'
import OtpScreen from '../components/OtpScreen'

const otpVerify = () => {
  return (
    <div>
           <>
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
                  <h2>Verify Email</h2>
                 
                </div>
                
                <div className="signup-form">
                    <div className="row">
                    {/* <p>Login with <span style={{fontWeight:600}}>Email</span> or  <span style={{fontWeight:600}}>Phone Number</span> ?</p> */}

                     
                      <div className="col-lg-12">
                      <OtpScreen/>
                      </div>
                      {/* <div className="col-lg-12">
                        <div className="text-center">
                          <button   className="btn signup-btn">
                            Login
                          </button>

                        </div>
                      </div> */}
                    </div>
                </div>
                
              

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default otpVerify