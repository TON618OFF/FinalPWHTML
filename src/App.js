// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import FavoritePage from './pages/FavoritePage';
import Order from './pages/Order';
import { FavoritesProvider } from './components/FavoritesContext';
import { CartProvider } from './components/CartContext';
import { motion } from 'framer-motion';



function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={
                  <>
                  <Header/>
                  <motion.div initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.7 }}
                              >
                    <h1>Популярные категории</h1>
                    <Cards />
                    <InfoCard />
                  </motion.div>
                    <Footer/>
                  </>
                } />
                <Route path="/Catalog" element={<Catalog/>} />
                <Route path="/Favorites" element={<FavoritePage/>} />
                <Route path="/Cart" element={<Cart/>} />
                <Route path="/Order" element={<Order/>} />

              </Routes>
            </div>
          </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
