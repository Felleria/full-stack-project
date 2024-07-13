// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import CreateJob from './pages/CreateJob';
import MyApplications from './pages/MyApplications';
import Profile from './pages/Profile';
import ResetPassword from './pages/ResetPassword';
import EmployerDashboard from './pages/EmployerDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/jobs/create" element={<CreateJob />} />
        <Route path="/my-applications" element={<MyApplications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
