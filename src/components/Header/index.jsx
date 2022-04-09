import React from 'react';
import logo from '../../assets/img/header/logo.png'
import phoneIcon from '../../assets/img/header/phoneIcon.png'
import './style.scss'

const Header = () => {
  return (
      <header class="header">
        <div class="container">
          <nav class="header__nav">
            <div class="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <ul class="header__list">
              <li class="header__list-item">
                <a href="#" class="header__link">
                  О маркировке
                </a>
              </li>
              <li class="header__list-item">
                <a href="#" class="header__link">
                  Отрасли
                </a>
              </li>
              <li class="header__list-item">
                <a href="#" class="header__link">
                  Услуги
                </a>
              </li>
            </ul>
            <a href="tel:+74999400990" class="header__contact">
              {window.matchMedia("(max-width: 768px)").matches ? (
                <img src={phoneIcon} alt="phone" />
              ) : (
                "+7 (499) 940-09-90"
              )}
            </a>
          </nav>
        </div>
      </header>
  );
};

export default Header;

