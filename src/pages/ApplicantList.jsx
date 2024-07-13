// src/pages/ApplicantList.jsx
import React, { useEffect, useState } from 'react';
import ApplicantCard from '../components/ApplicantCard';

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/applicants')
      .then(response => response.json())
      .then(data => setApplicants(data.applicants));
  }, []);

  return (
    <div>
      <h2>Applicants</h2>
      <div className="applicant-list">
        {applicants.map(applicant => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
      </div>
    </div>
  );
};

export default ApplicantList;
