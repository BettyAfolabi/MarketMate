import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function WishlistService() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white font-poppins">
      <NavBar />
      <div className="w-11/12 mx-auto my-2">
        <div className="flex justify-center mx-auto mt-2 mb-10 font-semibold text-[18px] leading-7">
          <Link to="/wishlist" className="px-[20px] py-[10px] hover:underline">
            Products
          </Link>
          <Link
            to="/wishListservice"
            className="text-white bg-[#1D4E89] rounded-lg px-[20px] py-[10px] hover:bg-secblue"
          >
            Services
          </Link>
        </div>
        <div className="flex justify-between text-[#121212] font-semibold my-5">
          <h2 className="text-2xl ">Wishlist(4)</h2>
          <div className="flex">
            <div className="flex self-center">
              <p className="text-base pr-0.5">Sort by</p>
              <i className="bx bx-sm bx-chevron-down"></i>
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
            <img src="/list1.png" alt="makeup img" className="h-[349px]" />
            <p>⭐⭐⭐⭐⭐</p>
            <h3 className="font-semibold leading-[1px]">Makeup Services</h3>
            <p className="font-semibold text-base leading-[1px]">
              ₦10,000{" "}
              <span className="text-gray text-xs leading-3 line-through">
                {" "}
                #12,000
              </span>
            </p>
          </div>

          <div className="lg:w-[250px] w-[210px] h-[485px] flex flex-col justify-between">
            <img
              src="/link2.png"
              alt="Basket Crafts img"
              className="h-[349px]"
            />
            <p className="mt-2">⭐⭐⭐⭐⭐</p>
            <h3 className="font-semibold text-base leading-[18px] pt-3 mb-2">
              Basket Crafts
            </h3>
            <p className="font-semibold text-base leading-[18px]">
              ₦10,000{" "}
              <span className="text-gray text-xs leading-3 line-through pt-0.5">
                {" "}
                #12,000
              </span>
            </p>
            <div className="flex my-1 gap-2 self-start"></div>
          </div>
          <div className="lg:w-[250px] sm:w-[210px] h-[485px] flex flex-col justify-between">
            <img
              src="/list3.png"
              alt="automotive repair img"
              className="h-[349px]"
            />
            <p>⭐⭐⭐⭐⭐</p>
            <h3 className="font-semibold text-base leading-[18px] py-2">
              Automotive Repairs
            </h3>
            <p className="font-semibold text-base leading-[18px] py-1">
              Contact for price <span className="text-xs text-gray"></span>
            </p>
          </div>
          <div className="lg:w-[250px] sm:w-[210px] h-[485px] flex flex-col justify-between">
            <img src="/list4.png" alt=" Home tutor img" className="h-[349px]" />
            <p>⭐⭐⭐⭐⭐</p>
            <h3 className="font-semibold text-base leading-[18px] py-2">
              Home Tutor(Primary level)
            </h3>

            <p className="font-semibold text-base leading-[18px] py-1">
              ₦6000 <span className="text-xs text-gray">per month</span>
            </p>
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

export default WishlistService;
