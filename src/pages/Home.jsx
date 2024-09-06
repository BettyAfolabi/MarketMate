//import React from "react";
import Card from "../components/Card";
import Awoof from "../components/Awoof";
import CategoryList from "../components/CategoryList";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";

function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white ">
      <div className="flex flex-col mx-auto bg-[#FCFCFC] font-poppins">
        <div className="flex justify-center mx-auto mt-2 mb-2 font-semibold text-[18px] leading-7">
          <Link
            to="/"
            className="text-white bg-[#1D4E89] rounded-lg px-[20px] py-[10px] hover:bg-secblue"
          >
            Products
          </Link>
          <Link to="/services" className="px-[20px] py-[10px] hover:underline">
            Services
          </Link>
        </div>
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
        <div className="lg:hidden mt-1 mx-2">
          <img
            src="/Featured2.png"
            alt="featured image info"
            className="w-full "
          />
        </div>
        <div>
          <HomeCarousel />
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
          <h2 className="font-extrabold text-[24px] pb-3">Awoof deals for you</h2>
          <div className="mx-auto max-w-2xl px-2 py-7 sm:px-4 sm:py-10 lg:max-w-7xl lg:px-8">
            <Awoof />
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="font-extrabold text-[24px] pb-4">Trending products</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-1">
            <Card
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
              height="h-[350px]"
              imgHeight="h-[150px]"
              imgWidth="w-[270px]"
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
              height="h-[350px]"
              imgHeight="h-[150px]"
              imgWidth="w-[270px]"
              imageSrc="../dress.png"
              productName="Flare Dress"
              productDesc="Antheaa Black & Rust Orange Floral Print Tiered Midi F..."
              productPrice="₦12,000"
              review="⭐⭐⭐⭐"
              reviewCount="3,35,566"
              showButton={false}
              symbol={false}
            />
            <Card
              height="h-[350px]"
              imgHeight="h-[150px]"
              imgWidth="w-[270px]"
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
          <div className="bg-white shadow-lg flex flex-col lg:flex-row justify-center items-center p-2">
            <div className="flex flex-row space-x-4">
              <img src="../watcha.png" alt="watcha" />
              <img src="../watchb.png" alt="watchb" />
            </div>
            <img src="../watches.png" alt="watches img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
