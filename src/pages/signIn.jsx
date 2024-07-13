// src/pages/SignIn.jsx
import React, { useState } from 'react';
/*import { useHistory } from 'react-router-dom';*/

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        // Implement sign-in logic here
        // Example: Fetch API call to authenticate user

        try {
            const response = await fetch('http://localhost:5555/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Redirect to home page after successful sign-in
                history.push('/');
            } else {
                // Handle sign-in error
                console.error('Sign-in failed');
            }
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    return (
      <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-6">
                  <div className="card">
                      <div className="card-body">
                          <h2 className="card-title text-center mb-4">Sign In</h2>
                          <form onSubmit={handleSignIn}>
                              <div className="form-group">
                                  <label htmlFor="username">Username:</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      id="username"
                                      value={username}
                                      onChange={(e) => setUsername(e.target.value)}
                                      required
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="password">Password:</label>
                                  <input
                                      type="password"
                                      className="form-control"
                                      id="password"
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}
                                      required
                                  />
                              </div>
                              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default SignIn;