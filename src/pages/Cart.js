import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CartContext } from '../components/CartContext';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <Header />
      <div className="cart-header">
        <h2 className='CartTitle'>Корзина</h2>
        {cart.length > 0 && (
          <Link to="/order" className="order-button">
            <button type="button" className="btn btn-primary">Оформить заказ</button>
          </Link>
        )}
      </div>
      {cart.length === 0 ? (
        <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}>
          <p className='if-cart-none'>Ваша корзина пуста</p>
        </motion.div>
      ) : (
        <div className="product-list">
          {cart.map((item, index) => (
            <motion.div key={index} className="product-card"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}>
              <img src={item.image} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p>Цена: {item.price} руб.</p>
              <p className='product-desc'>{item.description}</p>
            </motion.div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
