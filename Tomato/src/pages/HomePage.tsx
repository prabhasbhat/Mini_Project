import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const history = useHistory();

  const usernameParam = new URLSearchParams(location.search).get('username');
  const [username, setUsername] = useState(usernameParam || 'Guest');
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (usernameParam) {
      setUsername(usernameParam);
      fetchUserInfo(usernameParam);
    }
  }, [usernameParam]);

  const fetchUserInfo = async (username) => {
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
        setUserInfo(user);
      } else {
        console.error('Failed to fetch user info:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  

  const handleSearch = () => {
    history.push(`/search?query=${searchQuery}`);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <div className="nav">
        <Link to={`/profile?username=${username}`}>
          <img src={userInfo?.avatarUrl || 'https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Food-Logo-Graphics-1-12.jpg'} alt="Profile Logo" className="logo" />
        </Link>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p className="username">Welcome, {username}!</p>
      </div>
      <div className="header">
        <h1 className="bold">Welcome to Our MAKI RESTAU</h1>
        <Link to="/Reservation" className="reservation-btn">
          Make Reservation
        </Link>
        <p className='PP'>Explore our delicious menu and enjoy the best dining experience!</p>
      </div>
      <div className="page-content">
        <h2 className='h'>Featured Menu</h2>
        <div className="menu-item">
          <Link to="/indianmenu">
            <img src="https://images.herzindagi.info/image/2022/Dec/andhra-food-1.jpg" alt="Special Dish 1" />
          </Link>
          <div className="item-details">
            <Link to="/indianmenu">
              <h3>INDIAN</h3>
              <p>The staple Indian foods are Rice, Wheat and Lentils. And no Indian dish is complete without spices. Indian food is a combination of all six tastes like sweet, sour, salty, bitter, spicy and astringent. In India different dishes are prepared for different festivals.</p>
            </Link>
          </div>
        </div>

        <div className="menu-item">
        <Link to="/Mexicanmenu">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToo_0lkMgSk8By6fMJEfoGkQhXHj5pD-WKupm2powhJQ&s" alt="Special Dish 2" />
          </Link>
          <div className="item-details">
          <Link to="/Mexicanmenu">
            <h3>MEXICAN</h3>
            <p>Authentic Mexican food and drinks are more than tacos and margaritas. </p>
            </Link>
          </div>
        </div>

        <div className="menu-item">
        <Link to="/Chinisemenu">
          <img src="https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg" alt="Special Dish 3" />
          </Link>
          <div className="item-details">
          <Link to="/Chinisemenu">
            <h3>CHINESE</h3>
            <p>There is nothing wrong with tried, true, and dependable. Chow mein is not only one of the most popular dishes in China, but it has also become a signature dish at Chinese restaurants all around the world. With stir-fried noodles, and your choice of sauteed tofu, vegetables, or meat, Chow mein has become an easy and reliable meal to be savored and enjoyed.</p>
          </Link>
          </div>
        </div>
        <div className="menu-item">
        <Link to="/Italianmenu">
          <img src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Special Dish 3" />
          </Link>
          <div className="item-details">
          <Link to="/Italianmenu">
            <h3>ITALIAN</h3>
            <p>Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed in Italy since Roman times.</p>
          </Link>
          </div>
        </div>
        <div className="menu-item">
        <Link to="/japensemenu">
          <img src="https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg" alt="Special Dish 3" />
          </Link>
          <div className="item-details">
          <Link to="/japensemenu">
            <h3>JAPANESE</h3>
            <p>Japanese cuisine encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes.</p>
          </Link>
          </div>
        </div>
        <div className="menu-item">
        <Link to="/Americanmenu">
          <img src="https://www.americancafe.com/wp-content/uploads/2021/09/americancafe-What-Is-American-Cuisine.jpg" alt="Special Dish 3" />
          </Link>          
          <div className="item-details">
          <Link to="/Americanmenu">
            <h3>AMERICAN</h3>
            <p>Highlights of American cuisine include milkshakes, barbecue, and a wide range of fried foods. Many quintessential American dishes are unique takes on food.</p>
            </Link>   
          </div>
        </div>
        </div>


        {/* Add more menu items here */}

        <button className="scroll-btn" onClick={scrollToTop}>
          Scroll to Top
        </button>
      </div>
  );
};

export default HomePage;
