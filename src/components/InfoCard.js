// src/InfoCard.js
import React from 'react';
import '../App.css';

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="info-content">
        <h1 className="logo">x64</h1>
        <h2>х64 – лучшее решение для всех ваших компьютерных потребностей</h2>
        <div className="info-details">
          <div className="info-item">
            <h3>14 лет</h3>
            <p>За 14 лет мы выросли в одного из лидеров на игровом компьютерном рынке</p>
          </div>
          <div className="info-item">
            <h3>50 000 ПК</h3>
            <p>Мы произвели более 50 тысяч игровых компьютеров для наших клиентов</p>
          </div>
          <div className="info-item">
            <h3>60 клубов</h3>
            <p>Оборудовали 60 компьютерных клубов под ключ</p>
          </div>
        </div>
        <button className="info-button">О компании</button>
      </div>
    </div>
  );
};

export default InfoCard;
