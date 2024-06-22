// pages/Catalog.js
import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import "../App.css";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const Catalog = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      "id": "1",
      "name": "Ryzen 5 5500 RX 6500XT 4Gb",
      "price": "49 999",
      "description":"Производитель x64; Процессор AMD Ryzen 5 5500; Видеокарта AMD Radeon RX 6400 4Gb; Материнская плата A520M PRO; Оперативная память DDR4 3200Mhz 16Gb (2*8);",
      "quantity": "1",
      "image": "https://static.insales-cdn.com/r/BNe28QLPt4E/rs:fit:800:800:1/plain/images/products/1/3302/832400614/large_1.jpg@webp"
    },
    {
      "id": "2",
      "name": "i5 12400F RTX 4060 8Gb",
      "price": "60 999",
      "description":"Производитель x64; Процессор AMD Ryzen 5 5600; Видеокарта NVIDIA GeForce RTX 3050 8Gb; Материнская плата A520M PRO; Оперативная память DDR4 3200Mhz 16Gb (2*8);",
      "quantity": "2",
      "image": "https://static.insales-cdn.com/r/YZ12DRJWWCw/rs:fit:800:800:1/plain/images/products/1/3185/822316145/large_26.jpg@webp"
    },
    {
      "id": "3",
      "name": "i5 12400F RTX 3050 8Gb",
      "price": "63 999",
      "description":"Производитель x64; Процессор Intel Core i5 12400F; Видеокарта NVIDIA GeForce RTX 3050 8Gb; Материнская плата H610M-E; Оперативная память DDR4 3200Mhz 16Gb (2*8);",
      "quantity": "1",
      "image": "https://static.insales-cdn.com/r/Mr3Ple0xLN0/rs:fit:800:800:1/plain/images/products/1/4822/822325974/large_2.jpg@webp"
    },
    {
      "id": "4",
      "name": "Ryzen 5 7500F RTX 4060 8Gb",
      "price": "84 999",
      "description":"Производитель x64; Процессор AMD Ryzen 5 7500F; Видеокарта NVIDIA GeForce RTX 4060 8Gb; Материнская плата PRO A620M-E; Оперативная память DDR5 5600Mhz 16Gb (2*8);",
      "quantity": "2",
      "image": "https://static.insales-cdn.com/r/pOkgG4iZS7o/rs:fit:800:800:1/plain/images/products/1/1497/823256537/large_3.jpg@webp"
    },
    {
      "id": "5",
      "name": "i5 13400F RTX 4060 8Gb",
      "price": "81 999",
      "description":"Производитель x64; Процессор Intel Core i5 13400F; Видеокарта NVIDIA GeForce RTX 4060 8Gb; Материнская плата H610M-E; Оперативная память DDR4 3200Mhz 16Gb (2*8);",
      "quantity": "2",
      "image": "https://static.insales-cdn.com/r/yQ-UJv1TxHM/rs:fit:800:800:1/plain/images/products/1/2675/847497843/large_7.jpg@webp"
    }
  ];

  return (
    <div className="catalog">
      <Header />
      <h2 className='CatalogTitle'>Каталог</h2>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Цена: {product.price} руб.</p>
            <p className='product-desc'>{product.description}</p>
            <button onClick={() => addToCart(product)}>Купить</button>
          </div>
        ))}
      </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Catalog;
