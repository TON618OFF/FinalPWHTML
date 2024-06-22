// src/Cards.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Компьютеры',
    imageUrl: 'https://static.insales-cdn.com/images/collections/1/3787/91934411/large_Frame_170.jpg', 
    bgColor: '#ffe6f2',
    link: '/Catalog'
  },
  {
    title: 'Ноутбуки',
    imageUrl: 'https://static.insales-cdn.com/images/collections/1/7203/93494307/large_Без_имени-1.jpg', 
    bgColor: '#f0f0f0',
    link: '/Catalog'
  },
  {
    title: 'Мониторы',
    imageUrl: 'https://static.insales-cdn.com/images/collections/1/3830/91934454/large_Frame_170.jpg', 
    bgColor: '#ffe6cc',
    link: '/Catalog'
  },
  {
    title: 'Периферия',
    imageUrl: 'https://static.insales-cdn.com/images/collections/1/3821/91934445/large_Frame_170.jpg', 
    bgColor: '#e6f2ff',
    link: '/Catalog'
  }
];

const Cards = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Link to={category.link} key={index} className="category-card-link">
          <div
            className="category-card"
            style={{ backgroundColor: category.bgColor }}
          >
            <img src={category.imageUrl} alt={category.title} className="category-image" />
            <div className="category-info">
              <h2>{category.title}</h2>
              <span className="arrow">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
