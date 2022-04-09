import React from 'react';
import icon1 from '../../assets/img/projects/icon.png'
import icon2 from "../../assets/img/projects/icon-2.png";
import icon3 from "../../assets/img/projects/icon-3.png";
import icon4 from "../../assets/img/projects/icon-4.png";
import icon5 from "../../assets/img/projects/icon-5.png";
import icon6 from "../../assets/img/projects/icon-6.png";
import './style.scss'

const Projects = () => {
  return (
      <section class="projects">
        <div class="wrapper">
            <h2 class="projects__title">
                Пилотные проекты
            </h2>
            <div class="projects__row">
                <div class="col-2 projects__card">
                    <img src={icon1} alt="icon" class="projects__img"/>
                   <p class="projects__text">
                        БАД
                    </p>
                </div>
                <div class="col-2 projects__card">
                    <img src={icon2} alt="icon" class="projects__img"/>
                    <p class="projects__text">
                        Пиво и слабоалкогольные напитки
                    </p>
                </div>
                <div class="col-2 projects__card">
                    <img src={icon3} alt="icon" class="projects__img"/>
                    <p class="projects__text">
                        Антисептики
                    </p>
                </div>
                <div class="col-2 projects__card">
                    <img src={icon4} alt="icon" class="projects__img"/>
                    <p class="projects__text">
                        Медицинские изделия
                    </p>
                </div>
                <div class="col-2 projects__card">
                    <img src={icon5} alt="icon" class="projects__img"/>
                    <p class="projects__text">
                        Велосипеды
                    </p>
                </div>
                <div class="col-2 projects__card">
                    <img src={icon6} alt="icon" class="projects__img"/>
                    <p class="projects__text">
                        Кресло-коляски
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;