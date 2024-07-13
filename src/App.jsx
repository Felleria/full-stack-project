import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import CreateJobPage from './pages/CreateJobPage';
import Applicants from './pages/Applicants';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/create" element={<CreateJobPage />} />
          <Route path="/applicants" element={<Applicants />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
