import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Complete() {
  return (
    <div>
      <NavBar />
      <div className="w-4/5 mx-auto my-3 font-poppins">
        <h1 className="text-center font-semibold text-4xl my-3">Check Out</h1>
        <div className="flex flex-row justify-center gap-3 my-5">
          <div className="hidden border-b-2 border-[#38CB89] pb-3 lg:flex">
            <i className="bx bx-sm bxs-check-circle text-[#38CB89] mr-1"></i>
            <p className="font-semibold text-[#38CB89]">Shopping cart</p>
          </div>
          <div className="hidden border-b-2 border-[#38CB89] pb-3 lg:flex">
            <p className="rounded-full bg-[#38CB89] text-white px-1 mr-1">2</p>
            <p className="font-semibold text-[#38CB89]">Checkout Details</p>
          </div>
          <div className="border-b border-black pb-3 flex">
            <p className="rounded-full bg-black text-white px-1 mr-1">3</p>
            <p className="font-semibold">Order Complete</p>
          </div>
        </div>
        <div className="bg-white w-2/4 mx-auto p-6 flex flex-col justify-center font-medium shadow-2xl">
          <h3 className="text-center text-[28px] text-[#8D8D8D] leading-8">
            Thank you! 🎉
          </h3>
          <h2 className="text-[#191919] text-[40px] leading-[44px] py-4 text-center">
            Your order has been received
          </h2>
          <div className="flex gap-x-2 my-2 mx-auto">
            <img src="/complete (1).png" alt="ordered shoe" />
            <img src="/complete(2).png" alt="ordered oil" />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-2 my-2 font-semibold text-sm mx-auto">
            <h3 className="text-[#8D8D8D]">Order code:</h3>
            <h3 className="text-[#191919]">#0123_45678</h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-2 my-2 font-semibold text-sm mx-auto">
            <h3 className="text-[#8D8D8D]">Date:</h3>
            <h3 className="text-[#191919]">April 17, 2024</h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-2 my-2 font-semibold text-sm mx-auto">
            <h3 className="text-[#8D8D8D]">Total:</h3>
            <h3 className="text-[#191919]">#41,597</h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-2 my-2 font-semibold text-sm mx-auto">
            <h3 className="text-[#8D8D8D] ">Payment method:</h3>
            <h3 className="text-[#191919]">Credit Card</h3>
          </div>
          <Link
            to="/account/track"
            className="mx-auto rounded text-white my-2 font-bold text-sm bg-[#1D4E89] hover:bg-secblue px-5 py-2"
          >
            Purchase history
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Complete;
