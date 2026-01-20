import React from "react";
import CountUp from "react-countup";
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
    <div>
      <div className="counter">
        <div className="counter-row">
          <div className="counter-column">
            <StatCounter endValue={55} label="% Customers buy baguettes" />
          </div>
          <div className="counter-column number">
            <StatCounter endValue={7} label="Years baking experience" />
          </div>
          <div className="counter-column number">
            <StatCounter endValue={75} label="Millions bread sold" />
          </div>
          <div className="counter-column">
            <StatCounter endValue={15} label="Thousand happy clients" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;
