// MenuPage.tsx

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Mexicanmenu.css';

const MenuPage: React.FC = () => {
  const history = useHistory();

  const menuItems = [
    {
        id: 7,
        name: 'Tempura Platter',
        image: 'https://example.com/tempura-platter.jpg',
        info: 'Lightly battered and deep-fried seafood and vegetables.',
        price: '¥899',
      },
      {
        id: 8,
        name: 'Udon Noodles',
        image: 'https://example.com/udon-noodles.jpg',
        info: 'Thick wheat noodles served in a savory broth.',
        price: '¥649',
      },
      {
        id: 9,
        name: 'Okonomiyaki',
        image: 'https://example.com/okonomiyaki.jpg',
        info: 'Japanese savory pancake with various ingredients.',
        price: '¥749',
      },
      {
        id: 10,
        name: 'Sashimi Plate',
        image: 'https://example.com/sashimi-plate.jpg',
        info: 'Fresh slices of raw fish served with soy sauce.',
        price: '¥999',
      },
      {
        id: 11,
        name: 'Yakitori Skewers',
        image: 'https://example.com/yakitori-skewers.jpg',
        info: 'Grilled chicken skewers with teriyaki sauce.',
        price: '¥799',
      },
      {
        id: 12,
        name: 'Chawanmushi',
        image: 'https://example.com/chawanmushi.jpg',
        info: 'Steamed savory egg custard with various ingredients.',
        price: '¥699',
      },
      {
        id: 13,
        name: 'Miso Soup',
        image: 'https://example.com/miso-soup.jpg',
        info: 'Traditional Japanese soup with miso paste and ingredients.',
        price: '¥449',
      },
      {
        id: 14,
        name: 'Matcha Parfait',
        image: 'https://example.com/matcha-parfait.jpg',
        info: 'Dessert parfait with matcha-flavored ingredients.',
        price: '¥599',
      },
      {
        id: 15,
        name: 'Tonkatsu',
        image: 'https://example.com/tonkatsu.jpg',
        info: 'Breaded and deep-fried pork cutlet.',
        price: '¥799',
      },
      {
        id: 16,
        name: 'Anmitsu',
        image: 'https://example.com/anmitsu.jpg',
        info: 'Japanese dessert with agar jelly and sweet toppings.',
        price: '¥549',
      },
    // Add more items as needed
  ];

  return (
    <div className="menu-container">
      <h2 className="title">Japanense Food Menu</h2>
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
