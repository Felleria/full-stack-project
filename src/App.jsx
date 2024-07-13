// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import CreateJob from './pages/CreateJob';
import ApplicantList from './pages/ApplicantList';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/applicants" element={<ApplicantList />} />
      </Routes>
    </Router>
  );
};

export default App;
