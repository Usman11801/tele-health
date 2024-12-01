import React, { useEffect, useState } from 'react';
import Table from './Table'; // Adjust the import path as necessary
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const PatientHistory = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    const [historyData, setHistoryData] = useState([]);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const getHistory = async () => {
        const token = localStorage.getItem("docToken");
        try {
            const response = await fetch(`${baseUrl}/appointment-history-doctor`, {
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
            console.log("History data>>>Final>>>>>:", data?.data);
            setHistoryData(data?.data);
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    useEffect(() => {
        getHistory();
    }, []);

    const ViewQuestions = async (appointment) => {
        setModalIsOpen(true);
        console.log("appointment>>><<<", appointment?.actions?.id);

        const token = localStorage.getItem('docToken');
        try {
            const response = await fetch(`${baseUrl}/answers/${appointment?.actions?.id}`, {
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
            console.log("data>>QQQQ>",data);
            setQuestionData(data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Patient Name',
                accessor: 'patient_name',
            },
            {
                Header: 'Appointment Date',
                accessor: 'appointment_date',
            },
            {
                Header: 'Visit Type',
                accessor: 'visit_type',
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Actions',
                accessor: 'actions',
                Cell: ({ row }) => (
                    <button
                        className="btn appointment-btn"
                        style={{ background: '#2641ff', color: 'white', cursor: 'pointer' }}
                        onClick={() => ViewQuestions(row.original)}
                    >
                        View Q/A
                    </button>
                ),
            },
        ],
        []
    );

    const data = React.useMemo(() => {console.log("historyData>>>>>>>>>>>>appointment>>>>>",historyData);
        return historyData?.appointments?.map((appointment) => ({
            patient_name: `${appointment.Patient.first_name} ${appointment.Patient.last_name}`,
            appointment_date: new Date(appointment.date_time).toLocaleDateString(),
            visit_type: appointment.visit_type,
            category: appointment.category,
            status: appointment.status,
            actions: appointment,
        }));
    }, [historyData]);

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedPatient(null);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '90%' }}>
                <h1 style={{ textAlign: 'center', marginTop: '10%', marginBottom: '2%' }}>Patient History</h1>
                <div className="p-4">
                    <div className="flex justify-center mb-8">
                        <div className="w-full">
                            <Table columns={columns} data={data} />
                        </div>
                    </div>
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
                                    <h2 className="text-xl font-bold mb-4">Patient Details</h2>
                                    {questionData.map((val, index) => (
                                        <div key={index}>
                                            <h5>{index + 1}: {val?.Question?.text}</h5>
                                            <p style={{ marginBottom: '0px' }}>
                                                <span style={{ fontWeight: 700 }}>Ans: </span>
                                                {val?.response ? val?.response : "No Answer Given"}
                                            </p>
                                            <div style={{ width: '100%', height: "2vh", borderTop: '1px #c6c6c6 solid' }}></div>
                                        </div>
                                    ))}
                                </>
                            
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default PatientHistory;
