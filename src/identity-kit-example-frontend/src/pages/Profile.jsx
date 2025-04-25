import React, { useEffect } from 'react';
import './Profile.css'; // Import custom CSS for styling

const Profile = () => {
  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
  }, []);

  const user = {
    name: "Jaiditya Abhineet",
    email: "jaiditya@aihub.com",
    modelsListed: 4,
    datasetsListed: 3,
    upvotes: 22,
  };

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <h2 className="profile-title">👤 Profile</h2>
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Models Listed:</strong> {user.modelsListed}</p>
          <p><strong>Datasets Listed:</strong> {user.datasetsListed}</p>
          <p><strong>Total Upvotes:</strong> {user.upvotes}</p>
        </div>
        <button className="btn edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
