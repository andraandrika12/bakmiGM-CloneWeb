import React from "react";
import "./CardRefer.css";
import backgroundImage from "../assets/images/Refer.jpg";

const CardRefer = () => {
  return (
  
      <div className="imageBackground" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="cardContent">
          <p className="referText">
            Dapatkan 5 poin dengan mengajak teman kamu
          </p>
          <span className="referButton">REFER NOW</span>
        </div>
      </div>

  );
};

export default CardRefer;
