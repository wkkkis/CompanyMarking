import React from 'react';
import './style.scss'

const Orders = () => {
  return (
    <section class="orders">
      <div class="container">
        <div class="orders__row">
          <div class="orders__content">
            <div class="orders__circle">01</div>
            <p class="orders__text">Формрование заявки на получение кодов</p>
          </div>
          <div class="orders__content">
            <div class="orders__circle">02</div>
            <p class="orders__text">Отправка выбранных кодов на печать</p>
          </div>
          <div class="orders__content">
            <div class="orders__circle">03</div>
            <p class="orders__text">Сериализация упаковки</p>
          </div>
          <div class="orders__content">
            <div class="orders__circle">04</div>
            <p class="orders__text">Агрегация</p>
          </div>
          <div class="orders__content">
            <div class="orders__circle">05</div>
            <p class="orders__text">
              Отправка отчета о произовдстве оператору ТЕКШЕР
            </p>
          </div>
          <button class="orders__btn" type="button">
            Подробнее →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Orders;