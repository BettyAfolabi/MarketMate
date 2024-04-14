import React from 'react'
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
const Services = () => {
  return (
    <div className="w-screen">
    <NavBar />
   <div className="min-h-screen"> 
   <div className="  ">
    <div className="flex justify-center items-center gap-[10px]">
     <button className="text-[#464646] font-semibold text-[18px] ml-2">Products</button>
    <button className="border-2 border-[#1D4E89] bg-[#1D4E89] rounded-[6px] px-2 ml-1 gap-1 text-[18px] font-semibold text-white align-center h-[54px] w-[154px] mt-2 mb-2">Services</button>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Services
