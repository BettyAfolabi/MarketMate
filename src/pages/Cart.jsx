import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white font-poppins">
      <NavBar />
      <div className="w-11/12 mx-auto my-2">
        <h1 className="text-center font-semibold text-4xl my-3">Cart</h1>
        <div className="flex flex-row justify-center gap-3 my-3">
          <div className="border-b border-black pb-3 flex">
            <p className="rounded-full bg-black text-white px-1 mr-1">1</p>
            <p className="font-semibold">Shopping cart</p>
          </div>
          <div className="border-b border-[#B1B5C3] pb-3 flex">
            <p className="rounded-full bg-[#B1B5C3] text-white px-1 mr-1">2</p>
            <p className="font-semibold">Checkout Details</p>
          </div>
          <div className="border-b border-[#B1B5C3] pb-3 flex">
            <p className="rounded-full bg-[#B1B5C3] text-white px-1 mr-1">3</p>
            <p className="font-semibold">Order Complete</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 my-4">
          <div className="my-3 basis-3/4 gap-3">
            <div className="flex bg-lightgray text-[#464646] font-medium text-xs leading-[18px] p-2">
              <h3 className="basis-2/5">PRODUCTS</h3>
              <div className="flex justify-between basis-3/5">
                <h3>PRICE</h3>
                <h3>QUANTITY</h3>
                <h3>SUB-TOTAL</h3>
              </div>
            </div>
            <div className="flex p-2">
              <div className="basis-2/5 flex gap-2">
                <img src="../trackOil.png" alt="oil product" />
                <div>
                  <h3 className="font-semibold text-xs text-secblue">
                    KIngs Cooking Oil
                  </h3>
                  <h3 className="font-normal text-sm text-[#2A2A2A] leading-[20px]">
                    Kings pure vegetable oil 1L for cooking soya....
                  </h3>
                </div>
              </div>
              <div className="basis-3/5 flex pt-2 justify-between font-normal text-sm text-[#464646]">
                <h3>#8999</h3>
                <h3>x2</h3>
                <h3 className="font-medium text-[#2A2A2A]">#17998</h3>
              </div>
            </div>
            <div className="flex p-2 mt-2">
              <div className="basis-2/5 flex gap-2">
                <img src="../trackShoe.png" alt="shoe product" />
                <div>
                  <h3 className="font-semibold text-xs text-secblue">
                    Nike Airmax React
                  </h3>
                  <h3 className="font-normal text-sm text-[#2A2A2A] leading-[20px]">
                    Nike Airmax React Red Sports, Fashion size 43 ......
                  </h3>
                </div>
              </div>
              <div className="basis-3/5 flex justify-between pt-2 font-normal text-sm text-[#464646]">
                <h3>#23599</h3>
                <h3>x1</h3>
                <h3 className="font-medium text-[#2A2A2A]">#23599</h3>
              </div>
            </div>
          </div>
          <div className="basis-1/4 border-2 border-terblue mt-5 p-2 flex flex-col justify-between rounded">
            <div className="flex justify-between">
              <h3>Subtotal</h3>
              <h3>#41.597</h3>
            </div>
            <div className="flex justify-between">
              <h3>Shipping fee</h3>
              <h3>#0.00</h3>
            </div>
            <div className="flex justify-between">
              <h3>Coupon</h3>
              <h3>No</h3>
            </div>
            <div className="flex justify-between font-medium text-[30px]">
              <h3>TOTAL</h3>
              <h3>#41.597</h3>
            </div>
            <Link
              to="/checkout"
              className="text-white bg-primaryred py-[15px] px-5 font-bold text-[18px] text-center"
            >
              Check out
            </Link>
          </div>
        </div>
        <div className="flex my-7">
          <input
            type="text"
            placeholder="Voucher code"
            className="border-2 border-[#F1F3F4] text-[#262626] px-4 py-2"
          />
          <Link className="font-semibold text-white bg-primaryred text-[18px] px-3 py-2 text-center">
            Redeem
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
