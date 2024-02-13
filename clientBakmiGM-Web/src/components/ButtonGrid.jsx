import React from "react";
import "./ButtonGrid.css";

const ButtonGrid = ({ items }) => {
  return (
    <div className="buttonGrid">
      {items.map((item, idx) => (
        <div className="buttonContainer" key={idx}>
            <img className="buttonIcon" src={item.icon} alt={item.label} />
          <span className="buttonLabel">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default ButtonGrid;
