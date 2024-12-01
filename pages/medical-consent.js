import React from 'react'
import Navbar from '../components/_App/Navbar'
import Footer from '../components/_App/Footer'

const MedicalConsent = () => {
  return (
   <>
   <Navbar/>
    <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{width:'50%'}}>
        <div className="p-6 bg-gray-50 text-gray-900">
      <h1 style={{textAlign:'center'}} className="text-2xl font-bold mb-4">Adonis Health Inc.™</h1>
      <h2 style={{textAlign:'center'}} className="text-lg font-semibold mb-2">Telehealth Medical Consent</h2>
      <p style={{textAlign:'center'}} className="text-sm mb-2">(DBA: Henry Meds™) (DBA: Henry™)</p>
      <p style={{textAlign:'center'}} className="text-sm text-gray-500 mb-4">Last updated: May 1, 2023</p>

      <div className="bg-red-100 text-red-800 p-4 rounded mb-6">
        <p className="font-bold">
          OUR PROVIDERS DO NOT ADDRESS MEDICAL EMERGENCIES. DO NOT PROCEED WITH CLINICAL SERVICES USING THE HENRY MEDS PLATFORM IF YOU BELIEVE YOU ARE HAVING A MEDICAL EMERGENCY. IF YOU BELIEVE YOU ARE EXPERIENCING A MEDICAL EMERGENCY, YOU SHOULD DIAL 9-1-1 AND/OR GO TO THE NEAREST EMERGENCY ROOM.
        </p>
        <p className="mt-2">
          IF YOU ARE CONTEMPLATING SUICIDE, CONTACT 911 OR THE NATIONAL SUICIDE PREVENTION LINE BY ONE OF THE FOLLOWING METHODS:
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>DIAL 1-800-273-TALK</li>
          <li>DIAL OR TEXT 988</li>
          <li>Go to <a href="https://988lifeline.org" className="text-blue-600 underline">988Lifeline.org</a> to chat LIVE</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-2">I. Introduction</h3>
      <p className="mb-4">
        You are reviewing and acknowledging this Telehealth Informed Consent because you are seeking Healthcare Services utilizing telehealth technologies by the Colchis Medical Group facilitated through the Adonis Health, Inc. website, iOS mobile app, web mobile app or other telehealth technologies collectively the “Adonis Platform.” This Telehealth Informed Consent does not modify or supersede any Terms of Use, Privacy Policy, or Notice of Privacy Practices of Adonis Health or the Providers, rather it supplements these terms and documents.
      </p>

      <p className="mb-4">
        By creating an account, starting a consult, clicking “I consent to telehealth,” checking a related box to signify your acceptance, or using any other acceptance protocol presented through the Adonis Platform, you indicate that you have reviewed the risks as described herein of receiving services utilizing telehealth technologies and consent to receiving the services. A record of this Telehealth Informed Consent is maintained in the files and records of the applicable Provider delivering your services, and your on-going participation in services by the Colchis Medical Group using telehealth technologies serves as an on-going acknowledgement of your acceptance of this Telehealth Informed Consent and updates at such time the representations you provide herein.
      </p>

      <p className="mb-4">
        Colchis Medical Group refers to a network of medical professional organizations affiliated with Adonis Health, Inc. and its employed and contracted health providers (the “Providers”).
      </p>

      <h3 className="text-xl font-semibold mb-2">II. What is Telehealth?</h3>
      <p className="mb-4">
        Telehealth involves the delivery of health and wellness services using electronic communications, information technology, or other means between a licensed, certified, or registered healthcare professional at one location and a patient in another location about a clinical matter. Telehealth may be used for diagnosis, treatment, follow-up and/or patient education. These telehealth services may involve various modalities, including asynchronous interactions, real-time (synchronous) video and audio encounters, and interactive audio with store and forward. This “Telehealth Informed Consent” informs the patient (“patient,” “you,” or “your”) concerning the treatment methods, risks, and limitations of utilizing telehealth to meet your health and wellness needs.
      </p>

      <h3 className="text-xl font-semibold mb-2">III. What are the Possible Benefits of Telehealth?</h3>
      <p className="mb-4">
        Benefits of telehealth include being easier and more efficient for you to access health and wellness services. You can obtain health and wellness services at times that are convenient for you without the necessity of an in-office appointment, including follow-up care related to your treatment. If you need follow-up care, please contact us through the Adonis Health Platform or the Adonis Health call center at
      </p>
      <p className="mb-4">
        1-909-787-2342,  Mon - Sun 4:00 am PST - 5:00 p.m PST
      </p>

      <h3 className="text-xl font-semibold mb-2">IV. What are the Possible Risks of Telehealth?</h3>
      <p className="mb-4">
        Information transmitted to your health professional may not be sufficient to allow for appropriate health or wellness services to meet your particular need. Some clinical needs may not be appropriate for a telehealth visit and your Provider will make that determination. The technology necessary to interact with your health professional may fail and delay your services. If a technical failure prevents you from communicating with your Providers, you should call the following number:
      </p>
      <p className="mb-4">
        Phone: 1-800-(909) 787-2342 Mon - Sun 4:00 am PST - 5:00 pm PST
      </p>
      <p className="mb-4">
        In rare events, a lack of access to complete medical records, and/or the quality of transmitted data could result in adverse drug interactions, allergic reactions, and/or other clinical judgment errors. You may stop or decline any on-going Healthcare Services provided by Colchis Medical Group using telehealth technologies at any time, although you acknowledge that applicable fees may apply if a medical consultation has occurred prior to request to cancel services and Colchis Medical Group has no obligation for your on-going care or selection of separate healthcare services in such circumstances.
      </p>
      <p className="mb-4">
        I understand that certain diagnostic testing services, including laboratory products and services offered through the Adonis Health Platform to support the Healthcare Services of Providers, may contain defects, including ones which may limit functionality or produce erroneous results, any or all of which could limit or otherwise impact the quality, accuracy and/or effectiveness of the medical care or other services that I receive from my Provider(s).
      </p>

      <h3 className="text-xl font-semibold mb-2">V. Patient Acknowledgments</h3>
      <ul className="list-decimal ml-5 space-y-4 mb-6">
        <li>You have reviewed this Telehealth Informed Consent carefully, and understand there are risks, limitations, and benefits of utilizing telehealth.</li>
        <li>You understand that the electronic nature of the telehealth services means that there is a greater risk to the privacy of my health information.</li>
        <li>In some cases, my Provider may be a nurse practitioner or physician assistant and not a physician.</li>
        <li>Persons may be present during the telehealth visit other than my Provider in order to operate the telehealth technologies and/or for language translation assistance, if requested. If another person is present during the telehealth visit, I will be informed of the individual’s presence and his or her role.</li>
        <li>I understand that information I provide as part of any telehealth offering is viewed as accurate, true, and complete.</li>
        <li>I understand that in certain instances, and in compliance with applicable law, my Provider may determine that it is appropriate to provide my Healthcare Services asynchronously via store-and-forward technology. In such instances, my Provider and I will communicate electronically through the Adonis Platform and not via telephone or video. I agree that if my provider makes that determination, I would like to receive Healthcare Services in this manner.</li>
        <li>I understand that there is no guarantee that I will be given a prescription and that the decision of whether a prescription is appropriate will be made in the professional judgment of my Provider. I understand that while the use of telehealth may provide benefits to me, no such benefits or specific results can be guaranteed and my condition may not improve.</li>
        <li>I understand there is a risk of technical failures during the telehealth encounter beyond the control of Colchis Medical Group and my Provider(s). I AGREE TO HOLD HARMLESS COLCHIS MEDICAL GROUP AND ITS EMPLOYEES, CONTRACTORS, AGENTS, DIRECTORS, MEMBERS, MANAGERS, SHAREHOLDERS, OFFICERS, REPRESENTATIVES, ASSIGNS, PREDECESSORS, AND SUCCESSORS, INCLUDING ADONIS HEALTH AND ITS EMPLOYEES, CONTRACTORS, AGENTS, DIRECTORS, MEMBERS, MANAGERS, SHAREHOLDERS, OFFICERS, REPRESENTATIVES, ASSIGNS, PARENTS, PREDECESSORS, AND SUCCESSORS FOR DELAYS IN EVALUATION OR FOR INFORMATION LOST DUE TO SUCH TECHNICAL FAILURES.</li>
        <li>I understand that certain diagnostic testing services, including laboratory products and services offered through the Adonis Health Platform to support the Healthcare Services of Providers, may contain defects, including ones which may limit functionality or produce erroneous results, any or all of which could limit or otherwise impact the quality, accuracy and/or effectiveness of the medical care or other services that I receive from my Provider(s).</li>
      </ul>

     
    </div>
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default MedicalConsent
