// MenuPage.tsx

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Mexicanmenu.css';

const MenuPage: React.FC = () => {
  const history = useHistory();

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      image: 'https://example.com/margherita-pizza.jpg',
      info: 'Classic pizza with tomato, mozzarella, and basil.',
      price: '₹799',
    },
    {
      id: 2,
      name: 'Ravioli al Pomodoro',
      image: 'https://example.com/ravioli-al-pomodoro.jpg',
      info: 'Homemade ravioli with tomato sauce.',
      price: '₹899',
    },
    {
      id: 3,
      name: 'Spaghetti Carbonara',
      image: 'https://example.com/spaghetti-carbonara.jpg',
      info: 'Spaghetti with eggs, cheese, pancetta, and black pepper.',
      price: '₹999',
    },
    {
      id: 4,
      name: 'Fettuccine Alfredo',
      image: 'https://example.com/fettuccine-alfredo.jpg',
      info: 'Creamy Alfredo sauce with fettuccine pasta.',
      price: '₹699',
    },
    {
      id: 5,
      name: 'Lasagna',
      image: 'https://example.com/lasagna.jpg',
      info: 'Layered pasta with Bolognese sauce and cheese.',
      price: '₹849',
    },
    {
      id: 6,
      name: 'Bruschetta',
      image: 'https://example.com/bruschetta.jpg',
      info: 'Toasted bread topped with tomatoes, garlic, and basil.',
      price: '₹449',
    },
    {
      id: 7,
      name: 'Tiramisu',
      image: 'https://example.com/tiramisu.jpg',
      info: 'Classic Italian dessert with coffee-soaked ladyfingers.',
      price: '₹599',
    },
    {
      id: 8,
      name: 'Osso Buco',
      image: 'https://example.com/osso-buco.jpg',
      info: 'Braised veal shanks with vegetables.',
      price: '₹899',
    },
    {
      id: 9,
      name: 'Minestrone Soup',
      image: 'https://example.com/minestrone-soup.jpg',
      info: 'Hearty vegetable soup with pasta and beans.',
      price: '₹749',
    },
    {
      id: 10,
      name: 'Chicken Piccata',
      image: 'https://example.com/chicken-piccata.jpg',
      info: 'Pan-seared chicken with lemon and capers.',
      price: '₹999',
    },
    {
      id: 11,
      name: 'Caprese Salad',
      image: 'https://example.com/caprese-salad.jpg',
      info: 'Fresh salad with tomatoes, mozzarella, and basil.',
      price: '₹549',
    },
    // Add more items as needed
  ];

  return (
    <div className="menu-container">
      <h2 className="title">Italian Food Menu</h2>
      <button className="back-button" onClick={() => history.push('/homepage')}>
        Back
      </button>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h3>{item.name}</h3>
              <p>{item.info}</p>
              <p className="price">{item.price}</p>
            </div>
            <div className="buttons">
              <Link to={`/delivery/${item.id}`} className="delivery-button">
                Delivery
              </Link>
              <Link to={`/dine-in/${item.id}`} className="dine-in-button">
                Dining In
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
