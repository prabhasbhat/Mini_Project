// MenuPage.tsx

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Mexicanmenu.css';

const MenuPage: React.FC = () => {
  const history = useHistory();

  const menuItems = [
    {
        id: 19,
        name: 'Bacon Cheeseburger',
        image: 'https://example.com/bacon-cheeseburger.jpg',
        info: 'Juicy beef patty topped with bacon and melted cheese.',
        price: '$12.99',
      },
      {
        id: 20,
        name: 'Buffalo Wings',
        image: 'https://example.com/buffalo-wings.jpg',
        info: 'Crispy chicken wings coated in spicy buffalo sauce.',
        price: '$10.99',
      },
      {
        id: 21,
        name: 'Classic Caesar Salad',
        image: 'https://example.com/caesar-salad.jpg',
        info: 'Fresh romaine lettuce with parmesan cheese and Caesar dressing.',
        price: '$8.99',
      },
      {
        id: 22,
        name: 'Macaroni and Cheese',
        image: 'https://example.com/mac-and-cheese.jpg',
        info: 'Creamy and cheesy macaroni pasta.',
        price: '$9.99',
      },
      {
        id: 23,
        name: 'BBQ Ribs',
        image: 'https://example.com/bbq-ribs.jpg',
        info: 'Slow-cooked ribs with barbecue sauce.',
        price: '$15.99',
      },
      {
        id: 24,
        name: 'Chicken Pot Pie',
        image: 'https://example.com/chicken-pot-pie.jpg',
        info: 'Flaky pastry filled with chicken and vegetables.',
        price: '$11.99',
      },
      {
        id: 25,
        name: 'Cheese Fries',
        image: 'https://example.com/cheese-fries.jpg',
        info: 'Crispy fries topped with melted cheese and bacon bits.',
        price: '$7.99',
      },
      {
        id: 26,
        name: 'New York Cheesecake',
        image: 'https://example.com/cheesecake.jpg',
        info: 'Rich and creamy cheesecake with a graham cracker crust.',
        price: '$6.99',
      },
      {
        id: 27,
        name: 'Southern Fried Chicken',
        image: 'https://example.com/fried-chicken.jpg',
        info: 'Crispy and seasoned fried chicken.',
        price: '$13.99',
      },
      {
        id: 28,
        name: 'Clam Chowder',
        image: 'https://example.com/clam-chowder.jpg',
        info: 'Creamy soup with clams, potatoes, and bacon.',
        price: '$8.99',
      },
  ];

  return (
    <div className="menu-container">
      <h2 className="title">American Food Menu</h2>
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
