import React from "react";
import "./OutletLocation.css"; 

const OutletLocation = () => {
  const data = [
    { _id: 1, name: "Citra Garden 6", address: "Food Junction Citra 6 Blok L2-A Citra Garden City, Jakarta Barat", distance: "2.4 km" },
    { _id: 2, name: "Emporium Mall", address: "Emporium Pluit Mall Lt.2 jalan Pluit Selatan Raya, Jakarta Utara", distance: "6.3 km" },
    { _id: 3, name: "Puri Indah Mall", address: "Bakmi GM Puri Indah Mall, Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat", distance: "6.4 km" },
    { _id: 4, name: "Lippo Mall Puri", address: "Bakmi GM Lippo Mall Puri, Food Avenue Unit FSC-07, Gedung St. Moritz Lippo Mall Puri Lantai I, Jl. Puri Indah Boulevard Blok UI, Jakarta Barat", distance: "6.6 km" },
    { _id: 5, name: "Terminal 3 Ultimate", address: "Bandara Soekarno Hatta Terminal 3 Ultimate Domestic Landside, lantai 2 Ultimate Food Terminal, Tangerang", distance: "7.7 km" },
  ];

  return (
    <div className="outlet-location-container">
      <div className="outlet-location-header">
        <h2 className="outlet-location-title">Outlet Location</h2>
      </div>
      <p className="outlet-location-earnMore">Explore your options</p>
      <div className="outlet-location-tableContainer">
        {data.map((item) => (
          <div key={item._id} className="outlet-location-row">
            <div className="outlet-location-card">
              <div className="outlet-location-infoContainer">
                <p className="outlet-location-name">{item.name}</p>
                <p className="outlet-location-address">{item.address}</p>
                <div className="outlet-location-distanceContainer">
                <ion-icon name="location-outline" className='outlet-location-icon'></ion-icon>
                  <p className="outlet-location-distance">{item.distance}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="outlet-location-seeAllText">SEE ALL</p>
    </div>
  );
};

export default OutletLocation;
