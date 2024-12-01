import React, { useEffect, useState } from 'react';

function MessageSection() {
  // const [qaList, setQaList] = useState([
  //   { question: "Patient age is?", answer: "40yrs" },
  //   { question: "Patient weight is?", answer: "40kg" },
  //   { question: "Patient height is?", answer: "300cm" },
  //   { question: "Patient blood group is?", answer: "A-" },
  //   { question: "Patient known diseases?", answer: "No" },
  //   { question: "Patient current medications?", answer: "No" },
  //   { question: "Patient has aby allergies?", answer: "No" },
  //   { question: "Patient has any Symptoms?", answer: "No" },
  //   { question: "Patient did any previous checkup?", answer: "No" },
  // ]);
  const [questionData, setQuestionData] = useState([]);
  const [appointmentId, setAppointmentId] = useState();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;



  const ViewQuestions = async (appointmentId) => {
    console.log("appointment>>><<<===========>",appointmentId);

    const token = localStorage.getItem('docToken');
    // setAppointmentId(appointment?.id)
    try {
      const response = await fetch(`${baseUrl}/answers/${appointmentId}`, {
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
      console.log("dataList>>>>", data);
      setQuestionData(data)
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }

useEffect(()=>{
  const queryParams = new URLSearchParams(window.location.search);

  const appointment = queryParams.get('appointment');
  ViewQuestions(appointment)
})


  const [notes, setNotes] = useState("");
  const [isNotesSubmitted, setIsNotesSubmitted] = useState(false);

  const handleNotesSubmit = () => {
    if (notes) {
      setIsNotesSubmitted(true);
    }
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto', padding: '20px', backgroundColor: '#E5E7EB', width: '400px' }}>
      {questionData.map((qa, index) => (
        <div key={index} style={{ marginBottom: `${index==23?`${notes?"20px":"190px"}`:"20px"}`, padding: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <p style={{fontSize:'1,2rem',fontWeight:700}} className="font-bold">Q{index+1}: {qa?.Question?.text}</p>
          <p className="mt-2">A: {qa?.response}</p>
        </div>
      ))}
      {isNotesSubmitted && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#C6F6D5', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', whiteSpace: 'pre-wrap',marginBottom:'190px' }}>
          <p className="text-green-500 font-bold">{notes}</p>
        </div>
      )}
      <div style={{position:'absolute',bottom:0,background:'#E5E7EB',width:'100%'}}>
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ marginTop: '20px', width: '100%', padding: '10px', border: '1px solid #D1D5DB', borderRadius: '8px', resize: 'vertical' }}
        />
        <button
          onClick={handleNotesSubmit}
          style={{ marginTop: '10px',marginBottom: '10px', backgroundColor: '#34D399', color: 'white', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}
        >
          Submit Notes
        </button>
      </div>
    </div>
  );
}

export default MessageSection;
