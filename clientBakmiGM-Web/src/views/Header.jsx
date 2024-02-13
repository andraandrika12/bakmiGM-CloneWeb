import React from 'react';
import './Header.css'; 
import iconBakmiGM from '../assets/images/iconBakmiGM.png';

export default function Header() {
  return (
    <div className="navbar">
        <img src={iconBakmiGM} alt="Bakmi GM" className="logo" />
        <div className="navbar-right">
            <ion-icon name="qr-code-outline" color="black" className="qrCode"></ion-icon>
            <ion-icon name="mail-outline" color="black" className="mail"></ion-icon>
            <ion-icon name="ellipsis-vertical-outline" color="black" className="dots"></ion-icon>
        </div>
    </div>
  );
}
