// ReservationPage.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ReservationPage.css';

const ReservationPage = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Retrieve user information stored locally
        const userData = JSON.parse(localStorage.getItem('userData'));

        // Auto-fill ReservationPage with user information
        if (userData) {
          setName(userData.name);
          setEmail(userData.email);
          setMobileNumber(userData.mobileNumber);
        } else {
          console.error('User information not found in localStorage');
        }
      } catch (error) {
        console.error('Error retrieving user information from localStorage:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleReservation = async () => {
    if (!name || !email || !dateTime || !numberOfPeople || !mobileNumber) {
      alert('Please fill out all the fields before confirming the reservation.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if (!dateRegex.test(dateTime)) {
      alert('Please enter a valid date and time.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          dateTime,
          mobileNumber,
          numberOfPeople,
        }),
      });

      if (response.ok) {
        alert('Reservation confirmed!');
        alert('Thank You !!!!!');
        history.push('/homepage');
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to confirm reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error confirming reservation:', error);
      alert('Failed to confirm reservation. Please try again.');
    }
  };

  return (
    <div className="container1">
      <h2>Make a Reservation</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="dateTime">Date and Time:</label>
        <input
          type="datetime-local"
          id="dateTime"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />

        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />

        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          required
        />

        <button type="button" onClick={handleReservation}>
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
