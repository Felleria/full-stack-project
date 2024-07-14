
import React, { useEffect, useState } from 'react';

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);

//  useEffect(() => {
 //   fetch('http://localhost:5555/applicants')
 //     .then(response => response.json())
 //     .then(data => setApplicants(data.applicants))
  //    .catch(error => console.error('Error fetching applicants:', error));
  //}, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Applicants</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>{applicant.username}</td>
                <td>{applicant.email}</td>
                <td>{applicant.role}</td>
                <td>{new Date(applicant.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicants;

