// src/pages/EmployerDashboard.jsx
import React, { useEffect, useState } from 'react';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/employer-jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data.jobs));
  }, []);

  return (
    <div>
      <h1>Employer Dashboard</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployerDashboard;
