// src/pages/JobListings.jsx
import React, { useEffect, useState } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data.jobs));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
