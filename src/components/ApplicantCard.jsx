// src/components/ApplicantCard.jsx
import React from 'react';

const ApplicantCard = ({ applicant }) => {
  return (
    <div className="applicant-card">
      <h3>{applicant.username}</h3>
      <p>{applicant.email}</p>
      <p><strong>Role:</strong> {applicant.role}</p>
    </div>
  );
};

export default ApplicantCard;
