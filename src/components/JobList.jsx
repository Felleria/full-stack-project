import React, { useEffect, useState } from 'react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/jobs')
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.map(job => (
        <div key={job.id} className="card">
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
