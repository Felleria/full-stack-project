// src/pages/JobDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`/job/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default JobDetails;
