import React from 'react';
import { useAppliedData } from '../AppliedDataContext';
import Navbar from '../Navbar';
import './index.css';

const AppliedColleges = () => {
    const { appliedData } = useAppliedData();
    console.log(appliedData)

    return (
        <div>
            <Navbar />
            <div className='applied-colleges-content'>
                <h2>Applied Colleges</h2>
                {appliedData?.length === 0 ? (
                    <p>No colleges applied yet.</p>
                ) : (
                    <ul>
                        {appliedData.map((application, index) => (
                            <li key={index} className="applied-college-item">
                                {application.college ? (
                                    <>
                                        <h3>{application.college.collegeName}</h3>
                                        <p><strong>Location:</strong> {application.college.location}</p>
                                        <p><strong>Selected Course:</strong> {application.course}</p>
                                        <p><strong>Applicant Name:</strong> {application.firstName} {application.lastName}</p>
                                        <p><strong>Email:</strong> {application.email}</p>
                                    </>
                                ) : (
                                    <p>College details are not available.</p>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AppliedColleges;
