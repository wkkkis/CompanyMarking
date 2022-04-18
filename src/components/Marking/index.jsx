import React from 'react';
import photo from "../../assets/img/marking/marking-img.png";
import icon from "../../assets/img/marking/icon.png"
import './style.scss'

const Marking = () => {
  return (
      <section class="marking">
        <div class="container">
            <div class="marking__order_left">
                <img src={photo} alt="image"/>
            </div>
            <h2 class="marking__title">
                Программное обеспечение для маркировки
            </h2>
            <div class="marking__row">
                <div class="marking__right">
                    <h3 class="marking__right-title">
                        Система МАРК-СП является “облачной” системой, что
                        обеспечивает уровень отказаустойчивости не ниже 99.5% и позволяет:
                    </h3>
                    <ul class="marking__list">
                        <li class="marking__list-item">
                            Заказать коды маркировки производителя/импортером
                        </li>
                        <li class="marking__list-item">
                            Заказать коды маркировки для изготовления по поручению
                        </li>
                        <li class="marking__list-item">
                            Отправить отчет о нанесении кодов маркирови на товары
                        </li>
                        <li class="marking__list-item">
                            Осуществить валидацию нанесенных кодов маркировки и отбраковку
                        </li>
                        <li class="marking__list-item">
                            Осуществить on-line контроль статуса нанесения, отбраковки, ввода в оборот, отгрузки (стасус-отчеты)                        </li>
                        <li class="marking__list-item">
                            Отпправить отчет о вводе товаров в оборот
                        </li>
                        <li class="marking__list-item">
                            Отправить отчет об отгрузке товаров(УПД через ЭДО)
                        </li>
                    </ul>
                </div>
                <div class="marking__left">
                    <img src={photo} alt="image"/>
                </div>
            </div>
            <div class="marking__attantion">
                <img src={icon} alt="icon"/>
                <p class="marking__attantion-text">
                    Система МАРК-СП осуществляет автоматическое информационное взаимодействие с
                    оборудованием, участвующим в процессе маркировки: печатными устройствами, устройствами
                    валидации и отбраковки, системами технического зрения, а также с информационной системой
                    ТЕКШЕР для обмена с нею кодами и отчетами и имеет готовый API для взаимодействия с системами
                    ERP предприятий.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Marking;