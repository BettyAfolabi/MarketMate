import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const About = () => {
  return (
    <div className="w-screen">
      <NavBar />
     <div className="min-h-screen"> 
     <div className="  ">
      <div className="flex justify-center items-center gap-[10px]">
      <button className="border-2 border-[#1D4E89] bg-[#1D4E89] rounded-[6px] px-2 ml-1 gap-1 text-[18px] font-semibold text-white align-center h-[54px] w-[154px] mt-2 mb-2">Products</button>
      <button className="text-[#464646] font-semibold text-[18px] ml-2">Services</button>
      </div>
      
      <div className="mx-auto text-center bg-[#0E2744] w-full pr-4">
      <h1 className="font-catamaran font-bold text-[52px] text-white">Find the Perfect Service</h1>
      <p className="text-[20px] font-poppins font-normal text-white text-center">Discover, Connect and Thrive in Our Marketplace</p>
      <button className=" border-2 border-[#06101B] rounded-[6px] px-2 ml-1 gap-1 text-[18px] font-semibold text-white  h-[44px] mt-2 mb-2">Learn More</button>
      <button className="ml-1  border-1 border-[#AF0100] bg-[#AF0100] rounded-[6px] px-2  gap-1 text-[18px] font-semibold text-white h-[44px]  mt-2 mb-2">Get Started</button>
      </div> 
      </div>
     </div> 
    <Footer/>
    </div>
  )
}

export default About
