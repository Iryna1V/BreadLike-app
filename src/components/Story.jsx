import React from "react";
import "../css/Sections.css";
import { GiBread } from "react-icons/gi";
import "../css/Story.css";

function Story() {
  return (
    <div className="serve-section">
      <h1 className="serv-title">
        About our bakery <GiBread className="quo" />
      </h1>
      <p className="story">
        <span className="my-text-color">Craft wood-fired bakery</span> is a place
        where bread becomes art and traditions come to life in every loaf. We
        lovingly revive old recipes and bake bread that has a true, natural
        taste.
        <br></br>
        <span className="my-text-color">Natural ingredients </span> and traditional
        technologies. We use only high-quality, natural ingredients: selected
        wheat and rye flour, our own sourdough starter, honey, sea salt and
        aromatic herbs.<br></br>
        Each loaf of bread undergoes a 
        <span className="my-text-color"> long fermentation process that lasts 18-20 hours.
        </span> This allows us to reveal the rich flavor and make the crumb tender and
        airy. We bake our bread in a wood-fired oven, which gives it a unique
        flavor, crispy crust and special texture. Author's recipes and
        traditional pastries.
        <span className="eat"> "We are what we eat" - Hippocrates.</span>
      </p>
    </div>
  );
}

export default Story;
