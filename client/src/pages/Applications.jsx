// src/pages/Applications.jsx
import React, { useEffect, useState } from 'react';

const Applications = () => {
  const [applications, setApplications] = useState([
    // Sample data
    {
      id: 1,
      applicant_id: 1,
      job_id: 1,
      status: 'Pending',
      date_applied: '2024-07-13T12:00:00Z'
    },
    {
      id: 2,
      applicant_id: 2,
      job_id: 2,
      status: 'Accepted',
      date_applied: '2024-07-12T12:00:00Z'
    }
  ]);

  // Commented out fetch part
  // useEffect(() => {
  //   fetch('http://localhost:5555/applications')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log('Fetched applications:', data); // Debugging statement
  //       setApplications(data.applications);
  //     })
  //     .catch(error => console.error('Error fetching applications:', error));
  // }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Applications</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Applicant ID</th>
              <th>Job ID</th>
              <th>Status</th>
              <th>Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="5">No applications found.</td>
              </tr>
            ) : (
              applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.id}</td>
                  <td>{application.applicant_id}</td>
                  <td>{application.job_id}</td>
                  <td>{application.status}</td>
                  <td>{new Date(application.date_applied).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
