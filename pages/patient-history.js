import React from 'react'
import DocNav from '../components/_App/DocNav'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/_App/Footer'
import PatientHistory from '../components/PatientHistory'

const patientHistory = () => {
  return (
    <div>
              <DocNav />
      <PageBanner
        pageTitle="Patient history"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctor"
        bgImage="page-title-one"
        />
       
       <PatientHistory/>

        <Footer />

        </div>
  )
}

export default patientHistory