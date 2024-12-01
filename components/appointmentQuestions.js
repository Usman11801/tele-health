import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageBanner from "./Common/PageBanner";
import { useDispatch, useSelector } from 'react-redux';
import { setData, selectData } from '../store/slices/exampleSlice';
import { useRouter } from 'next/router';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  preferedName: "",
  phoneNumber: "",
  state: "",
  height: "",
  goalWeight: "",
  currentWeight: "",
  dateOfBirth: "",
  weightCondition: "",
  glpMedication: "",
  recentMedication: "",
  currentlyMedication: "",
  alergicMedication: "",
  medicalCondition: "",
  familyMultiple: "",
  thyroidCancer: "",
  everHadFollowing: "",
  womenIssues: "",
  diabeticMedication: "",
  medicallyApproved: "",
  anything: "",
  condition1: false,
  condition2: false,
};

const usaStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", 
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const weightRelatedCondition = [
  "Elevated Blood Pressure / Hypertension", "Elevated Cholesterol", "Blood sugar such as Diabetes, Prediabetes, or insulin resistance",
  "Cardiovascular Disease", "Fatty Liver", "GERD/reflux/heartburn", "Polycystic Ovarian Syndrome (PCOS)", "Psychosocial stress related to your weight",
  "Depression/Anxiety", "Chronic back or joint pain", "Respiration issue i.e. sleep apnea, asthma, or COPD", "Other weight-related condition", "None of the above"
];
const recentMedication=["Liraglutide (Sexenda, Victoza)", "Semaglutide (Wegovy, Ozempic", "Tirzepatide (Mounjaro, Zepbound", "Phentermine (Adipex)", "Phentermine + Topiramate (Qsymia)", "Benzphetamine (Didrex)","Not listed / i don't remember"]

const everHad=["Pancreatitis or Gallbladder Disease", "Chronic Kidney Disease", "Type 1 Diabetes (or Currently Talking Insulin)",
"Suicidal thoughts", "History of Long QT syndrome or cardiac arrhythmias (irregular heart rythms)", "Other Serious Medical Condition Not Listed","None of the above"
]

const diabeticMedication=["Insulin","Chlorpropamide (Diabinese)", "Tolazamide (Tolinase)","Tolbutamide (Orinase)", "Glyburide (Micronase, Diabeta, Glynase)",
"Glipizide (Glucotrol)", "Glimepiride (Amaryl)","Gliclazide (Diamicron)", "None of the above"]

const questions = [
  { questionId: 1, name: "firstName", type: "text", placeholder: "Your First Name", label: "Let's start with your Legal First Name?", label2: '' },
  { questionId: 2, name: "lastName", type: "text", placeholder: "your Legal Last Name", label: "Your Legal Last Name?", label2: '' },
  { questionId: 3, name: "preferedName", type: "text", placeholder: "your Preferred Name", label: "Do you have a Preferred Name?", label2: 'If none please leave blank!' },
  { questionId: 4, name: "phoneNumber", type: "number", placeholder: "your phone number", label: "What is your Phone Number?", label2: 'So the doctor can call you!' },
  { questionId: 5, name: "state", type: "dropdown", placeholder: "Your state you live in", label: "Which State do you live in?", label2: '', options: usaStates },
  { questionId: 6, name: "height", type: "number", placeholder: "Your height (6' 11''')", label: "What is your Height? (6' 11''')" },
  { questionId: 7, name: "goalWeight", type: "number", placeholder: "Your goal weight", label: "What is your Goal Weight (in pounds)?" },
  { questionId: 8, name: "currentWeight", type: "number", placeholder: "Your weight", label: "What is your Current Weight (in pounds)?" },
  { questionId: 9, name: "dateOfBirth", type: "text", placeholder: "Your date of birth (MM/DD/YYYY)", label: "What is your date of birth (MM/DD/YYYY)?" },
  { questionId: 10, name: "weightCondition", type: "dropdown", placeholder: "If you have any condition please select", label: "Do you have any of the following conditions that are related to your weight?", options: weightRelatedCondition },
  { questionId: 11, name: "glpMedication", type: "radio", label: "Are you currently taking any GLP medication?", options: ["Yes", "No"] },
  { questionId: 12, name: "recentMedication", type: "dropdown", placeholder: "Your recent medication", label: "Which medication did you most recently take?", options: recentMedication },
  { questionId: 13, name: "currentlyMedication", type: "text", placeholder: "Your current medication", label: "List all medication currently you are taking?", label2: 'If none please write none!' },
  { questionId: 14, name: "alergicMedication", type: "text", placeholder: "Your allergies medication", label: "Do you have any allergies to medication?", label2: 'If so, please describe.' },
  { questionId: 15, name: "medicalCondition", type: "text", placeholder: "Medical Condition", label: "Do you have any other medical condition?", label2: 'If so, please describe.' },
  { questionId: 16, name: "familyMultiple", type: "radio", label: "Do you or anyone in your family have multiple Endocrine Neoplasia Syndrome Type 2 (Men 2)?", options: ["Yes", "No"] },
  { questionId: 17, name: "thyroidCancer", type: "radio", label: "Have you or anyone in your family had medullary thyroid cancer?", options: ["Yes", "No"] },
  { questionId: 18, name: "everHadFollowing", type: "dropdown", placeholder: "Have you Ever", label: "Have you ever had the following?", options: everHad },
  { questionId: 19, name: "womenIssues", type: "radio", label: "Are you currently pregnant, trying to conceive, or breastfeeding?", options: ["Yes", "No"] },
  { questionId: 20, name: "diabeticMedication", type: "dropdown", placeholder: "Any diabetic medication", label: "Are you taking any of the following diabetic medication?", options: diabeticMedication },
  { questionId: 21, name: "medicallyApproved", type: "radio", label: "As part of my treatment, I would like to receive a multi-use vial of medication if medically approved?", options: ["Yes", "No"] },
  { questionId: 22, name: "anything", type: "text", placeholder: "Is there anything else?", label: "Is there anything else you want to provide to know?", label2: '' },
  { questionId: 23, name: "condition1", type: "checkbox", placeholder: "I have read and understood the above-linked information", label: "Medical Weight Loss is a supplement to a healthy diet and exercise program. Sustained weight loss takes time and weight loss beyond 1 - 1.5 pounds per week can present health risks. Consult your physician before making any changes.", Link: '/medication-notifications', LinkLable: 'Important Safety Information' },
  { questionId: 24, name: "condition2", type: "checkbox", placeholder: "I accept the medical Consent and Terms and Conditions", label: "Remember, GLP-1 Weight Management Medications are powerful prescription medications, so you agree to only receive treatment with it from one provider/pharmacy at a time. Please make sure you follow your provider's instructions exactly.", Link: '/medical-consent/', Link2: '/terms-of-service/', LinkLable: "Medical Consent", LinkLable2: "Terms and Conditions" },
];
  const AppointmentQuestions = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const data = useSelector(selectData);
    const router = useRouter();

    const [patientInfo, setPatientInfo] = useState(INITIAL_STATE);
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleChange = (e) => {
     
      const { name, value, type, checked } = e.target;
      setPatientInfo((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
      

    };
  
    const handleSubmit = async (e) => {

      e.preventDefault();

      const formData = questions.map(({ questionId, name }) => ({
        questionId,
        question: name,
        response: patientInfo[name],
        appointmentId:data?.appointmentId,
        patientId:data?.patientId
      }));
  
      // const formData = Object.keys(patientInfo).map((key, index) => ({
      //   questionId: index + 1,
      //   response: patientInfo[key],
      // }));
  
  
      const token2 = localStorage.getItem("token");
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/create-answer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token2}`,
          },
          body: JSON.stringify(formData),
        });
        setModalIsOpen(true)
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        } else {
          // toast.success("Appointment Booked");
          setModalIsOpen(true)
          ;
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
        toast.error("Error booking appointment");
      }
    };
  
    const nextStep = () => {
      debugger
      setCurrentStep((prevStep) => prevStep + 1);
    };
  
    const previousStep = () => {
      setCurrentStep((prevStep) => prevStep - 1);
    };
    const closeModal = () => {
      setModalIsOpen(false);

  };
  
    const currentQuestion = questions[currentStep];
    const progressPercentage = (currentStep / (questions.length - 1)) * 100;
  
    return (
      <>
                          <Modal
                        open={modalIsOpen}
                        onClose={closeModal}
                        center
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
                            }}
                            className="p-6 rounded-lg"
                        >
                            
                                <>
                                    <h2 style={{textAlign:'center'}} className="text-xl font-bold mb-4">Appointment is in process</h2>
            <div style={{display:'flex',justifyContent:'center'}}>
            <button onClick={()=>{
            router.push("/appointment/")
            setModalIsOpen(true)
          }} className="btn appointment-btn" style={{background:'#2641ff',color:'white',cursor:'pointer',padding:'10px 50px'}}>OK</button>
            </div>
                                    
                                    
                                </>
                            
                        </div>
                    </Modal>
        <ToastContainer />
        <PageBanner
        pageTitle="Medical Form!"
        homePageUrl="/patient-info"
        homePageText="Questions"
        activePageText="Form"
        bgImage="page-title-one"
      />
        <div className="drop-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 p-0">
                <div style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}} className="drop-item drop-img">
                  <div className="drop-left">
                    <h2>Let's do your Medical Form!</h2>
                    <p className="mt-[-20px]">It will take 3 minutes!</p>
  
                    <div style={{backgroundColor:'#e0e0e0',height:'10px',borderRadius:'10px'}} className="w-full h-5 bg-gray-200 rounded-full mb-4">
                      <div
                        className="h-full bg-green-500 rounded-full transition-width duration-300"
                        style={{ width: `${progressPercentage}%`,height:'10px',background:'blue',borderRadius:'10px' }}
                      ></div>
                    </div>
  
                    <form >
                      <div className="form-group mb-4">
                        <label htmlFor={currentQuestion.name} className="block mb-2" style={{fontWeight:500,fontSize:'1.2rem'}}>
                          {currentQuestion.label}
                        </label>
                        <a style={{textDecoration:'underline',cursor:'pointer'}} target="_blank" href={currentQuestion?.Link} >{currentQuestion?.LinkLable}</a>
                        
                        <a style={{paddingLeft:'10px',textDecoration:'underline'}} target="_blank" href={currentQuestion?.Link2} >{currentQuestion?.LinkLable2}</a>

                        <p>{currentQuestion.label2}</p>
                        {currentQuestion.type === "dropdown" ? (
                          <select
                            name={currentQuestion.name}
                            className="form-control border rounded p-2 w-full"
                            value={patientInfo[currentQuestion.name]}
                            onChange={handleChange}
                            required
                          >
                            <option value="">{currentQuestion.placeholder}</option>
                            {currentQuestion.options.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : currentQuestion.type === "radio" ? (
                          <div style={{display:'flex',flexDirection:'column'}} className="flex flex-col gap-1">
                            {currentQuestion.options.map((option, index) => (
                              <label style={{display:'flex',gap:"50px"}} key={index} className="inline-flex items-center gap-2">
                                <input
                                  type="radio"
                                  name={currentQuestion.name}
                                  value={option}
                                  checked={patientInfo[currentQuestion.name] === option}
                                  onChange={handleChange}
                                  required
                                />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        ) : currentQuestion.type === "checkbox" ? (
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name={currentQuestion.name}
                              checked={patientInfo[currentQuestion.name]}
                              onChange={handleChange}
                              className="mr-2"
                            
                            />
                            <span style={{marginLeft:'5px'}} className="ml-2" >{currentQuestion.placeholder}</span>
                            {/* <a
                              href={currentQuestion.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 ml-2"
                            >
                              Read More
                            </a> */}
                          </div>
                        ) : (
                          <input
                            type={currentQuestion.type}
                            name={currentQuestion.name}
                            className="form-control border rounded p-2 w-full"
                            placeholder={currentQuestion.placeholder}
                            value={patientInfo[currentQuestion.name]}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
  
                      <div style={{display:'flex'}} className=" mt-4 gap-2">
                        {currentStep > 0 && (
                          <button type="button" className="drop-btn bg-gray-500 text-white px-4 py-2 rounded" onClick={previousStep}>
                            Previous
                          </button>
                        )}
                        {currentStep < questions.length - 1 ? (
                          <button type="button" className="drop-btn bg-blue-500 text-white px-4 py-2 rounded" onClick={nextStep}>
                            Next
                          </button>
                        ) : (
                          <button style={{cursor:'pointer'}} type="button" onClick={handleSubmit} className="drop-btn bg-green-500 text-white px-4 py-2 rounded">
                            Submit
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-5 p-0">
                <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                  <img src="/images/about4.jpg" alt="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AppointmentQuestions;