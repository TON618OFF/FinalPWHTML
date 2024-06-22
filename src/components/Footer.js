import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
        <div class="footer-content">
            <div class="footer-logo">
                <img src="https://static.insales-cdn.com/assets/1/5367/6444279/1718719641/logo.svg" alt="х64 Логотип"></img>
            </div>
            <div class="footer-column">
                <h4>Каталог товаров</h4>
                <ul>
                    <li><a href="#">Электроника</a></li>
                    <li><a href="#">Бытовая техника</a></li>
                    <li><a href="#">Мебель</a></li>
                    <li><a href="#">Одежда</a></li>
                    <li><a href="#">Спорттовары</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Покупателям</h4>
                <ul>
                    <li><a href="#">Доставка и оплата</a></li>
                    <li><a href="#">Возврат товара</a></li>
                    <li><a href="#">Часто задаваемые вопросы</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Отзывы</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Для Бизнеса</h4>
                <ul>
                    <li><a href="#">Партнёрская программа</a></li>
                    <li><a href="#">Корпоративные продажи</a></li>
                    <li><a href="#">Реклама на сайте</a></li>
                    <li><a href="#">Тендеры и закупки</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>О Компании</h4>
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Карьера</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-contact">
            <p>Телефон: <a href="tel:+71234567890">+7 (123) 456-78-90</a></p>
            <p>Почта: <a href="mailto:info@h64.com">info@x64.com</a></p>
            <div class="footer-social">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"></img></a>
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="Twitter"></img></a>
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="Instagram"></img></a>
            </div>
        </div>
    </footer>
    
  );
};

export default Footer;
