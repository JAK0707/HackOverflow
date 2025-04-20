import React, { useEffect } from 'react';

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
    upvotes: 22
  };

  return (
    <div
      className="container my-5"
      style={{
        background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)', // Match BuyModels background
        borderRadius: '20px',
        padding: '30px',
        color: '#333',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <h2>👤 Profile</h2>
      <div className="card p-4 shadow-sm">
        <h4>{user.name}</h4>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Models Listed:</strong> {user.modelsListed}</p>
        <p><strong>Datasets Listed:</strong> {user.datasetsListed}</p>
        <p><strong>Total Upvotes:</strong> {user.upvotes}</p>
        <button className="btn btn-outline-primary mt-3">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
