import React from "react";
import "./HorizontalCard.css";
import esTehManisImage from "../assets/images/esTehManis.jpg";
import lemonEsTehImage from "../assets/images/esLemonTeh.png";
import souvenirImage from "../assets/images/souvenir.jpg";

const data = [
  { _id: 1, name: "Es Teh Manis", points: "40 Pts", image: esTehManisImage },
  { _id: 2, name: "Lemon Es Teh", points: "45 Pts", image: lemonEsTehImage },
  { _id: 3, name: "Souvenir 1", points: "155 Pts", image: souvenirImage },
  { _id: 4, name: "Souvenir 2", points: "155 Pts", image: souvenirImage },
];

const HorizontalCard = () => {
  return (
    <div className="horizontal-container">
      <div className="horizontal-header">
        <h2 className="horizontal-title">Redeem Your Rewards</h2>
        <span className="horizontal-seeAllText">SEE ALL</span>
      </div>
      <p className="horizontal-earnMore">Earn more to get your rewards</p>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
  {data.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <div className="d-flex justify-content-center">
        {row.map((item) => (
          <div key={item._id} className="horizontal-card">
            <div className="horizontal-imageContainer">
              <img className="horizontal-image" src={item.image} alt={item.name} />
            </div>
            <div className="horizontal-courseInfo">
              <h3 className="horizontal-courseTitle">{item.name}</h3>
            </div>
            <div className="horizontal-locationContainer">
              <p className="horizontal-itemLocation">{item.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;
