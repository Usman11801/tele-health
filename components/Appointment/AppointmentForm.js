import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { format, parseISO, isAfter, isEqual } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setData, selectData } from '../../store/slices/exampleSlice';


const AppointmentForm = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [service, setService] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);

  const getAppointments = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${baseUrl}/appointments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Appointments data>>>>>>>>:", data.data);
      setBookedAppointments(data.data);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  const getPendingAppointments = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${baseUrl}/pending-appointments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setPendingAppointments(data.data);

      console.log("Appointments pending data>>>>>>>>:", data.data);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };
// date_time: isoDateTime,
const bookAppointment = async (event) => {
  event.preventDefault();

  const token2 = localStorage.getItem("token");
  const hasActiveSubscription = localStorage.getItem("hasActiveSubscription");

  try {
    if (!service || !selectedDate || !selectedTime || !category) {
      alert("All fields are required.");
      return;
    }

    const isoDateTime = `${selectedDate.toISOString().split("T")[0]} ${selectedTime}`;
    const appointmentData = {
      visit_type: service,
      // date_time: "2025-10-30 03:00",
      date_time: isoDateTime,
      category: category,
    };

    const response = await fetch(`${baseUrl}/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token2}`,
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const res = await response.json();
    console.log("Response of book >>>>>>>>>", res);

    toast.success("Appointment Booked");
    dispatch(setData({ appointmentId: res?.data?.id, patientId: res?.data?.patientId }));
    router.push('/subscription');

    if (!hasActiveSubscription) {
      // router.push('/subscription');
    }

    // Refresh appointments after booking
    getAppointments();
    getPendingAppointments();
    resetState();

  } catch (error) {
    console.error("Error booking appointment:", error);
  }
};


  useEffect(() => {
    getAppointments();
    getPendingAppointments();
  }, []);

  const resetState = () => {
    setService("");
    setCategory("");
    setSelectedDate(null);
    setSelectedTime("");
  };

  const [activeTab, setActiveTab] = useState('booked');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const formatDateTime = (isoString) => {
    const date = parseISO(isoString);
    const formattedDate = format(date, 'MM/dd/yyyy');
    const startTime = format(date, 'h:mm a');
    const endTime = format(new Date(date.getTime() + (1 * 60 * 60 * 1000)), 'h:mm a'); // Adding 1 hour for end time

    return `${formattedDate} <span>${startTime} - ${endTime}</span>`;
  };

  const videoCallEnter = async (val) => {
    console.log("videoCallEnter>>>>>>>>>>", val?.id);
    // router.push({
    //   pathname: '/testPage',
    //   query: {
    //     rtctoken: data.rtcToken,
    //     channelName: data.channelName,
    //     info:false
    //   }
    // });
    router.push({
      pathname: '/telehealth-call',
      query: {
        appointment: val?.id,
        info:false
      }
    });
    // try {
    //   const token = localStorage.getItem("token");

    //   const response = await fetch(`${baseUrl}/joinRoom?appointmentId=${val?.id}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     }
    //   });

    //   console.log("response", response);

    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   console.log("response data>>>>>>>>>>>", data.rtcToken, data.channelName);

    //   router.push({
    //     pathname: '/testPage',
    //     query: {
    //       rtctoken: data.rtcToken,
    //       channelName: data.channelName,
    //       info:false
    //     }
    //   });
    // } catch (error) {
    //   console.error("An error occurred:", error.message);
    // }
  };

  const isAppointmentTimeArrived = (isoString) => {
    const appointmentDateTime = parseISO(isoString);
    const now = new Date();
    return isAfter(now, appointmentDateTime) || isEqual(now, appointmentDateTime);
  };

  return (
    <>
      <ToastContainer />

      <div className="appointment-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center appointment-wrap-two">
            <div className="col-lg-7">
              <div className="appointment-item appointment-item-two">
                <div className="appointment-shape">
                  <img src="/images/hart-img1.png" alt="Shape" />
                </div>

                <h2>Book your appointment</h2>
                <span>We will confirm your appointment within 2 hours</span>

                <div className="appointment-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Visit Type</label>
                          <select
                            className="form-control"
                            id="visitType"
                            value={service}
                            onChange={handleServiceChange}
                          >
                            <option value="">Select Visit Type</option>
                            <option value="Depression Treatment">Depression Treatment</option>
                            <option value="Insomnia Treatment">Insomnia Treatment</option>
                            <option value="Weight Loss">Weight Loss</option>
                            <option value="ADHD / ADD Treatment">ADHD / ADD Treatment</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Category Type</label>
                          <select
                            className="form-control"
                            id="categoryType"
                            value={category}
                            onChange={handleCategoryChange}
                          >
                            <option value="">Select Category Type</option>
                            <option value="General Visit">General Visit</option>
                            <option value="Specialized Consultation">Specialized Consultation</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div style={{ display: 'flex', flexDirection: 'column' }} className="form-group">
                          <i className="icofont-ui-calendar"></i>
                          <label>Date</label>
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            minDate={today}
                            maxDate={nextMonth}
                            className="form-control"
                            placeholderText="Select Date"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-wall-clock"></i>
                          <label>Time</label>
                          <select
                            className="form-control"
                            id="time"
                            value={selectedTime}
                            onChange={handleTimeChange}
                          >
                            <option value="">Select Time</option>
                            <option value="00:40">00:40</option>
                            <option value="01:00">01:50</option>
                            <option value="02:00">02:00</option>
                            <option value="03:00">03:00</option>
                            <option value="04:00">04:00</option>
                            <option value="05:00">05:00</option>
                            <option value="6:00">6:00</option>
                            <option value="7:47">7:00</option>
                            <option value="19:08">8:00</option>

                            <option value="15:40">9:00</option>

                            <option value="16:00">10:00</option>
                            <option value="18:45">11:00</option>

                            <option value="19:00">12:00</option>
                            <option value="23:10">13:00</option>
                            <option value="19:29">19:29</option>
                            
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        onClick={bookAppointment}
                        className="btn appointment-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div>
                <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                  <p
                    onClick={() => handleTabClick('booked')}
                    style={{
                      marginRight: '20px',
                      paddingBottom: '10px',
                      borderBottom: activeTab === 'booked' ? '2px solid blue' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Booked Appointments
                  </p>
                  <p
                    onClick={() => handleTabClick('pending')}
                    style={{
                      paddingBottom: '10px',
                      borderBottom: activeTab === 'pending' ? '2px solid blue' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Pending Appointments
                  </p>
                </div>

                <div>
                  {activeTab === 'booked' && (
                    <div>
                      <div className="appointment-item-two-right">
                        <div className="appointment-item-content">
                          <h2>Your Booked Appointments</h2>
                          <ul>
                            {bookedAppointments?.appointments?.map((val, index) => {
                              const isTimeArrived = isAppointmentTimeArrived(val?.date_time);
                              return (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <span style={{ display: 'flex', gap: '20px' }} dangerouslySetInnerHTML={{ __html: formatDateTime(val?.date_time) }} />
                                  <button
                                    style={{ background: isTimeArrived ? 'blue' : 'gray', color: 'white' }}
                                    onClick={() => videoCallEnter(val)}
                                    className="btn"
                                    disabled={!isTimeArrived}
                                  >
                                    Join Call
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'pending' && (
                    <div>
                      <div className="appointment-item-two-right">
                        <div className="appointment-item-content">
                          <h2>Your Pending Appointments</h2>
                          <ul>
                            {pendingAppointments?.appointments?.map((val, index) => {
                              return (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <span style={{ display: 'flex', gap: '20px' }} dangerouslySetInnerHTML={{ __html: formatDateTime(val?.date_time) }} />
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
