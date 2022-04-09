import React from "react";
import FirstBox from "./First-box";
import SecondBox from "./Second-box";
import ThirdBox from "./Third-box";
import "./style.scss";

const Equipment = () => {
  return (
    <section className="equipment">
      <div className="wrapper">
        <h4 className="container-title">Оборудование для маркировки</h4>
        <FirstBox />
        <SecondBox />
        <ThirdBox />
        <button>Получить предложение</button>
      </div>
    </section>
  );
};

export default Equipment;
