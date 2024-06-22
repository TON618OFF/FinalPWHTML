import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);


  const removeFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorite-page">
      <Header/>
      <h1>Избранное</h1>
      {favorites.length === 0 ? (
        <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    >
        <p className='none-favorites'>Нет избранных элементов</p>
        </motion.div>
      ) : (
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              {item.name}{' '}
              <button onClick={() => removeFavorite(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      <Footer/>
    </div>
  );
};

export default FavoritePage;
