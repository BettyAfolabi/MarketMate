import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white">
      <NavBar />
      <div className="w-11/12 mx-auto my-2">
        <h1 className="text-center font-semibold text-4xl my-2">Cart</h1>
        <div className="flex flex-row justify-center gap-3">
          <div className="border-b border-black pb-2 flex">
            <p className="rounded-full bg-black text-white px-1 mr-1">1</p>
            <p className="font-semibold">Shopping cart</p>
          </div>
          <div className="border-b border-black pb-2 flex">
            <p className="rounded-full bg-black text-white px-1 mr-1">2</p>
            <p className="font-semibold">Checkout Details</p>
          </div>
          <div className="border-b border-black pb-2 flex">
            <p className="rounded-full bg-black text-white px-1 mr-1">3</p>
            <p className="font-semibold">Order Complete</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
