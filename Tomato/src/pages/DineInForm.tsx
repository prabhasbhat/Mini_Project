// DineInForm.js
import React, { useState } from 'react';
import './DineInForm.css';

const DineInForm = () => {
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Send data to server
    const response = await fetch('http://localhost:3001/submitDineInForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numberOfGuests, specialRequests }),
    });

    if (response.ok) {
      console.log('Form submitted successfully');
      // You can add further actions if needed
    } else {
      console.error('Failed to submit form');
    }
  };

  return (
    <div className="dine-in-form-container">
      <p className="dine-in-form-title">Dine In Form</p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="numberOfGuests">Number of Guests:</label>
        <input
          type="number"
          id="numberOfGuests"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
          required
        />

        <label htmlFor="specialRequests">Special Requests:</label>
        <textarea
          id="specialRequests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DineInForm;