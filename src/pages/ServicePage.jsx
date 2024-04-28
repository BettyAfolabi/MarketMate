
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
const ServicePage = () => {
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
          <button
           className="px-[20px] py-[10px] hover:underline">Services
           </button>
        </div>
        <div>
         <div
            style={{
              backgroundImage: `url(ss.png)`,
              width: "100%",
              height: "546px",
              opacity: 1,
            }}
            className="bg-cover "
          >
             <h1 className="font-catamaran font-bold text-[52px] text-white text-center pt-10">
            Services Page 
            </h1>
            <p className="text-[20px] font-poppins font-normal text-white text-center">
              The Perfect service just for You.
            </p>
          </div>
        
         
        </div>
        <div className="flex justify-between text-[#121212] font-semibold my-5">
            <div className="flex">
              <label>CATEGORIES</label>
            <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-3 py-1 w-[200px] bg-[#E2E2E2] text-primaryblue rounded-md border border-[#F5F5F5] focus:outline-none focus:border-primaryred"
              />
              <label>PRICE
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-3 py-1 w-[200px] bg-[#E2E2E2] text-primaryblue rounded-md border border-[#F5F5F5] focus:outline-none focus:border-primaryred"
              />
              </label>
            </div>
              
              
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
              <img src="/ToolbarB.png" alt="horizontal toolbar" />
            </div>
          </div>
        </div>
        </div>
        <Footer/>
        </div>
        
  )
}

export default ServicePage
