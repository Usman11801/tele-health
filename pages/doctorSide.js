// pages/doctorSide.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Table from '../components/Table';
import DocNav from '../components/_App/DocNav';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Button } from 'antd';

const DoctorSide = () => {
  const [appointmentId, setAppointmentId] = useState();
  const [questionData, setQuestionData] = useState([]);

  const [selectedOption, setSelectedOption] = useState('upcoming');
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  const fetchToken = async (userEmail, oobCode) => {
    try {
      const response = await fetch(`${baseUrl}/getToken?email=${userEmail}&oob=${oobCode}&action=login`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      localStorage.setItem('docToken', data?.data?.accessToken);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    const userEmail = 'jikixa8798@evimzo.com';
    const oobCode = 121323;
    if (userEmail && oobCode) {
      fetchToken(userEmail, oobCode);
    }
  }, []);

  const getAppointments = async () => {
    const token = localStorage.getItem('docToken');
    try {
      const response = await fetch(`${baseUrl}/appointments-doctor`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("datadatadatadatadata>>>>", data?.data?.appointments);
      setBookedAppointments(data?.data?.appointments || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const getPendingAppointments = async () => {
    const token = localStorage.getItem('docToken');
    try {
      const response = await fetch(`${baseUrl}/pending-appointments-doctor`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setPendingAppointments(data?.data?.appointments || []);
    } catch (error) {
      console.error('Error fetching pending appointments:', error);
    }
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() => {
    if (selectedOption === 'upcoming') {
      getAppointments();
    } else if (selectedOption === 'pending') {
      getPendingAppointments();
    }
  }, [selectedOption,modalIsOpen]);

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [selectedPatient, setSelectedPatient] = useState(null);
  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setModalIsOpen(true);
};

const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPatient(null);
};

  const joinCallByDoc = async (appointment) => {

      router.push({
        pathname: '/telehealth-call',
        query: {
          appointment: appointment?.id,
          info:true
        }
      });
    // try {
    //   const token = localStorage.getItem("docToken");
    //   const response = await fetch(`${baseUrl}/joinRoom?appointmentId=${appointment?.id}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   console.log("response", response);
    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   console.log("response data is>>>>>>>>>>>", data.rtcToken, data.channelName);
    //   router.push({
    //     pathname: '/telehealth-call',
    //     query: {
    //       rtctoken: data.rtcToken,
    //       channelName: data.channelName,
    //       info:true
    //     }
    //   });
    // } catch (error) {
    //   console.error("An error occurred:", error.message);
    // }
  }
  const ViewQuestions = async (appointment) => {
    setModalIsOpen(true)
    console.log("appointment>>><<<",appointment);

    const token = localStorage.getItem('docToken');
    setAppointmentId(appointment?.id)
    try {
      const response = await fetch(`${baseUrl}/answers/${appointment?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("datadatadatadatadata>>>>", data);
      setQuestionData(data)
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }
  
  const renderActionButtons = (appointment) => {
    const currentTime = new Date();
    const appointmentTime = new Date(appointment.date_time); // Assuming appointment.date_time is a valid date string
  
    // Compare current time with appointment time
    if (selectedOption === 'upcoming') {
    if (currentTime < appointmentTime) {
      console.log("runing 1>>>>>>>>>>>");
      return <button className="common-btn-static" disabled>Join call</button>; // Disable button if appointment time is in the future
    } else {
      console.log("runing 1>>>>>>>>>>>");

      return <button className="common-btn3" onClick={() => joinCallByDoc(appointment)}>Join call</button>; // Enable button if appointment time has arrived
    }
  }else{
    return <button className="btn appointment-btn" style={{background:'#2641ff',color:'white',cursor:'pointer'}} onClick={() => ViewQuestions(appointment)} >View Q/A</button>; 
  }
  };
  

  const columns = [
    {
      Header: 'Patient Name',
      accessor: 'Patient.first_name', // Accessing first_name from the Patient object
    },
    {
      Header: 'Category',
      accessor: 'category',
      id: 'category',
    },
    {
      Header: 'Date & Time',
      accessor: 'date_time',
      id: 'date_time',
    },
   
    {
      Header: 'Visit Type',
      accessor: 'visit_type',
      id: 'visit_type',
    },
    {
      Header: 'Status',
      accessor: 'status',
      id: 'status',
    },
    {
      Header: 'Action',
      accessor: 'action',
      id: 'action',
      Cell: ({ row }) => renderActionButtons(row.original),
    },
  ];

  const data = selectedOption === 'upcoming' ? bookedAppointments : pendingAppointments;

  const AcceptAppointment=async()=>{
    const token2 = localStorage.getItem("token");
    
    const appointmentAccept = {
      id: appointmentId,
      is_approved_by_doctor:true,
    };
    try {
      const response = await fetch(`${baseUrl}/approve-appointment`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token2}`,
        },
        body: JSON.stringify(appointmentAccept),
      });
      setModalIsOpen(false)
    } catch (error) {
      console.error("Error",error);
    }
  }
  return (
    <>
    <div>
    <Modal
    open={modalIsOpen}
    onClose={closeModal}
    center
    // styles={{borderRadius:'100px'}}
    classNames={{
        modal: 'rounded-lg shadow-lg',
        closeButton: 'bg-red-500 text-white px-4 py-2 rounded',
    }}
>
    <div 
        style={{ 
            maxHeight: '70vh', 
            overflowY: 'auto', 
            padding: '32px', 
            // background:'#ffff  ff',
            
        }} 
        className=" p-6 rounded-lg"
    >
        <h2 className="text-xl font-bold mb-4">Patient Details</h2>
        

        {questionData?.map((val, index) => (
            <div key={index}>
                <h5>{index + 1}: {val?.Question?.text}</h5>
                <p style={{ marginBottom: '0px' }}>
                    <span style={{ fontWeight: 700 }}>Ans: </span> 
                    {val?.response?val?.response:"No Answer Given"}
                </p>
                <div style={{ width: '100%', height: "2vh", borderTop: '1px #c6c6c6 solid' }}></div>
            </div>
        ))}
        <div style={{display:'flex',gap:"10px",justifyContent:'end'}} className="flex space-x-4 mt-4">
            <button onClick={AcceptAppointment} className="btn appointment-btn" style={{background:'#2641ff',color:'white',cursor:'pointer'}}>Accept</button>
            <button className="btn appointment-btn" style={{background:'rgb(230 231 238)',color:'black',cursor:'pointer'}}>Reject</button>

        </div>
    </div>
</Modal>
      <DocNav />
      <PageBanner
        pageTitle="Doctor Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctor"
        bgImage="page-title-one"
      />
      <h2 style={{ textAlign: 'center', marginTop: '10%' }}>Appointments Record</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10%' }}>
        <div style={{ width: '90%' }}>
          <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '10px' }}>
            <div style={{ width: '25%' }}>
              <div className="form-group">
                <label style={{ marginBottom: '6px', fontSize: '1.1rem', fontWeight: '500' }}>Appointments Type:</label>
                <select
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  className="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option value="upcoming">Appointments</option>
                  <option value="pending">Pending Appointments</option>
                </select>
              </div>
            </div>
          </div>
          <Table columns={columns} data={data} renderActionButtons={renderActionButtons} />
        </div>
      </div>
      <Footer />
    </div>
    


    
    </>
  );
};

export default DoctorSide;
