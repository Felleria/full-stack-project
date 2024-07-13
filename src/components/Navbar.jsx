// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Job Listings</Link></li>
        <li><Link to="/jobs/create">Create Job</Link></li>
        <li><Link to="/my-applications">My Applications</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/reset-password">Reset Password</Link></li>
        <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
