// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/profile')
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>{profile.username}</p>
      <p>{profile.email}</p>
    </div>
  );
};

export default Profile;
