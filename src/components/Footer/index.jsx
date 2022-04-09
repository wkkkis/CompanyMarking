import React from "react";
import logo from "../../assets/img/post-582862-0-90359700-1584336831 1.svg";
import './style.scss'

const index = () => {
  return (
    <section className="footer">
      <div className="wrapper">
        <div className="footer-container">
          <div className="first-child">
            <p className="first-child__title">Главная</p>
            <ul className="first-child__list">
              <li>О маркировке</li>
              <li>Отрасли</li>
              <li>Услуги</li>
            </ul>
          </div>
          <div className="first-child">
            <p className="first-child__title">Социальные сети</p>
            <ul className="first-child__list">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Telegram</li>
            </ul>
          </div>
          <div className="footer-links">
            <a className="footer-links__first" href="tel:+7 (499) 940-09-90">
              +7 (499) 940-09-90
            </a>
            <a className="footer-links__second" href="email:info@marka.ru">
              info@marka.ru
            </a>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <img src={logo} alt="Logo" />
          <p style={{color:"#fff", fontSize:"12px", paddingBottom:"60px", paddingTop:"20px"}}>Разработано в Oracle Digital</p>
        </div>
      </div>
    </section>
  );
};

export default index;
