import React, { useState } from "react";
import { sliderInfo } from "../data/sliderInfo";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { GiBread } from "react-icons/gi";
import "../css/Slider.css";

function Slider() {
  const [inform, setInform] = useState(0);
  const {fact}  = sliderInfo[inform];

  const previousFact = () => {
    setInform((inform) => {
      inform--;
      if (inform < 0) {
        return sliderInfo.length - 1;
      }
      return inform;
    });
  };

  const nextFact = () => {
    setInform((inform) => {
      inform++;
      if (inform > sliderInfo.length - 1) {
        inform = 0;
      }
      return inform;
    });
  };

  return (
    <section className="slider-main">
      <div className="facts">
        <GiBread className="br-icon" />
        <h2 className="our-bread"> Facts about our bread</h2>
      </div>
      <div className="slider">
        <p className="fact">{fact}</p>

        <button className="prev" onClick={previousFact}>
          <FiChevronLeft />
        </button>

        <button className="next" onClick={nextFact}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
