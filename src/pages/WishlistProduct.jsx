import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white font-poppins">
      <NavBar />
      <div className="w-11/12 mx-auto my-2">
        <div className="flex justify-center mx-auto mt-2 mb-10 font-semibold text-[18px] leading-7">
          <Link
            to="/wishlist"
            className="text-white bg-[#1D4E89] rounded-lg px-[20px] py-[10px] hover:bg-secblue"
          >
            Products
          </Link>
          <Link
            to="/wishlistservice"
            className="px-[20px] py-[10px] hover:underline"
          >
            Services
          </Link>
        </div>
        <div className="flex justify-between text-[#121212] font-semibold my-5">
          <h2 className="text-2xl ">Wishlist(4)</h2>
          <div className="flex">
            <div className="flex self-center">
              <p className="text-base pr-0.5">Sort by</p>
              <i class="bx bx-sm bx-chevron-down"></i>
            </div>
            <div className="flex border border-[#E8ECEF] gap-x-1">
              <i className="bx bx-md bxs-grid border-r border-[#E8ECEF] text-[#6C7275]"></i>
              <i className="bx bx-md bxs-grid-alt bg-[#F3F5F7] border-r border-[#E8ECEF]"></i>
              <img
                src="/Toolbar.png"
                alt="vertical toolbar"
                className="border-r border-[#E8ECEF] pr-0.5"
              />
              <img src="/ToolbarB.png" alt="horiontal toolbar" />
            </div>
          </div>
        </div>
        <div className="lg:mx-5 grid grid-cols-1 gap-x-2 sm:gap-x-2 gap-y-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="lg:w-[250px] sm:w-[210px] h-[485px] flex flex-col justify-between ">
            <img src="/Paste image.png" alt="ipods img" className="h-[349px]" />
            <h3 className="font-normal text-base leading-[18px] py-2">
              Wireless Bluetooth Ear Pods - White
            </h3>
            <p className="font-bold text-base leading-[18px] py-1">₦16,598</p>
            <p className="text-xs text-gray self-start">
              Sold by <span className="text-secblue">Ritemall</span>
            </p>
            <p>⭐⭐⭐⭐☆</p>
          </div>

          <div className="lg:w-[250px] sm:w-[210px] h-[485px] flex flex-col justify-between">
            <img src="/boxes.png" alt="suitcases img" className="h-[349px]" />
            <h3 className="font-normal text-base leading-[18px] py-2">
              Flare Dress
            </h3>
            <p className="font-normal text-[10px] leading-[18px]">
              XL Large Suitcase Expandable Lightweight Luggage Trolley
            </p>
            <div className="flex my-1 gap-2 self-start">
              <p className="font-bold text-base leading-[18px]">₦12,000</p>
              <p className="text-gray text-xs leading-3 line-through pt-0.5">
                ₦60,000
              </p>
            </div>

            <p className="text-xs text-gray self-start">
              Sold by <span className="text-secblue">Marketmate</span>
            </p>
            <p>⭐⭐⭐⭐☆</p>
          </div>
          <div className="lg:w-[250px] sm:w-[210px] h-[485px] flex flex-col justify-between">
            <img src="/Card.png" alt="flare dress img" className="h-[349px]" />
            <h3 className="font-normal text-base leading-[18px] py-2">
              Flare Dress
            </h3>
            <p className="font-normal text-[10px] leading-[18px]">
              Antheaa Blue & pink Orange Floral Print tiered F...
            </p>
            <p className="font-bold text-base leading-[18px] py-1">₦12,000</p>
            <p className="text-xs text-gray self-start">
              Sold by <span className="text-secblue">Glamour-us</span>
            </p>
            <p>⭐⭐⭐⭐☆</p>
          </div>
          <div className="lg:w-[250px] sm:w-[210px] h-[485px] flex flex-col justify-between">
            <img
              src="/denimdress.png"
              alt=" denim dress img"
              className="h-[349px]"
            />
            <h3 className="font-normal text-base leading-[18px] py-2">
              Denim Dress
            </h3>
            <p className="font-normal text-[10px] leading-[18px] py-1">
              Blue cotton denim dress Look 2 Printed cotton dr...
            </p>
            <p className="font-bold text-base leading-[18px] py-1">₦6800</p>
            <p className="text-xs text-gray self-start">
              Sold by <span className="text-secblue">Glamour-us</span>
            </p>
            <p>⭐⭐⭐⭐☆</p>
          </div>
        </div>
        <button className="border border-[#141718] rounded-[80px] px-5 py-1 font-medium text-base my-10 mx-auto flex justify-center hover:bg-lightgray">
          Show More
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
