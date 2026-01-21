import React from "react";
import CountUp from "react-countup";
import { statsData } from "../data/Counter.data";
import "../css/Counter.css";

const StatCounter = ({ endValue, label }) => {
  return (
    <div className="stat-item">
      <CountUp
        end={endValue}
        duration={2.5} 
        enableScrollSpy={true} 
        scrollSpyDelay={100} 
        useEasing={true}
        separator=""
        suffix="" 
      />
      <span className="text">{label}</span>
    </div>
  );
};

function Counter() {
  return (
    <div className="counter">
      <div className="counter-row">
        {statsData.map((stat) => (
          <div className="counter-column" key={stat.id}>
            <StatCounter endValue={stat.endValue} label={stat.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;


 

