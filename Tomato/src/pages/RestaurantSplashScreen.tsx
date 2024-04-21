import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './RestaurantSplashScreen.css'; // Import your CSS file for styling

const RestaurantSplashScreen = () => {
  const history = useHistory();

  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 3 seconds)
    const splashTimeout = setTimeout(() => {
      // Redirect to the home screen or main part of your restaurant application
      history.push('/homepage'); // Change '/home' to the desired home screen route
    }, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(splashTimeout);
  }, [history]);

  return (
    <div className="restaurant-splash-screen">
      <div className="restaurant-logo">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Food-Logo-Graphics-1-12.jpg" alt="Restaurant Logo" />
      </div>
      <div className="restaurant-name">
        <h1>MAKI RESTAU</h1>
      </div>
    </div>
  );
};

export default RestaurantSplashScreen;
