import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faUtensils, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Reservation from './pages/ReservationPage';
import MenuPage from './pages/Mexicanmenu';
import Indian from './pages/Indianmenu';
import Italian from './pages/Italianmenu';
import Japense from './pages/Japensemenu';
import Chinese from './pages/Chinisemenu';
import American from './pages/Americanmenu';
import DeliveryForm from './pages/DeliveryForm';
import DineInForm from './pages/DineInForm';
import UserProfilePage from './pages/user'; // Import the new UserProfilePage component
import './style.css';
import RestaurantSplashScreen from './pages/RestaurantSplashScreen';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserInfo();
    }
  }, [isLoggedIn]);

  const handleLogin = (username: string) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer yourAuthTokenHere',
        },
        credentials: 'include',
      });
      if (response.ok) {
        const user = await response.json();
        // Set user information
        setUser(user.username);
      } else {
        console.error('Failed to fetch user info:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const ActionButtons = () => {
    if (isLoggedIn) {
      return (
        <>
          <Link to="#" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </Link>
          <Link to="/profile" style={{ marginLeft: '10px' }}>
            <FontAwesomeIcon icon={faUser} />
            {user}
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/loginpage">
            <FontAwesomeIcon icon={faSignInAlt} />
            Login
          </Link>
          <Link to="/signup" style={{ marginLeft: '10px' }}>
            Signup
          </Link>
        </>
      );
    }
  };

  return (
    <Router>
      <div>
        {/* Main content */}
        <Switch>
          <Route path="/" exact component={RestaurantSplashScreen} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/loginpage">
            {/* Pass handleLogin function to LoginPage */}
            <LoginPage onLogin={handleLogin} />
          </Route>
          <Route path="/signup" component={SignupPage} />
          <Route path="/Mexicanmenu" component={MenuPage} />
          <Route path="/Indianmenu" component={Indian} />
          <Route path="/Italianmenu" component={Italian} />
          <Route path="/japensemenu" component={Japense} />
          <Route path="/Chinisemenu" component={Chinese} />
          <Route path="/Americanmenu" component={American} />
          <Route path="/Reservation" component={Reservation} />
          <Route path="/delivery/:id" component={DeliveryForm} />
          <Route path="/dine-in/:id" component={DineInForm} />
          <Route path="/profile" component={UserProfilePage} /> {/* Add a route for the UserProfilePage */}
          <Redirect from="/" to="/homepage" exact />
        </Switch>

        {/* Bottom Navigation */}
        <div className="bottom-navbar">
          <Link to="/homepage">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
          <Link to="/reservation">
            <FontAwesomeIcon icon={faCalendar} />
            Reservation
          </Link>
          <Link to='/dine-in/:id'>
            <FontAwesomeIcon icon={faUtensils} />
            DineIn
          </Link>
          {/* Show ActionButtons based on authentication status */}
          <ActionButtons />
        </div>
      </div>
    </Router>
  );
};

export default App;
