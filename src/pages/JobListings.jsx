// src/pages/JobListings.jsx
import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/jobs')
      .then(response => response.json())
      .then(data => setJobs(data.jobs));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <div className="job-list">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;
