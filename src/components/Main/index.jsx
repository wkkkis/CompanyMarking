import React, { useEffect, useState } from 'react';
import photo from '../.././assets/img/main/info-img.png';
import done from '../../assets/img/done.svg'
import bg from "../../assets/img/main/bg.png";
import arrowLeft from "../../assets/img/main/arrowLeft.svg";
import arrowRight from "../../assets/img/main/arrowRight.svg";
import scrollBtn from "../../assets/img/main/scrollBtn.svg";
import './style.scss'

const Main = () => {

  const [btnToScroll, setBtnToScroll] = useState(false)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  
  let scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop > 10) {
      setBtnToScroll(true)
    } else {
      setBtnToScroll(false)
    }
  }

  useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return function () {
          document.removeEventListener("scroll", scrollHandler)
      }
  }, [])

  return (
    <section class="main">
      <div class="swiper mySwiper ">
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
              <div className="wrapper">
                <h1 class="main__title">
                  Комплексные решения <br />
                  для цифровой маркировки
                </h1>
                <p class="main__text">
                  Полноценное решение для работы с системой маркировки: <br />
                  от оборудования производственных линий и отдельных <br />
                  сервисов до комплексного сопровождения
                </p>
                <div className='main__progress_group'>
                  <span>01</span>
                  <div className="main__progress_group-line"></div>
                  <span>02</span>
                  <div className="main__progress_group-line"></div>
                  <span>03</span>
                  <div className="main__progress_group-line"></div>
                </div>
                <button class="main__btn" type="button">
                  Получить предложение
                </button>
                <div className="main__arrows_group">
                  <img src={arrowLeft} alt="" />
                  <img src={arrowRight} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container"> */}
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
                <span>
                  Маркировка и агрегация
                </span>
              </li>
              <li class="main__info-item">
                <span>
                  <img src={done} alt="Done" />
                </span>
                <span>
                  Идентификация
                </span>
              </li>
              <li class="main__info-item">
                <span>
                  <img src={done} alt="Done" />
                </span>
                <span>
                  Аутентификация
                </span>
              </li>
              <li class="main__info-item">
                <span>
                  <img src={done} alt="Done" />
                </span>
                <span>
                  Прослеживание и контроль поставок
                </span>
              </li>
            </ul>
          </div>
          <img src={photo} className="main__info-img" alt="info" />
        </div>
      {/* </div> */}
      {btnToScroll && (
        <div className="top_btn" onClick={scrollTop}>
          <img src={scrollBtn} alt="" />
        </div>
      )}
    </section>
  );
};

export default Main;