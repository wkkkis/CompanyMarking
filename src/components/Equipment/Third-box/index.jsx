import React from 'react';
import first from '../../../assets/img/Equipment/acdd7a7bc3f127a7dbc6df0b0f1a5bc6 1 (1).png'
import second from '../../../assets/img/Equipment/computer.png'
import third from "../../../assets/img/Equipment/a9e6770d61ae7dcdf7b63ed5692343d2 1 (1).png";

const ThirdBox = () => {
  return (
    <div className="third-box">
      <div className="first-child">
        <h5 className="first-child__title">Решение для типографий</h5>
        <p className="first-child__desc">
          Оборудование для маркировки товаров на площадках типографий и
          производителей упаковки
        </p>
        <img src={first} alt="" />
      </div>
      <div className="second-child">
        <div>
          <h5 className="second-child__title">Решение для малого бизнеса</h5>
          <p className="second-child__desc">
            Маркировка пива, воды, молочных товаров
          </p>
        </div>
        <img src={second} alt="#" />
      </div>
      <div className="third-child">
        <div>
          <h5 className="third-child__title">Этикетки Честный Знак</h5>
          <p className="third-child__desc">
            Печать кодов Честный Знак на этикетах
          </p>
        </div>
        <img src={third} alt="" />
      </div>
    </div>
  );
};

export default ThirdBox;