// MenuPage.tsx

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Mexicanmenu.css';

const MenuPage: React.FC = () => {
  const history = useHistory();

  const menuItems = [
    {
      id: 1,
      name: 'Butter Chicken',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdCLsND-JB-QPLUAme19rRW2w-1R4CXGs7lr20fiuOO5koKj9',
      info: 'Creamy and flavorful butter chicken.',
      price: '₹799',
    },
    {
      id: 2,
      name: 'Paneer Tikka Masala',
      image: 'https://i0.wp.com/cookingwithbry.com/wp-content/uploads/paneer-tikka-masala-recipe-2.png?fit=735%2C735&ssl=1',
      info: 'Spicy and aromatic paneer tikka masala.',
      price: '₹899',
    },
    {
      id: 3,
      name: 'Chicken Biryani',
      image: 'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg',
      info: 'Fragrant and delicious chicken biryani.',
      price: '₹999',
    },
    {
      id: 4,
      name: 'Masala Dosa',
      image: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg',
      info: 'South Indian classic with spiced potato filling.',
      price: '₹699',
    },
    {
      id: 5,
      name: 'Palak Paneer',
      image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-recipe-featured.jpg',
      info: 'Spinach and cottage cheese in a creamy curry.',
      price: '₹849',
    },
    {
      id: 6,
      name: 'Samosa Chaat',
      image: 'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2024/10/Samosa-Chaat-recipe-03.jpg',
      info: 'Crunchy samosas topped with chutney and spices.',
      price: '₹449',
    },
    {
      id: 7,
      name: 'Chole Bhature',
      image: 'https://thespicycafe.com/wp-content/uploads/2023/10/1-chole-masala-chole-bhature-chickpea-curry-vegan-vegetarian-garbanzo-beans-protein-rich-easy-quick-simple-restaurant-style-punjabi-chole-chana-masala-lunch-dinner-breakfast-Indian-dish-thespicycafe.png',
      info: 'Fried bread served with spicy chickpea curry.',
      price: '₹599',
    },
    {
      id: 8,
      name: 'Tandoori Chicken',
      image: 'https://spicecravings.com/wp-content/uploads/2018/05/Tandoori-Chicken-3.jpg',
      info: 'Marinated and grilled chicken with spices.',
      price: '₹899',
    },
    {
      id: 9,
      name: 'Dal Makhani',
      image: 'https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg',
      info: 'Slow-cooked black lentils in a rich tomato-based curry.',
      price: '₹749',
    },
    {
      id: 10,
      name: 'Rogan Josh',
      image: 'https://static.toiimg.com/thumb/53192600.cms?imgsize=418831&width=800&height=800',
      info: 'Flavorful and aromatic Kashmiri lamb curry.',
      price: '₹999',
    },
    {
      id: 11,
      name: 'Aloo Paratha',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg',
      info: 'Whole wheat bread stuffed with spiced potato filling.',
      price: '₹549',
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="title">Indian Food Menu</h2>
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
