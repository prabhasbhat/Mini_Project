// MenuPage.tsx

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Mexicanmenu.css';

const MenuPage: React.FC = () => {
  const history = useHistory();

  const menuItems = [
    {
        id: 7,
        name: 'Kung Pao Chicken',
        image: 'https://example.com/kung-pao-chicken.jpg',
        info: 'Spicy stir-fried chicken with peanuts and vegetables.',
        price: '¥899',
      },
      {
        id: 8,
        name: 'Dim Sum Platter',
        image: 'https://example.com/dim-sum-platter.jpg',
        info: 'Assortment of bite-sized Chinese dumplings and snacks.',
        price: '¥649',
      },
      {
        id: 9,
        name: 'Mapo Tofu',
        image: 'https://example.com/mapo-tofu.jpg',
        info: 'Spicy and flavorful tofu dish with minced meat.',
        price: '¥749',
      },
      {
        id: 10,
        name: 'Peking Duck',
        image: 'https://example.com/peking-duck.jpg',
        info: 'Crispy duck with thin pancakes, hoisin sauce, and scallions.',
        price: '¥999',
      },
      {
        id: 11,
        name: 'Hot and Sour Soup',
        image: 'https://example.com/hot-and-sour-soup.jpg',
        info: 'Traditional Chinese soup with a spicy and tangy flavor.',
        price: '¥799',
      },
      {
        id: 12,
        name: 'General Tso\'s Chicken',
        image: 'https://example.com/general-tsos-chicken.jpg',
        info: 'Sweet and spicy deep-fried chicken dish.',
        price: '¥699',
      },
      {
        id: 13,
        name: 'Spring Rolls',
        image: 'https://example.com/spring-rolls.jpg',
        info: 'Crispy rolls filled with vegetables or meat.',
        price: '¥449',
      },
      {
        id: 14,
        name: 'Chow Mein',
        image: 'https://example.com/chow-mein.jpg',
        info: 'Stir-fried noodles with vegetables and meat.',
        price: '¥599',
      },
      {
        id: 15,
        name: 'Ma Po Eggplant',
        image: 'https://example.com/ma-po-eggplant.jpg',
        info: 'Spicy and flavorful eggplant dish.',
        price: '¥799',
      },
      {
        id: 16,
        name: 'Sweet and Sour Pork',
        image: 'https://example.com/sweet-and-sour-pork.jpg',
        info: 'Crispy pork in a sweet and tangy sauce.',
        price: '¥549',
      },
  ];

  return (
    <div className="menu-container">
      <h2 className="title">Chinese Food Menu</h2>
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
