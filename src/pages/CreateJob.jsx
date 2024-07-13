// src/pages/CreateJob.jsx
import React, { useState } from 'react';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, company, location }),
    }).then((response) => response.json())
      .then((data) => {
        console.log('Job created:', data);
      });
  };

  return (
    <div>
      <h1>Create Job</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Company</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
};

export default CreateJob;
