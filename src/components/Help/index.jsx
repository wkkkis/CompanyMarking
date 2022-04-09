import React from 'react';
import './style.scss'
import phone from '../../assets/img/complex-mark__cta 1.svg'

const Help = () => {
  return (
    <section className="help-container">
      <div className="wrapper">
        <div className="help">
          <div className="help-box">
            <h4 className="help-box__title">Мы всегда готовы вам помочь</h4>
            <p className="help-box__desc">
              Оставьте свой номер, если возникли вопросы. Мы перезвоним и
              поможем со всем разобраться
            </p>
            <a className="help-box__btn" href="#">Отправить заявку</a>
          </div>
          <img className="help-img" src={phone} alt="Phone" />
        </div>
      </div>
    </section>
  );
};

export default Help; 