
import React, { useEffect, useState } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/jobs')
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Job Listings</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Company</th>
              <th>Location</th>
              <th>Posted At</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{new Date(job.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobListings;
