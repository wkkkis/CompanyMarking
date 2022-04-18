import React, { useState } from 'react';
import logo from '../../assets/img/header/logo.svg'
import phoneIcon from '../../assets/img/header/phoneIcon.svg'
import menuIcon from '../../assets/img/header/menu.svg'
import closeMenu from '../../assets/img/header/closeMenu.svg'
import './style.scss'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
      <header class="header">
        <div class="container">
          <nav class="header__nav">
            <div class={`header__logo ${open && "active"}`}>
              <img src={logo} alt="logo" />
              <span>МАРКА<br/>ЕВРАЗИИ</span>
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
            <div style={{display: "flex", gap: "10px"}}>
              <a href="tel:+74999400990" class="header__contact">
                {window.matchMedia("(max-width: 768px)").matches ? (
                  <img src={phoneIcon} alt="phone" />
                ) : (
                  "+7 (499) 940-09-90"
                )}
              </a>
              <div className="header__burder_menu" onClick={() => setOpen(!open)}>
                  <img src={!open ? menuIcon : closeMenu} alt="" />
              </div>
            </div>
            {open && (
              <div className="burgermenu_container">
                <ul className="links">
                  <li>
                    <a href="#">
                      О маркировке
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Отрасли
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Услуги
                    </a>
                  </li>
                </ul>
                <div class="menu-links">
                  <a class="menu-links__first" href="tel:+7 (499) 940-09-90">
                    +7 (499) 940-09-90
                  </a>
                  <a class="menu-links__second" href="email:info@marka.ru">
                    info@marka.ru
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
  );
};

export default Header;

