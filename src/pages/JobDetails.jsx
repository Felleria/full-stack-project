// src/pages/JobDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/*import './styles.css';*/

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5555/jobs/${id}`)
      .then(response => response.json())
      .then(data => setJob(data))
      .catch(error => console.error('Error fetching job details:', error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
