import React from "react";
import "./StarwarsCharCard.css";

export const StarwarsCharCard = ({ charData: { name, height, eye_color } }) => {
  return (
    <div className="main-bio">
      <div>
        <h2> {name}</h2>
        <h3> {eye_color}</h3>
        <h3>{height}</h3>
      </div>
    </div>
  );
};
