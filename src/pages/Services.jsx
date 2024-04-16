import Modal from "../components/Modal"
import { useState } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-screen">
    <NavBar />
   <div className="min-h-screen"> 
   <div className="  ">
    <div className="flex justify-center items-center gap-[10px]">
     <button className="text-[#464646] font-semibold text-[18px] ml-2">Products</button>
    <button 
    onClick={handleOpenModal}
    className="border-2 border-[#1D4E89] bg-[#1D4E89] rounded-[6px] px-2 ml-1 gap-1 text-[18px] font-semibold text-white align-center h-[54px] w-[154px] mt-2 mb-2">Services</button>
     <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
        <div className="flex flex-wrap gap-2 w-[1800px]">
          <div className="">
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1 ">Fashion Designer</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Basket Craft</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1 ">Capentery</p>
          <p className="text-[12px] font-poppins text-[rgb(95,108,114)] mb-1">Electrician</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Hair Styling</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Digital Design</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Bead Making</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1"> Hat making</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Artwork</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Printing Services</p>
          <p className="text-[12px] font-poppins text-[#5F6C72]">Publishing Services</p>
          </div>
         <div>
          <p className="text-[12px] font-poppins text-[#5F6C72] "></p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Mobile Accessories</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Watches & Accessories</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Smart Phones</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Cameras</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">TV & Home Appliances</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">GPS & Navigation</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Computer Accessories</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Mobile Accessories</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1"> Hat making</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Artwork</p>
          <p className="text-[12px] font-poppins text-[#5F6C72]">Printing Services</p>
         </div>
          <div>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-4"></p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Watches</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1"> Cameras</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Artwork</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Printing</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Artwork</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Phones </p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Laptops</p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Phones </p>
          <p className="text-[12px] font-poppins text-[#5F6C72] mb-1">Catering </p>
          <p className="text-[12px] font-poppins text-[#5F6C72]">Printing</p>
           </div>
          
          
          
         
          
  
          
        </div>
      </Modal>
    </div>
    </div>
    <div className="flex mb-4">
      <div className=" m-auto">
        <h4 className="font-catamaran font-bold text-[32px] w-[580px]">Your One-stop Solutions for all things Services</h4>
        <p>Discover and hire a professional service provider near you</p>
        <input placeholder="Search Services" 
        className="bg-lightgray rounded-[15px] "/>
         <input placeholder="Search Services" 
        className="bg-lightgray rounded-[15px] "/>
      </div>
    </div>
      <div className="flex flex-wrap w-[1300px] m-auto gap-[18px] mb-4 justify-center">
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
          <img src="a.png"/>
        <p className="text-center font-semibold font-poppins mt-2">Fashion Designer</p>
        <p className="ml-2">From #5,000</p>
        <p className="ml-2">Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
        <img src="b.png"/>
        <p className="text-center font-semibold font-poppins mt-2">Fashion Designer</p>
        <p className="ml-2">From #5,000</p>
        <p className="ml-2">Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
          <img src="c.png"/>
        <p className="text-center font-semibold font-poppins mt-2">Fashion Designer</p>
        <p className="ml-2">From #5,000</p>
        <p className="ml-2">Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
        <img src="d.png"/>
        <p className="text-center font-semibold font-poppins mt-2">Fashion Designer</p>
        <p className="ml-2">From #5,000</p>
        <p className="ml-2">Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
        <img src="e.png"/>
        <p className="text-center font-semibold font-poppins mt-2">Fashion Designer</p>
        <p className="ml-2">From #5,000</p>
        <p className="ml-2">Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px] mb-4">
        <img src="f.png"/>
        <p className="text-center font-semibold font-poppins mt-2"> Fashion Designer</p>
        <p className="ml-2">From #5,000</p>
        <p className="ml-2">Garments by Dee</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Services
