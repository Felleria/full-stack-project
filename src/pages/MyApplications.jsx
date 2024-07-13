// src/pages/MyApplications.jsx
import React, { useEffect, useState } from 'react';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('/applications')
      .then((response) => response.json())
      .then((data) => setApplications(data.applications));
  }, []);

  return (
    <div>
      <h1>My Applications</h1>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <p>{application.job.title}</p>
            <p>{application.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyApplications;



