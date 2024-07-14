
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import CreateJob from './pages/CreateJob';
import SignIn from './pages/signIn';
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
        <Route path="/applications" component={Applications} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
