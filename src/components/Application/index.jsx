import React from 'react';
import icon1 from "../../assets/img/application/icon.png";
import icon2 from "../../assets/img/application/icon-2.png";
import icon3 from "../../assets/img/application/icon-3.png";
import icon4 from "../../assets/img/application/icon-4.png";
import icon5 from "../../assets/img/application/icon-5.png";
import btn from "../../assets/img/application/btn-icon.png";
import './style.scss'

const Application = () => {
  return (
  <section class="application">
        <div class="wrapper">
            <div class="application__row">
                <div class="application__card">
                    <img src={icon1} alt="icon" class="application__card-img"/>
                    <h4 class="application__card-title">
                        Производство
                    </h4>
                    <p class="application__card-text">
                        Заказ кодов из отчета, наглядный
                        редактор этикеток, ввод в
                        оборот в 1 клик
                    </p>
                </div>
                <div class="application__card">
                    <img src={icon2} alt="icon" class="application__card-img"/>
                    <h4 class="application__card-title">
                        Импорт
                    </h4>
                    <p class="application__card-text">
                        Заказ кодов на весь контракт, отправка этикеток экспортеру, контроль поставок по заказу.
                    </p>
                </div>
                <div class="application__card">
                    <img src={icon3} alt="icon" class="application__card-img"/>
                    <h4 class="application__card-title">
                        Отгрузка
                    </h4>
                    <p class="application__card-text">
                        Добавление кодов в УПД, проверка перед отправкой, создание транспортных упаковок.
                    </p>
                </div>
                <div class="application__card">
                    <img src={icon4} alt="icon" class="application__card-img"/>
                    <h4 class="application__card-title">
                        Приемка
                    </h4>
                    <p class="application__card-text">
                        Сверка кодов на товарах и в УПД по системе “Честный знак”, загрузка УПД в систему учета.
                    </p>
                </div>
                <div class="application__card">
                    <img src={icon5} alt="icon" class="application__card-img"/>
                    <h4 class="application__card-title">
                        Хранение
                    </h4>
                    <p class="application__card-text">
                        Покодовая инвентаризация, списания, перемещение между складами
                    </p>
                </div>
                <div class="application__card application__btn">
                    <img src={btn} alt="icon" class="application__card-img"/>
                    <p class="application__card-submit">
                        Оставить заявку
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Application;