import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await fetch('/api/user-profile');
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        setUserInfo(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchUserInfo();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userInfo) {
    return <p>Loading user information...</p>;
  }

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="user-info">
        <div className="user-avatar">
          <img src={userInfo.avatar} alt="Profile Picture" />
        </div>
        <ul>
          <li key={1}><strong>Username:</strong> {userInfo.username}</li>
          <li key={2}><strong>Name:</strong> {userInfo.name}</li>
          <li key={3}><strong>Email:</strong> {userInfo.email}</li>
          <li key={4}><strong>Mobile Number:</strong> {userInfo.mobileNumber}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;