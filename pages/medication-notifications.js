import React from 'react'
import Navbar from '../components/_App/Navbar'
import Footer from '../components/_App/Footer'

const MedicationNotifications = () => {
  return (
   <>
   <Navbar/>
   <div style={{display:'flex',justifyContent:'center'}}>
   <div style={{width:'50%'}} className="flex flex-col  justify-center min-h-screen p-4">
      <div className="max-w-3xl ">
        <h1 className="text-4xl font-bold mb-6">Medication Information</h1>
        <p className="mb-4">
          Please read the information linked below. It contains important warnings from the FDA in relation to medications you may be prescribed. If you have any questions, please speak to your provider or other licensed healthcare professional.
        </p>
        <p className="mb-4">
          <strong>Please note:</strong> Most medications prescribed via Henry Meds are compounded medications. While compounded medications are made exclusively in licensed pharmacies, their efficacy and safety profile cannot be directly compared to commercial drugs. Talk to your provider about the specific risks and benefits that may come with the use of a compounded medication. The following list of safety data is provided solely for convenience and should not be relied upon in relation to the safety and efficacy profile of any compounded medications.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Medical Weight Management Medications</h2>
        <ul className="mb-4 space-y-2">
          <li>
            Phentermine (Active Pharmaceutical Ingredient in Adipex-P®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/085128s065lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Phentermine + Topiramate (Active Pharmaceutical Ingredient in Qsymia®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/022580s000lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Naltrexone + Bupropion (Active Pharmaceutical Ingredient in Contrave®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/200063s000lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Semaglutide (Active Pharmaceutical Ingredient in Wegovy®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Liraglutide (Active Pharmaceutical Ingredient in Saxenda®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/206321orig1s000lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Tirzepatide (Active Pharmaceutical Ingredient in Mounjaro®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf" className="text-blue-500 underline ml-1">
              Please see
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Hormone Replacement Therapy Medications</h2>
        <ul className="mb-4 space-y-2">
          <li>
            Testosterone Cypionate (Active Pharmaceutical Ingredient in Depo® -Testosterone) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/085635s040lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Anastrozole (Active Pharmaceutical Ingredient in Arimidex®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/020541s026lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Clomiphene Citrate (Active Pharmaceutical Ingredient in Clomid®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/016131s026lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Insomnia Medications</h2>
        <ul className="mb-4 space-y-2">
          <li>
            Hydroxyzine Pamoate (Active Pharmaceutical Ingredient in Vistaril®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/022411s008lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Trazadone (Active Pharmaceutical Ingredient in Oleptro®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/020541s026lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Mirtazapine (Active Pharmaceutical Ingredient in Remeron®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2010/020415s023s024.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
          <li>
            Zolpidem (Active Pharmaceutical Ingredient in Ambien®) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2008/019908s027lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Miscellaneous Medications</h2>
        <ul className="mb-4 space-y-2">
          <li>
            Cyanocobalamin (Vitamin B12) - 
            <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/080737Orig1s040lbl.pdf" className="text-blue-500 underline ml-1">
              Please See
            </a>
          </li>
        </ul>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default MedicationNotifications
