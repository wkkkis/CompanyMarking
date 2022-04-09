import React from 'react';
import photo from '../.././assets/img/main/info-img.png';
import done from '../../assets/img/done.svg'
import bg from "../../assets/img/main/bg.png";
import './style.scss'

const index = () => {
  return (
    <section class="main">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              class="main__content"
              style={{
                backgroundImage: `url(${bg})`,
                repeat: false,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h1 class="main__title">
                Комплексные решения <br />
                для цифровой маркировки
              </h1>
              <p class="main__text">
                Полноценное решение для работы с системой маркировки: <br />
                от оборудования производственных линий и отдельных <br />
                сервисов до комплексного сопровождения
              </p>
              <button class="main__btn" type="button">
                Получить предложение
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="main__info">
          <div class="main__info-left">
            <h3 class="main__info-title">
              Надежные технологии цифровой маркировки
            </h3>
            <ul class="main__info-list">
              <li class="main__info-item">
                <span>
                  {" "}
                  <img src={done} alt="Done" />
                </span>
                Маркировка и агрегация
              </li>
              <li class="main__info-item">
                <span>
                  <img src={done} alt="Done" />
                </span>
                Идентификация
              </li>
              <li class="main__info-item">
                <span>
                  <img src={done} alt="Done" />
                </span>
                Аутентификация
              </li>
              <li class="main__info-item">
                <span>
                  <img src={done} alt="Done" />
                </span>
                Прослеживание и контроль поставок
              </li>
            </ul>
          </div>
          <img src={photo} alt="info" />
        </div>
      </div>
    </section>
  );
};

export default index;