
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
      <div className="flex flex-wrap w-[1300px] m-auto gap-[18px]">
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
          <img src="a.png"/>
        <p>Fashion Designer</p>
        <p>From #5,000</p>
        <p>Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
          <img src="a.png"/>
        <p>Fashion Designer</p>
        <p>From #5,000</p>
        <p>Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
          <img src="a.png"/>
        <p>Fashion Designer</p>
        <p>From #5,000</p>
        <p>Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
          <img src="a.png"/>
        <p>Fashion Designer</p>
        <p>From #5,000</p>
        <p>Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
          <img src="a.png"/>
        <p>Fashion Designer</p>
        <p>From #5,000</p>
        <p>Garments by Dee</p>
        </div>
        <div className="flex  flex-col w-[341.33px] h-[483px] border-[#949494] border-2 rounded-[12px]">
          <img src="a.png"/>
        <p>Fashion Designer</p>
        <p>From #5,000</p>
        <p>Garments by Dee</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Services
