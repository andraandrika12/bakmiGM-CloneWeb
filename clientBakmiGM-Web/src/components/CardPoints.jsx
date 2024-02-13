import React from "react";
import "./CardPoints.css";

const CardPoints = ({ title, status }) => {
  let displayText;
  if (status === "New Member") {
    displayText = "0 Spend";
  } else if (status === "Points") {
    displayText = (
      <span>
        <span className="bold">40</span> points will expire on{" "}
        <span className="bold">22 Feb 2024.</span>{" "}
        <span className="bold seeDetails">See Details</span>
      </span>
    );
  }

  return (
    <div className="card">
      <div className="titleContainer">
        <span className="projectTitle">{title}</span>
        <span className="points">40</span>
      </div>
      <span className="progressLabel">{displayText}</span>
    </div>
  );
};

export default CardPoints;
