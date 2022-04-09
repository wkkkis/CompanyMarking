import React from 'react';
import second from "../../../assets/img/Equipment/8b72324263f89e97d41d0bf9b9098986 1.svg";
import third from "../../../assets/img/Equipment/9de7c7291f83230b19f73efc4f56c89c 1.png";
const SecondBox = () => {
  return (
    <div className="second-box">
      <div className="first-child">
        <div>
          <h5 className="first-child__title">
            Высокоскоростная маркировка пива и воды
          </h5>
          <p className="first-child__desc">
            Автоматизированная система маркировки товаров на высокоскоростных
            линиях
          </p>
        </div>

        <img src={second} alt="Equipment" />
      </div>
      <div className="second-child">
        <div>
          <h5 className="second-child__title">
            Готовый комплекс для маркировки
          </h5>
          <p className="second-child__desc">
            Ультраскоростная станция печати с возможностью верификации кодов
            DataMatrix.
          </p>
        </div>
        <img src={third} alt="Equipment" />
      </div>
    </div>
  );
};

export default SecondBox;