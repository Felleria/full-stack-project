// src/pages/JobListings.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/*import './styles.css';*/

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/jobs')
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <ul className="job-list">
        {jobs.map(job => (
          <li key={job.id} className="job-item">
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
