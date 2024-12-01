import React from 'react'
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';

const termsOfService = () => {

    const termsOfService = [
        {
          section: "I",
          title: "INTRODUCTION",
          content: "Adonis Health, Inc. and its subsidiaries (collectively, 'Adonis Health,' 'we,' or 'us') own and operate the website www.henrymeds.com and may, now or in the future, own and operate a Henry Meds mobile application (collectively, the 'Sites'). Your use of the Sites, any part thereof, or anything associated therewith, including the services, features, content, and applications, together with the Sites, are the Adonis Health Service ('Services') offered by Adonis Health, Inc. and our affiliated professional entities for whom we coordinate healthcare offerings. Any products or services provided through the Sites or any affiliated website, software, or application owned or operated by Adonis Health are governed by these Terms of Service ('Terms' or 'Agreement'). By accessing or using any of the Adonis Health Services, which include our affiliated professional entities, you agree to be bound by this 'Agreement,' which is a legally enforceable agreement between Adonis Health, our affiliated entities, and you, the individual ('You' or 'Your'). Please read this Agreement carefully as it provides the important information you will need to know about using Adonis Health Service."
        },
        {
          section: "II",
          title: "ACCEPTANCE OF THE TERMS",
          content: "Your use of Adonis Health Service is subject to this Agreement and all applicable laws and regulations. If you do not accept and agree to be bound by this Agreement in its entirety, you are strictly prohibited from visiting, accessing, registering with and/or using the Service or any information or content provided through the Service, except as necessary to review this Agreement. The Service is continually under development, and we reserve the right to revise or remove any part of this Agreement or the Service in our sole discretion at any time and without prior notice to you. Any changes to this Agreement are effective upon it being posted to the Platform. Unless otherwise indicated, any new content added to the Service is also subject to this Agreement upon posting to the Platform. If you disagree with this Agreement or any terms or conditions herein, your sole remedy is to discontinue your use of the Service. Your continued use after a change to this Agreement has been posted constitutes your acceptance of this Agreement as modified by such changes."
        },
        {
          section: "III",
          title: "OUR RELATIONSHIP WITH YOU",
          content: "These Terms of Service (the 'Terms') apply to your use of any of Adonis Health Service for which you are enrolled or have a consultation scheduled and are further described below:"
        },
        {
          subsection: "A",
          title: "Telehealth consultations and services",
          contents: [
            {
              item: "1",
              description: "Adonis Health Service may include access to one or more professional medical organizations ('Medical Groups' or 'Groups') to provide healthcare services through the Sites. These Groups employ or contract with licensed medical providers ('Providers') who offer certain healthcare services via Adonis Health Service. All medical providers who deliver Healthcare Services through the Sites are: (i) independent professionals contracted or employed with affiliated professional entities that coordinate with Adonis Health Services, and (ii) solely responsible for such Healthcare Services you receive."
            },
            {
              item: "2",
              description: "Consultations are provided by a medical Provider licensed in the state where you, the Patient, are located via a HIPAA-secure platform."
            },
            {
              item: "3",
              description: "Provider consultations may provide diagnoses and prescribe medication, if clinically appropriate. Prescriptions can be issued for both controlled and non-controlled substances regulated by the DEA, encompassing both commercially available and compounded medications."
            }
          ]
        },
        {
          section: "IV",
          title: "Henry Membership",
          contents: [
            {
              subsection: "A",
              title: "Overview",
              description: "Adonis Health Service makes available to individuals who register as users of the Service ('Users') certain products and services offered by Adonis Health or by third-party medical providers, pharmacies, or other vendors via Adonis Health Service."
            },
            {
              subsection: "B",
              title: "Basic Membership",
              description: "Upon signing-up and agreeing to the Terms of Service for Adonis Health Service, you will be enrolled as a 'Basic Member' in addition to the specific program membership that you choose."
            },
            {
              subsection: "C",
              title: "Basic Membership Benefits",
              description: "Basic Membership includes use of the Henry Meds website and mobile application ('Sites'); unlimited customer support; pharmacy and clinical care coordination; health information management; and facilitation to access the nurse hotline if you have questions or concerns regarding your prescription(s) or other clinical issues."
            },
            {
              item: "1",
              description: "If prescribed, medication fulfillment is offered through compounded pharmacies ('Pharmacies') licensed appropriately to dispense medications to the state jurisdictions which are served by Adonis Health Service."
            }
          ]
        },
        {
          section: "V",
          title: "INDEPENDENT MEDICAL JUDGMENT",
          content: "Adonis Health is not licensed to practice medicine and does not provide any healthcare service. Adonis Health does not control or interfere with the provision of Healthcare services provided by medically trained clinicians and their affiliated professional entities, each of whom is independent from Adonis Health and solely responsible for the Healthcare service you receive. As such you understand and agree that Adonis Health is not responsible for any healthcare service provided by a medical provider or affiliated professional entity, including any personal injury or property damage. You further understand and agree that after reviewing your Information, the medical provider, in his or her independent professional judgment, will determine whether to prescribe medication, other treatments, or, alternatively, recommend that you consult with alternative clinical resources."
        },
        {
            section: "VI",
            title: "PHARMACY SERVICES",
            content: "By accepting this Agreement, you additionally understand and agree that Henry Meds, Inc. is not acting as a pharmacy, nor do we control or interfere with any such services. By accepting this Agreement, you understand and agree that you may be entering into a relationship with a pharmacy, pharmacist, and/or pharmacy group or other such relationship with any one or more such third-party entities."
          },
          {
            section: "VII",
            title: "ELECTRONIC COMMUNICATIONS",
            content: "When you enroll and use Adonis Health Service, you are consenting to conduct business electronically with Adonis Health Service and engage in health-oriented activities with medical providers and professional entities affiliated with Adonis Health. Such processes have the same force and effect as your written signature. You agree and consent to Adonis Health, its affiliates, subsidiaries,  and other affiliated professional entities sending you disclosures, messages, notices, and other communications to your designated mobile phone and email account. You understand and agree that Adonis Health Service is not responsible for the security or privacy of communications services you use to receive the aforementioned messages and emails sent via Adonis Health Service. You further understand and agree that it is your sole responsibility to monitor and respond to these messages and emails and that neither Adonis Health nor the Medical Group or any Provider will be  liable for any loss, injury, or claims of any kind resulting from your failure to read or respond to these messages or for your failure to comply with any treatment recommendations or instructions from the Medical Group or your Provider(s). "
          },
          {
            section: "VIII",
            title: "LABORATORY PRODUCTS AND SERVICES",
            content: "Laboratory products and services available from Adonis Health Service, including at-home testing kits, require a valid prescription or order by a licensed healthcare provider. If you receive laboratory products or services through Adonis Health Service, the applicable testing materials are shipped to you, and the costs associated with the laboratory products and services are included in the total charged to you by Adonis Health Service. Laboratory products and services available through the Platform are “Third-Party Goods and Services” as described in the Third-Party Goods and Services section of this Agreement."
          },
          {
            section: "IX",
            title: "THIRD-PARTY GOOD AND SERVICES",
            content: "Labs, Third-Party Pharmacies, Medical Groups, and Providers (collectively, “Third-Parties”) may provide services or products (“Third-Party Goods and Services”) through Adonis Health Service. Your use of any Third-Party Goods and Services and any interactions with Third-Parties, including payment and delivery of goods or services, and any other terms, conditions, warranties or representations associated with such use or interactions, are solely between you and such Third-Parties. Should any dispute arise between you and any Third-Party, any other User or any other entity or individual, you understand and agree that Adonis Health  is under no obligation to become involved in such dispute, and you hereby release and indemnify Adonis Health, Hephaestus Pharmaceuticals, LLC, Colchis Medical Group, and their respective corporate parents, subsidiaries, and affiliates, and all of their respective contractors, directors, officers, employees, representatives, proprietors, partners, shareholders, servants, principals, agents, predecessors, successors, assigns, accountants, and attorneys (collectively, “Adonis Health Parties”) from any and all claims, demands, or damages (actual or consequential) of every kind or nature, known or unknown, suspected and unsuspected, disclosed or undisclosed, arising out of or in any way related to such disputes or the Service or the features and services therein. IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.”   Adonis Health shareholders, directors, officers, employees, contractors or agents (collectively, “Adonis Stakeholders”) may have a financial interest in one or more Third-Parties and may profit from your use of the Third-Parties or the sale of Third-Party Goods and Services."
          }
          
      ];

      

  return (
   <>
   <Navbar/>

   <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{width:'50%'}}>
        <h1 style={{textAlign:'center'}}>Adonis Health Inc.™ 
Terms of Service</h1>
<h3 style={{textAlign:'center'}}>(DBA: Henry Meds™) (DBA: Henry)</h3>
<p style={{textAlign:'center'}}>Last updated: February 1, 2024</p>
<h3 style={{color:'red'}}>
HENRY MEDS IS CONTEMPLATED FOR SPECIFIC NON-EMERGENCY MEDICAL CONDITIONS AND CONCERNS. IF YOU BELIEVE YOU ARE EXPERIENCING A MEDICAL EMERGENCY, PLEASE DIAL 911 OR YOUR LOCAL MEDICAL PROVIDER.
</h3>
<p>BY CLICKING “I AGREE,” CHECKING ANY BOX TO SIGNIFY YOUR ACCEPTANCE, USING ANY OTHER ACCEPTANCE PROTOCOL PRESENTED THROUGH THE SERVICE, OR OTHERWISE AFFIRMATIVELY ACCEPTING THESE TERMS OF SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, ACCEPTED, AND AGREE TO BE BOUND BY THESE TERMS.  IF YOU DO NOT AGREE TO THESE TERMS, YOU ARE NOT PERMITTED TO CREATE AN ACCOUNT OR USE ADONIS HEALTH SERVICE. YOU HEREBY GRANT AGENCY AUTHORITY TO ANY PARTY WHO INDICATES ACCEPTANCE TO THESE TERMS AND CONDITIONS ON YOUR BEHALF.</p>
  <h3>THIS USER AGREEMENT CONTAINS A MANDATORY ARBITRATION PROVISION.  UNLESS YOU TIMELY OPT-OUT OF ARBITRATION IN ACCORDANCE WITH THESE TERMS, YOU AGREE THAT DISPUTES BETWEEN YOU AND US, OR YOU AND THE MEDICAL GROUPS OR PROVIDERS, ARISING OUT OF OR RELATED TO THESE TERMS AND CONDITIONS OR THE SERVICE WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION. YOU FURTHER WAIVE YOUR RIGHTS TO A JURY TRIAL AND TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. </h3>
  
  {termsOfService?.map((val,index)=>{
return(
  <>
    <h1 style={{textAlign:'center'}}>{val?.section}</h1>
    <p><span style={{fontWeight:'700'}}>{val.subsection? "":val?.title}</span> {val?.content} </p>
    <p ><span style={{paddingLeft:'10px',fontWeight:'700',fontSize:'1.2rem'}}>{val?.subsection} </span> </p>

    {val?.contents?.map((data,index)=>{
        return(
            <>
            <p> <span style={{fontWeight:'700'}}>{data?.Item} </span> {data?.description}</p>
            </>
        )
    })
    }


</>

 ) })}
    </div>
  </div>

   <Footer/>
   </>
  )
}

export default termsOfService