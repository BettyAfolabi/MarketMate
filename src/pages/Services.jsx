import Modal from "../components/Modal";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ServicesDetails from "./ServicesDetails";
const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [input, setInput] = useState("");

  return (
    <div className="w-screen">
      <NavBar />
      <div className="min-h-screen">
        <div className="  ">
          <div className="flex justify-center items-center gap-[10px]">
            <Link 
            to="/servicepage"
            className="text-[#464646] font-semibold text-[18px] ml-2">
              Services
            </Link>
            <button
              onClick={handleOpenModal}
              className="border-2 border-[#1D4E89] bg-[#1D4E89] rounded-[6px] px-2 ml-1 gap-1 text-[18px] font-semibold text-white align-center h-[54px] w-[154px] mt- mb-2"
            >
              Products
            </button>
            <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
              <div className="flex flex-wrap gap-2 w-[1800px]">
                <div className="">
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1 ">
                    Advertising Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Automotive Service
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1 ">
                    Beauty Sevices
                  </p>
                  <p className="text-[12px] font-poppins text-[rgb(95,108,114)] mb-1">
                    Building Materials
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Chauffeur Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Childcare Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Cleaning Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Computer & IT Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Design Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    DJ & Entertainment  Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72]">
                    Educational Services
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Event Planning Services</p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Financial Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Fitness & Personal Training
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                  Food & Bevarages
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Health & Beauty
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Hospitality Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Legal Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Computer Accessories
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Landscaping & Gardening
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                  Online
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                  Personal Care
                  </p>
                </div>
                <div>
                
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Photography Services</p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Publishing Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72]  mb-1">
                    Pet Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Real Estate Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Rental Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Repair Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Security Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Shoemaking Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                   Videography Services
                  </p>
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                    Translation Services
                  </p>
                  
                  <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">
                   Other Services
                  </p>
                  
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className="flex mb-4">
          <div className=" ">
            <h4 className="font-catamaran font-bold text-[#0E2744] text-[32px] w-[580px] ml-4 md:text-[25px]">
              Your One-stop Solutions for all things Services
            </h4>
            <p className="ml-4 font-poppins font-normal text-[#0E2744] text-[12px]">
              Discover and hire a professional service provider near you
            </p>

            <div className="w-[455px] ml-4 rounded-[16px] border-[1.5px] border-gray flex mt-3 gap-[10px] md:w-[695px]">
              <div className="relative">
                <input
                  placeholder="Search Services..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-dgray rounded-[15px] ml-2 mt-2 pr-[10px] pl-[60px]  py-[6px] font-poppins font-normal text-[15px] md:w-[297px] w-[190px] h-[47px]"
                />
                <img
                  src="/stroke.png"
                  alt="Search Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h- bg-dgray w-[20px] "
                />
              </div>
              <div className="h-[87px] border-[1.5px] border-dgray ml-2"></div>
              <div className="relative">
                <input
                  placeholder="Where ?"
                  className="bg-dgray rounded-[15px] ml-2 mt-2 pr-[10px] pl-[60px]  py-[6px] font-poppins font-normal text-[15px] md:w-[297px] w-[190px] h-[47px]"
                />
                <img
                  src="/vec.png"
                  alt="Search Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h- bg-dgray w-[20px] "
                />
              </div>
            </div>
            <div className="ml-4 mt-4 flex">
              <p className="font-poppins text-[#6A6A6A] text-[14px]">
                Try Searching for a{" "}
              </p>
              <Link
                to="/tailor"
                className="btn ml-1 font-poppins text-[14px] text-[#1B61B6]"
              >
                Tailor,
              </Link>
              <Link
                to="/electrician"
                className="btn ml-1 font-poppins text-[14px] text-[#1B61B6]"
              >
                Electrician,
              </Link>
              <Link
                to="/plumber"
                className="btn ml-1 font-poppins text-[14px] text-[#1B61B6]"
              >
                Plumber
              </Link>
            </div>
          </div>
          <div className="">
            <img src="frame1.png" className="mt-0" />
          </div>
        </div>
        <div>
          <h4 className="font-poppins font-bold ml-4 pl-10 mb-2 text-[30px]">
            {" "}
            Explore More Services
          </h4>
        </div>
        <div className="flex flex-wrap md:w-[1300px] m-auto gap-[18px] mb-4 justify-center">
          <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
            <img src="a.png" />
            <p className="text-center font-semibold font-poppins mt-2">
              Fashion Designer
            </p>
            <p className="ml-2">From #5,000</p>
            <p className="ml-2">Garments by Dee</p>
          </div>
          <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
            <img src="b.png" />
            <p className="text-center font-semibold font-poppins mt-2">
              Carpenter
            </p>
            <p className="ml-2">Contact for Price</p>
            <p className="ml-2">Wood Working</p>
          </div>
          <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
            <img src="c.png" />
            <p className="text-center font-semibold font-poppins mt-2">
              Knitter
            </p>
            <p className="ml-2">From #3,000</p>
            <p className="ml-2">Shade's Knittery </p>
          </div>
          <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
            <img src="d.png" />
            <p className="text-center font-semibold font-poppins mt-2">
              Hair Dresser
            </p>
            <p className="ml-2">From #5,000</p>
            <p className="ml-2">Styling Hub</p>
          </div>
          <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
            <img src="e.png" />
            <p className="text-center font-semibold font-poppins mt-2">
             Caterer 
            </p>
            <p className="ml-2">From #5000 Price</p>
            <p className="ml-2">Baba Tope Tasty Cuisine</p>
          </div>
          <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
            <img src="f.png" />
            <p className="text-center font-semibold font-poppins mt-2">
              {" "}
              Bricklayer
            </p>
            <p className="ml-2">From #5,000</p>
            <p className="ml-2">Building Rocks</p>
          </div>
          <div className="mt-4 w-[1216px] h-[456px] rounded-[30px] shadow-md flex mb-4">
            <div>
              <img src="group.png" className="m-2" />
              <p className="font-poppins font-bold ml-4 text-[15px]mt-4">
                Turn on location
              </p>
              <p className="font-poppins  ml-4 text-[10px] mt-4">
                Get recommendation of great services! Turn on your location so
                we <br />
                can show you what’s nearby.
              </p>
              <button className="rounded-[5px]  bg-[#F95959] px-4 w-[210] h-[54px] mt-10 ml-4 text-white font-poppins text-[12px]">
                Search near me
              </button>
            </div>
            <img src="man.png" className="ml-10 p-4" />
          </div>
        </div>
        <div>
          <h4 className="text-right mr-12 pr-12 mb-4 font-bold font-poppins text-[30px]">
            Trending Now
          </h4>

          <div className="flex flex-wrap m-auto gap-[28px] mb-10 justify-center ">
            <div className="flex  flex-col  h-auto border-[#949494] border-2 rounded-[12px]">
              <img src="13.png" />
              <p className="text-left font-semibold font-poppins mt-2">
                Clean Cutz Salon
              </p>

              <p className="">224, Avenue babs, Lagos Nigeria</p>
            </div>
            <div className="flex  flex-col  h-auto border-[#949494] border-2 rounded-[12px]">
              <img src="14.png" />
              <p className="text-left font-semibold font-poppins mt-2">
                Wood Work
              </p>

              <p className="">324, Avenue, Ikeja Lagos Nigeria</p>
            </div>
            <div className="flex  flex-col  h-auto border-[#949494] border-2 rounded-[12px]">
              <img src="15.png" />
              <p className="text-left font-semibold font-poppins mt-2">
                {" "}
                Relax Spa
              </p>

              <p className="">444, Avenue VI, Lagos Nigeria </p>
            </div>
            <div className="flex  flex-col  h-auto border-[#949494] border-2 rounded-[12px]">
              <img src="16.png" />
              <p className="text-left font-semibold font-poppins mt-2">
                Shutter Studio
              </p>

              <p className="">444, Avenue babs cresent suit Lagos nigeria</p>
            </div>
          </div>
        </div>
        <div className="ml-4 bg-[#EFCCCC] mb-4 shadow-sm rounded-[4px]">
          <img src="ga.png" />
        </div>
        <Routes>
          <Route path="/tailor" element={<ServicesDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
