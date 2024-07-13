import React, { useEffect, useState } from 'react';

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/applicants')
      .then(response => response.json())
      .then(data => setApplicants(data.applicants))
      .catch(error => console.error('Error fetching applicants:', error));
  }, []);

  return (
    <div>
      <h1>Applicants</h1>
      {applicants.map(applicant => (
        <div key={applicant.id} className="card">
          <h2>{applicant.username}</h2>
          <p><strong>Email:</strong> {applicant.email}</p>
          <p><strong>Role:</strong> {applicant.role}</p>
        </div>
      ))}
    </div>
  );
};

export default ApplicantList;
