import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Mexicanmenu.css';

const MenuPage: React.FC = () => {
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const history = useHistory();

  const toggleDeliveryForm = () => {
    setShowDeliveryForm(!showDeliveryForm);
  };



  const menuItems = [
    {
      id: 1,
      name: 'Tacos',
      image: 'https://www.allrecipes.com/thmb/oZRkZ7B-eEKfRhVRmlOaHdr_1Vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Easy-Chorizo-Street-Tacos-by-Allrecipes-Magazine-2000-defee40a5f96469499c369a9a3b77e80.jpg',
      info: 'Delicious tacos with a variety of fillings.',
      price: '₹699', // Price in Indian Rupees
    },
    {
      id: 2,
      name: 'Burritos',
      image: 'https://www.tasteofhome.com/wp-content/uploads/2020/05/Vegetarian-Skillet-Enchiladas_EXPS_FT20_251146_F_0221_1.jpg',
      info: 'Savory burritos filled with flavorful ingredients.',
      price: '₹899',
    },
    {
      id: 3,
      name: 'Guacamole',
      image: 'https://www.tasteofhome.com/wp-content/uploads/2023/11/DIYD23_194482_P1onP3_MD_06_28_2b-Shrimp-Ceviche-SQ-2.jpg',
      info: 'Fresh and creamy guacamole served with tortilla chips.',
      price: '₹499',
    },
    {
      id: 4,
      name: 'Enchiladas',
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Mexican-Steak-Fajitas_EXPS_THJJ21_14546_B02_10_6b-6.jpg',
      info: 'Traditional enchiladas with a savory sauce.',
      price: '₹799',
    },
    {
      id: 5,
      name: 'Chiles Rellenos',
      image: 'https://hips.hearstapps.com/hmg-prod/images/chile-relleno-1648563231.jpg?crop=0.860xw:0.860xh;0.0862xw,0.0548xh&resize=980:*',
      info: 'Stuffed peppers with cheese and spices.',
      price: '₹749',
    },
    {
      id: 6,
      name: 'Carnitas',
      image: 'https://www.tasteofhome.com/wp-content/uploads/2020/03/Pico-de-Gallo_EXPS_FT20_88680_F_0123_1-2.jpg',
      info: 'Slow-cooked pork served with tortillas.',
      price: '₹849',
    },
    {
      id: 7,
      name: 'Fajitas',
      image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Traditional-Mexican-Foods-Fajitas.jpg',
      info: 'Sizzling fajitas with grilled meat and veggies.',
      price: '₹999',
    },
    {
      id: 8,
      name: 'Pozole',
      image: 'https://www.tasteofhome.com/wp-content/uploads/2023/11/TOHcom23_273591_DR_06_29_7b-mexican-street-corn-TMB-studio-SQ.jpg',
      info: 'Traditional Mexican soup with hominy and meat.',
      price: '₹699',
    },
    {
      id: 9,
      name: 'Quesadilla',
      image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Best-Mexican-Dishes-Quesadillas.jpg',
      info: 'Cheesy quesadilla with various fillings.',
      price: '₹599',
    },
    {
      id: 10,
      name: 'Tamales',
      image: 'https://images.slurrp.com/webstories/wp-content/uploads/2023/03/10150645/tamale-500x375-1.jpg',
      info: 'Steamed pockets of masa dough with various fillings.',
      price: '₹799',
    },

    {
      id: 11,
      name: 'Chilaquiles',
      image: 'https://img.etimg.com/photo/92983695/92983695.jpg',
      info: 'Tortilla chips covered in green or red salsa.',
      price: '₹649',
    },
    {
      id: 12,
      name: 'Chile Verde',
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Arroz-Con-Leche-Rice-Pudding-_exps50849_TH1999634B10_05_5bC_RMS-8.jpg',
      info: 'Pork stewed with green chili sauce.',
      price: '₹799',
    },
    {
      id: 13,
      name: 'Grilled Chicken Street Tacos',
      image: 'https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-street-tacos-2-1672869118.jpg?crop=0.9059089973234508xw:1xh;center,top&resize=980:*',
      info: 'Street-style tacos with grilled chicken.',
      price: '₹699',
    },
    {
      id: 14,
      name: 'Salsa',
      image: 'https://hips.hearstapps.com/hmg-prod/images/mexican-recipes-homemade-tomatillo-salsa-1645715617.jpeg?crop=0.9856812933025404xw:1xh;center,top&resize=980:*',
      info: 'Fresh salsa made with tomatoes, onions, and cilantro.',
      price: '₹299',
    },
    {
      id: 15,
      name: 'Authentic Birria',
      image: 'https://www.allrecipes.com/thmb/UrOx-j9t7mfJtVDkQ27NHuLBcCA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/265338-Birria-de-Res-Tacos-SZYQ1-1x1-1-033f613e6c324260b55c680a9e718d11.jpg',
      info: 'Traditional Mexican meat stew often served with tortillas.',
      price: '₹899',
    },
    {
      id: 16,
      name: 'Huevos Rancheros',
      image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Best-Mexican-Dishes-Huevos-Rancheros.jpg',
      info: 'Eggs served on tortillas with salsa.',
      price: '₹549',
    },
    {
      id: 17,
      name: 'Mexican Corn Salad',
      image: 'https://hips.hearstapps.com/hmg-prod/images/190409-mexican-corn-on-the-cob-vertical-1-1555623819.png?crop=0.795xw:0.796xh;0.0842xw,0.0726xh&resize=980:*',
      info: 'Refreshing salad with corn, lime, and chili.',
      price: '₹449',
    },
    {
      id: 18,
      name: 'Ceviche',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Cebiche_de_corvina.JPG',
      info: 'Citrus-marinated seafood salad.',
      price: '₹799',
    },
    {
      id: 19,
      name: 'Menudo',
      image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/Best-Mexican-Dishes-Menudo.jpg',
      info: 'Spicy soup made with beef tripe and hominy.',
      price: '₹699',
    },
    {
      id: 20,
      name: 'Mole',
      image: 'https://www.acouplecooks.com/wp-content/uploads/2020/03/Margarita-025-735x919.jpg',
      info: 'Rich sauce made with chili peppers, chocolate, and spices.',
      price: '₹749',
    },
    {
      id: 21,
      name: 'Tacos al Pastor',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/GettyImages-1410200729-0a2afd0.jpg?quality=90&fit=700,466',
      info: 'Tacos with marinated and spit-grilled pork.',
      price: '₹749',
    },
   
  ];

  return (
    <div className="menu-container">
      <h2 className="title">Mexican Food Menu</h2>
      <button className="back-button" onClick={() => history.push('/')}>
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