import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Awoof from "../components/Awoof";
import CategoryList from "../components/CategoryList";

function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white">
      <NavBar />
      <div className="flex flex-col mx-auto bg-[#FCFCFC] font-poppins">
        <nav className="hidden lg:flex flex-row gap-5 my-2 w-5/6 mx-10">
          <CategoryList />
          <button className="hover:underline">Beauty & Cosmetics</button>
          <button className="hover:underline">Phones & Gadgets</button>
          <button className="hover:underline">Appliances</button>
          <button className="hover:underline">Groceries & household</button>
          <button className="hover:underline">Others</button>
        </nav>
        <div className="hidden lg:block self-center">
          <img src="../home1.png" alt="carousel of trend items" />
        </div>
        <div className="lg:hidden">
          <img
            src="/homemobile.png"
            alt="carousel of trend items"
            className="w-full"
          />
        </div>
        <div className="lg:hidden mt-1">
          <img
            src="/Featured2.png"
            alt="featured image info"
            className="w-full"
          />
        </div>
        <div className="grid lg:grid-cols-4 gap-5 my-10 justify-center self-center px-3">
          <img
            src="../Featured.png"
            alt="featured img"
            className="hidden lg:block"
          />
          <Card
            width="w-[270px]"
            height="h-[340px]"
            imageSrc="../iphone.png"
            productName="Apple iPhone 15 Pro 512GB Blue Titanium"
            productPrice="₦1,856,800"
            prevPrice="₦1,956,800"
            showButton={false}
          />
          <Card
            width="w-[270px]"
            height="h-[332px]"
            imageSrc="../nike.png"
            productName=" Nike Sneakers"
            productPrice="₦39,000"
            prevPrice="₦42,000"
            showButton={false}
          />
          <Card
            width="w-[270px]"
            height="h-[332px]"
            imageSrc="../PC.png"
            productName="HP ZBook Firefly 14 inch G10 A Mobile Workstation"
            productPrice="₦2,350,499"
            prevPrice="₦2400000"
            showButton={false}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between bg-white p-3 shadow-lg w-11/12 mx-auto mb-5">
          <div className="w-[350px] self-end">
            <h1 className="font-semibold text-[42px] leading-10">
              Luxury accessories, savings you’ll love
            </h1>
            <p className="font-medium text-[24px] leading-10">
              Save 15%* now on luxury sunglasses, jewelry and handbags.
            </p>
          </div>
          <div className="flex gap-0.5 justify-center mb-3">
            <img
              src="../earring.png"
              alt="jewelry"
              className="h-[54px] self-end"
            />
            <img src="../bag.png" alt="bag image" />
            <img
              src="../eyebag.png"
              alt="eyebag image"
              className="h-[54px] self-end"
            />
          </div>
          <img
            src="../Deals.png"
            alt="amazing deal rate"
            className="w-[223px] self-center h-[142px]"
          />
        </div>
        <div className="self-center my-2">
          <h2 className="font-extrabold pb-3 px-1">Awoof deals for you</h2>
          <div>
            <Awoof />
            <Awoof />
          </div>
        </div>
        <div className="my-2 self-center">
          <h2 className="font-extrabold text-[24px] pb-4">Trending products</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2 px-1">
            <Card
              width="w-[250px]"
              height="h-[350px]"
              imgHeight="h-[195px]"
              imageSrc="../shoe.png"
              productName="men’s & boys s..."
              productDesc="George Walker Derby Brown Formal Shoes"
              productPrice="₦26,500"
              review="⭐⭐⭐⭐⭐"
              reviewCount="13,45,678"
              showButton={false}
              symbol={false}
            />
            <Card
              width="w-[250px]"
              height="h-[350px]"
              imgHeight="h-[195px]"
              imageSrc="../short.png"
              productName="denim dress"
              productDesc="Blue cotton denim dress Look 2 Printed cotton dr..."
              productPrice="₦6,800"
              review="⭐⭐⭐⭐⭐"
              reviewCount="27,344"
              showButton={false}
              symbol={false}
            />
            <Card
              width="w-[250px]"
              height="h-[350px]"
              imgHeight="h-[195px]"
              imageSrc="../dress.png"
              productName="Flare Dress"
              productDesc="Antheaa Black & Rust Orange Floral Print Tiered Midi F..."
              productPrice="₦12,000"
              review="⭐⭐⭐⭐☆"
              reviewCount="3,35,566"
              showButton={false}
              symbol={false}
            />
            <Card
              width="w-[250px]"
              height="h-[350px]"
              imgHeight="h-[195px]"
              imageSrc="../sneakers.png"
              productName="NIke Sneakers"
              productDesc="Nike Air Jordan Retro 1 Low Mystic Black"
              productPrice="₦22,500"
              review="⭐⭐⭐⭐☆"
              reviewCount="46,890"
              showButton={false}
              symbol={false}
            />
          </div>
        </div>
        <div className="my-3 mx-4">
          <h2 className="py-2 font-bold text-[24px]">Sponsored Products</h2>
          <h3 className="text-sm font-normal pb-3">
            From accessories to trending outfits, we got you covered.
          </h3>
          <div className="bg-white shadow-lg flex flex-row justify-center items-center p-2 w-fit">
            <img src="../watcha.png" alt="watcha" />
            <img src="../watchb.png" alt="watchb" />
            <img src="../watches.png" alt="watches img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
