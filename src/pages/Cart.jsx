import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div>
      <NavBar />
      <div className="w-11/12 mx-auto my-2">
        <h1 className="text-center">Cart</h1>
        <div className="flex flex-row ">
          <div className="border-bottom border-black pb-2">
            <p className="rounded-full bg-black text-white">1</p>
            <p>Shopping cart</p>
          </div>
          <div>
            <p className="rounded-full bg-black text-white">1</p>
            <p>Checkout Details</p>
          </div>
          <div>
            <p className="rounded-full bg-black text-white">1</p>
            <p>Order Complete</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
