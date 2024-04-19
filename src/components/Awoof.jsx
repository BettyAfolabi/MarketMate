import React from "react";
import Card from "./Card";

function Awoof() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
      <Card
        imageSrc="../tv.png"
        productName="Hisense 32 Inch A 4H Series HD Smart TV"
        productPrice="₦238,730"
        prevPrice="₦300,000"
        tag="MarketMate"
        review="⭐⭐⭐⭐☆"
      />
      <Card
        imageSrc="../ipod.png"
        productName="Wireless Bluetooth Ear Pods - White"
        productPrice="₦16,598"
        tag="Ritemall"
        review="⭐⭐⭐⭐☆"
      />
      <Card
        imageSrc="../suitcases.png"
        productName="XL Large Suitcase Expandable Lightweight Luggage Trolley"
        productPrice="₦56,000"
        prevPrice="₦60,000"
        tag="MarketMate"
        review="⭐⭐⭐⭐☆"
      />
      <Card
        imageSrc="../shirt.png"
        productName="Bajieli Vintage Retro Men’s Fashion Floral Print Slim Fit Shirt"
        productPrice="₦16,598"
        tag="Ritemall"
        review="⭐⭐⭐⭐☆"
        
      />
    </div>
  );
}

export default Awoof;
