import React from "react";
function Buttons({ chooseType }) {
  return (
    <div className="btn-container">
      <button className="change" onClick={() => chooseType("white")}>
        white flour
      </button>
      <button className="change" onClick={() => chooseType("rye")}>
        rye flour
      </button>
      <button className="change" onClick={() => chooseType("wholemeal")}>
        wholemeal flour
      </button>
      <button className="change" onClick={() => window.location.reload(false)}>
        all types
      </button>
    </div>
  );
}

export default Buttons;
