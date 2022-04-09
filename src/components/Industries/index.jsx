import React from 'react';
import icon1 from '../../assets/img/industries/icon.png'
import icon2 from '../../assets/img/industries/icon-2.png'
import icon3 from '../../assets/img/industries/icon-3.png'
import icon4 from '../../assets/img/industries/icon-4.png'
import icon5 from '../../assets/img/industries/icon-5.png'
import icon6 from '../../assets/img/industries/icon-6.png'
import icon7 from '../../assets/img/industries/icon-7.png'
import icon8 from '../../assets/img/industries/icon-8.png'
import icon9 from '../../assets/img/industries/icon-9.png'
import icon10 from '../../assets/img/industries/icon-10.png'
import icon11 from "../../assets/img/industries/ques.png";
import './style.scss'


const Industries = () => {
  return (
     <section class="industries">
        <div class="wrapper">
            <h2 class="industries__title">
                Отрасли
            </h2>
            <div class="industries__row">
                <div class="col-2 industries__card">
                    <img src={icon1} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Молочная продукция
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon2} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Упакованная вода
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon3} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Лекарства
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon4} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Табак
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon5} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Товары легкой промышленности
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon6} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Обувь
                    </p>
                </div>

                <div class="col-2 industries__card">
                    <img src={icon7} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Шубы
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon8} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Духи и туалетная вода
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon9} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Шины и покрышки
                    </p>
                </div>
                <div class="col-2 industries__card">
                    <img src={icon10} alt="icon" class="industries__ing"/>
                    <p class="industries__text">
                        Фотоаппараты и видеокамеры
                    </p>
                </div>
                <div class="col-4 industries__btn">
                    <div class="industries__application">
                        <h4 class="industries__ques">Не нашли свою отрасль?</h4>
                        <p class="industries__submit">Оставить заявку</p>
                    </div>
                    <img src={icon11} alt="icon" class="industries__ig"/>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Industries;