import React from 'react'
import AppointmentQuestions from '../components/appointmentQuestions'
import Navbar from '../components/_App/Navbar'
import Footer from '../components/_App/Footer'

const patientInfo = () => {
  return (
    <div>

        <Navbar/>
        
        <AppointmentQuestions/>
        <Footer/>
        </div>
  )
}

export default patientInfo