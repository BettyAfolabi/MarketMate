import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white font-poppins">
      <NavBar />
      <p>Wishlist</p> <Footer />
    </div>
  );
}

export default Wishlist;
