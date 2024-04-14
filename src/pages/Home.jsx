import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white">
      <NavBar />
      <div className="flex flex-col items-center w-5/6 mx-auto">
        <nav className="flex flex-row gap-5 my-2">
          <button className="bg-secblue text-white px-3 py-[14px]">
            All Category
          </button>
          <button>Beauty & Cosmetics</button>
          <button>Phones & Gadgets</button>
          <button>Appliances</button>
          <button>Groceries & household</button>
          <button>Others</button>
        </nav>
        <div>
          <img src="../home1.png" alt="carousel of trend items" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
