import React from "react";
import Header from "./Header";
import HorizontalSlider from "../components/HorizontalSlider";
import CardMember from "../components/CardMember";
import CardPoints from "../components/CardPoints";
import ButtonGrid from "../components/ButtonGrid";
import OrderIcon from "../assets/images/receipt.png";
import RedeemIcon from "../assets/images/online-shop.png";
import VoucherIcon from "../assets/images/voucher.png";
import PrivilegeIcon from "../assets/images/price-tag.png";
import HistoryIcon from "../assets/images/shopping-bag.png";
import ContactIcon from "../assets/images/speech-bubble.png";
import CardRefer from "../components/CardRefer";
import HorizontalCard from "../components/HorizontalCard";
import CardPrivileges from "../components/CardPrivileges";
import OutletLocation from "../components/OutletLocation";
import "./Home.css"; 

export default function Home() {
  const buttonItems = [
    {
      icon: OrderIcon,
      label: "Order",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
    {
      icon: RedeemIcon,
      label: "Redeem",
      size: 60,
      onPress: () => {
        // Navigasi
      },
    },
    {
      icon: VoucherIcon,
      label: "My Vouchers",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
    {
      icon: PrivilegeIcon,
      label: "Privilege",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
    {
      icon: HistoryIcon,
      label: "History",
      size: 60,
      onPress: () => {
        // Navigasi
      },
    },
    {
      icon: ContactIcon,
      label: "Contact Us",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
  ];

  return (
    <div>
      <div className="HomeContainer">
        <Header />
      </div>
      <div className="scrollContent">
        <HorizontalSlider />
        <CardMember title="Your Level" progress={0} status="Gold Target" />
        <CardPoints title="Bakmi GM Points" status="Points" />
        <ButtonGrid items={buttonItems} />
        <CardRefer />
        <HorizontalCard />
        <CardPrivileges />
        <OutletLocation /> 
      </div>
    </div>
  );
}
