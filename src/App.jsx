
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import CreateJob from './pages/CreateJob';
import Applicants from './pages/Applicants';
import Applications from './pages/Applications';
import SignUp from './pages/SignUp';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/jobs/create" element={<CreateJob />} />
        <Route path="/applicants" element={Applicants} />
        <Route path="/applications" element={Applications} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
};

export default App;
