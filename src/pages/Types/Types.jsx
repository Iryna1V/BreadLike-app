import { useState } from "react";
import { breadTypes } from "./breadTypes";
import Buttons from "../../components/Buttons/Buttons";

function Types() {
  const [types, setTypes] = useState(breadTypes);

  const chooseType = (searchTerm) => {
    const newType = !searchTerm
      ? breadTypes
      : breadTypes.filter((el) => el.searchTerm === searchTerm);

    setTypes(newType);
  };

  return (
    <div>
      <div>
        <h1 className="types-title">Types of bread</h1>
        <Buttons chooseType={chooseType} />
      </div>
      <div className="types">
        {types.map((element) => {
          const { id, name, image, info } = element;
          return (
            <div className="bread-card" key={id}>
              <img src={image} alt={name} className="type-img" />
              <div className="bread-info">
                <h2 className="type-subtitle">{name}</h2>
                <p className="type-text">{info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Types;
