import React from "react";
import { BUTTONS } from "../data/Button.data";

function Buttons({ chooseType }) {
  return (
    <div className="btn-container">
      {BUTTONS.map(({ key, label }) => (
      <button 
    key={key ?? "all"}
    className="change"
    onClick={() => chooseType(key)}
    >
      {label}
      </button>
  ))}
    </div>
  );
}
 export default Buttons;