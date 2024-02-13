import React, { useState } from "react";
import platinumMember from "../assets/images/platinumMember.jpg";
import goldMember from "../assets/images/goldMember.jpg";
import birthdayReward from "../assets/images/birthdayMember.jpg";
import redeemPoint from "../assets/images/redeemVoucher.jpg";
import signupReward from "../assets/images/signupReward.jpg";
import benefitGMania from "../assets/images/benefit.jpg";
import faqMember from "../assets/images/faq.jpg";
import "./CardPrivileges.css"; 

const CardPrivileges = () => {
  const data = [
    { _id: 1, name: "Platinum Member💎", exp: "Exp. 31 Dec 2024", image: platinumMember },
    { _id: 2, name: "Gold Member✨", exp: "Exp. 31 Dec 2024", image: goldMember },
    { _id: 3, name: "Birthday Reward🎂", exp: "Exp. 31 Dec 2024", image: birthdayReward },
    { _id: 4, name: "Redeem Point💰", exp: "Exp. 31 Dec 2024", image: redeemPoint },
    { _id: 5, name: "Sign Up Reward💰", exp: "Exp. 31 Dec 2024", image: signupReward },
    { _id: 6, name: "Benefit GMania💰", exp: "Exp. 31 Dec 2024", image: benefitGMania },
    { _id: 7, name: "FAQ MEMBER🎂", exp: "Exp. 31 Dec 2024", image: faqMember },
  ];

  const [numColumns, setNumColumns] = useState(2);

  return (
    <div className="card-privileges-container">
      <div className="card-privileges-header">
        <h2 className="card-privileges-title">Privileges</h2>
      </div>
      <p className="card-privileges-earnMore">Keep discovering our promo and news</p>
      <div className="card-privileges-cardContainer">
        {data.map((item, index) => (
          <div
            key={item._id}
            className={[
              "card-privileges-card",
              index % numColumns === numColumns - 1 && "card-privileges-lastColumn",
            ].join(" ")}
          >
            <div className="card-privileges-imageContainer">
              <img className="card-privileges-image" src={item.image} alt={item.name} />
            </div>
            <div className="card-privileges-infoContainer">
              <p className="card-privileges-name">{item.name}</p>
              <p className="card-privileges-exp">{item.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPrivileges;
