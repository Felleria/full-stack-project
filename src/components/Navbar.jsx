
import React from 'react';
import { Link } from 'react-router-dom';
/*import './styles.css';*/

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">JobDeed</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">Job Listings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs/create">Post a Job</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
