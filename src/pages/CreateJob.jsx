// src/pages/CreateJob.jsx
import React, { useState } from 'react';

const CreateJob = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    employer_id: 1, // This should be dynamic in a real app
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5555/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Redirect or show success message
      });
  };

  return (
    <div>
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" onChange={handleChange}></textarea>
        <input type="text" name="company" placeholder="Company" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
};

export default CreateJob;
