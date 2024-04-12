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
      <div style={{
                backgroundImage: `url(home1.png)`,
                width: '100%', 
                height: '546px', 
                opacity: 1 
            }}
      className="bg-cover "></div>
      </div>
      <div className="justify-center text-center gap-[12px]">
        <p className="font-poppins font-bold text-[18px] text-[#4D4D4D] h-[28px] mt-8">Transform Your Marketplace</p>
        <p className="text-catamara font-bold text-[36px] mt-2 mb-4">Unlock Your Business Potential</p>
      </div>
      <div className="bg-[#D2DCE7] w-[1312px] h-[184px]  flex border-1 border-[#949494] rounded-[12px] flex-row gap-[24px] p-[32px] m-auto">
        <div className="flex flex-col gap-[12px] p-4">
          <p className="font-poppins font-bold text-[36px]">15K+</p>
          <p className="font-poppins font-semibold text-[18px] text-[#949494]">10,000+ Services Offered</p></div>
        <div className="flex flex-col gap-[12px] p-4">
          <p className="font-poppins font-bold text-[36px]">20K+</p>
          <p className="font-poppins font-semibold text-[18px] text-[#949494]">5,000+ Happy Sellers</p>
          </div>
        <div className="flex flex-col gap-[12px] p-4">
          <p className="font-poppins font-bold text-[36px] ">99.9%</p>
          <p className="font-poppins font-semibold text-[18px] text-[#949494]">95% Customer Satisfaction</p>
          </div>
        <div className="flex flex-col gap-[12px] p-4">
          <p className="font-poppins font-bold text-[36px]">100M</p>
          <p className="font-poppins font-semibold text-[18px] text-[#949494]">1 Million+ Users Nationwide</p>
        </div>
      </div>
      <div className="justify-center text-center gap-[12px]">
        <p className="font-poppins font-bold text-[18px] text-[#4D4D4D] h-[28px] mt-8">Explore. Connect. Succeed.</p>
        <p className="text-catamara font-bold text-[36px] mt-2 mb-4">Revolutionizing Service Marketplaces</p>
      </div>
      
     </div> 
    <Footer/>
    </div>
  )
}

export default About
