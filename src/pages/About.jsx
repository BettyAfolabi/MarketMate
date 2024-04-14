
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
                backgroundImage: `url(home2.png)`,
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
      <div className="w-[1288px] h-[430px] gap-[48px] m-auto flex flex-wrap">
        <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6]">
          <div className="flex flex-row  gap-[12px]">
            <img src="md.png"className="w-[44px] h-[44px] border-1"></img>
            <p className="font-poppins font-semibold text-[18px]">Browse Easily</p>

          </div>
          <p className="ml-[28px] text-justify"> 
         Dive into a world where finding services is as easy as pie, with categories that simplify your search
          </p>
          <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">Learn More</button>
        </div>
        <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6]">
          <div className="flex flex-row  gap-[12px]">
            <img src="md1.png"className="w-[44px] h-[44px] border-1"></img>
            <p className="font-poppins font-semibold text-[18px]">Instant Chat</p>

          </div>
          <p className="ml-[28px] text-justify"> 
         Bridge the gap with direct communication, making transactions smoother and more personal
          </p>
          <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">Chat Now</button>
        </div>
        <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6] flex-row">
          <div className="flex flex-row  gap-[12px]">
            <img src="md2.png"className="w-[44px] h-[44px] border-1"></img>
            <p className="font-poppins font-semibold text-[18px]">Seller Hub</p>

          </div>
          <p className="ml-[28px] text-justify"> 
          A seamless platform for sellers to showcase their <br />services, manage listings, and update details on the go.
          </p>
          <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">Discover How</button>
        </div>
        <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6]">
          <div className="flex flex-row  gap-[12px]">
            <img src="md3.png"className="w-[44px] h-[44px] border-1"></img>
            <p className="font-poppins font-semibold text-[18px]">Ad Performance</p>

          </div>
          <p className="ml-[28px] text-justify"> 
          Track your success with detailed analytics on advertisement performance, turning insights into action.
          </p>
          <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">View Stats</button>
        </div>
      </div>
      <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg-[#D2DCE7] flex flex-row m-auto">
        <img src="about.png"></img>
        <div>
          <h4 className="font-catamaran font-bold text-[36px]">Explore Top Services</h4>
          <p className="font-poppins font-normal text-[18px] mt-2 mb-4">Discover a world of services tailored to your needs. From home improvement to digital marketing, find everything in one place.</p>
          <button className="border-2 border-[#949494] ] ml-2 rounded-[6px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold">Learn More</button>
          <button className="border-1 border-[#1D4E89] bg-[#1D4E89] ml-2 rounded-[6px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold text-white">Get Started</button>
        
          <div className="flex mt-6">
            <img src="a1.png"/>
            <img src="a2.png"/>
            <img src="a3.png"/>
            <p className="font-poppins font-normal text-[18px] ml-2">Join our community today and unlock endless possibilities!</p>
          </div>
          </div>
      </div>
      <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg- flex flex-row m-auto">
        
        <div>
          <h4 className="font-catamaran font-bold text-[36px]">Create Your Listing</h4>
          <p className="font-poppins font-normal text-[18px] mt-2 mb-4">Easily list your services, manage your offerings, and connect with buyers. Our platform makes it simple and efficient.</p>
          <button className="border-2 border-[#949494] bg-[#949494] ml-2 rounded-[6px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold">Details</button>
          <button className="border-1 border-[#1D4E89] bg-[#1D4E89] ml-2 rounded-[6px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold text-white">List Now</button>
        
          <div className="flex mt-6">
            <img src="a1.png"/>
            <img src="a2.png"/>
            <img src="a3.png"/>
            <p className="font-poppins font-normal text-[18px] ml-2">Start your seller journey with us and grow your business!</p>
          </div>
          </div>
          <img src="about3.png"></img>
      </div>
      <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg-[#D2DCE7] flex flex-row m-auto">
        <img src="about4.png"></img>
        <div>
          <h4 className="font-catamaran font-bold text-[36px]">Connect Instantly</h4>
          <p className="font-poppins font-normal text-[18px] mt-2 mb-4">Communicate with sellers or service providers directly through our platform. Get your questions answered in real-time.</p>
          <button className="border-2 border-[#949494] bg-[#949494] ml-2 rounded-[6px] w-[140px] h-[44px] text-[15px] font-poppins font-semibold">Chat Now</button>
          <button className="border-1 border-[#1D4E89] bg-[#1D4E89] ml-2 rounded-[6px] w-[136px] h-[44px] text-[15px] font-poppins font-semibold text-white">Start Conversation </button>
        
          <div className="flex mt-6">
            <img src="a1.png"/>
            <img src="a2.png"/>
            <img src="a3.png"/>
            <p className="font-poppins font-normal text-[18px] ml-2">Experience seamless communication today. Connect, ask, and receive answers effortlessly</p>
          </div>
          </div>
         
      </div>
      <div className="mt-4">
      <p className="font-poppins font-normal text-[18px] ml-6">Discover Services That Elevate Your Business!</p>
      <p className="font-catamaran ml-6 font-bold text-[36px]"> Browse Top Categories</p>
     </div>
     <div className="flex flex-wrap p-8">
      <div className="ml-14 ">
        <img src="m1.png"/>
        <p className="font-poppins font-semibold text-[20px]">Web Development</p>
        <p className="font-poppins font-[500] text-[15px] text-[#949494]"> Build Your Online Presence</p>
      </div>
      <div className="ml-4">
        <img src="m2.png"/>
        <p className="font-poppins font-semibold text-[20px]">Graphics Design</p>
        <p className="font-poppins font-[500] text-[15px] text-[#949494]"> Visualize Your Brand</p>
      </div>
      <div className="ml-4">
        <img src="m3.png"/>
        <p className="font-poppins font-semibold text-[20px]">Digital Marketing</p>
        <p className="font-poppins font-[500] text-[15px] text-[#949494]">Expand Your Reach</p>
      </div>
     </div>
     <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg-[#D2DCE7] flex flex-row m-auto">
        <img src="m4.png"></img>
        <div>
          <h4 className="font-catamaran font-bold text-[36px]">Your Catalog Showcase</h4>
          <p className="font-poppins font-normal text-[18px] mt-2 mb-4">Highlight all your services in a personalized catalog. Let customers browse your unique offerings at a glance.</p>
          <button className="border-2 border-[#949494] ] ml-2 rounded-[6px] w-[136px] h-[44px] text-[16px] font-poppins font-semibold">View Catalog </button>
          <button className="border-1 border-[#1D4E89] bg-[#1D4E89] ml-2 rounded-[6px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold text-white">Create Yours</button>
        
          <div className="flex mt-6">
            <img src="a1.png"/>
            <img src="a2.png"/>
            <img src="a3.png"/>
            <p className="font-poppins font-normal text-[18px] ml-2">Build your brand with a comprehensive and attractive catalog. Show the world what you've got!</p>
          </div>
          </div>
      </div>
     <div className="mt-4">
      <p className="font-poppins font-normal text-[18px] ml-6">Your One-Stop Marketplace for Proffesional Services!</p>
      <p className="font-catamaran ml-6 font-bold text-[36px]"> Our Featured Services</p>
     </div>
     <div className="flex">
     <div className="ml-8">
        <img src="m6.png" 
        className="rounded-[12px]"/>
        <p className="font-poppins font-semibold text-[20px]">Content Writing</p>
        <p className="font-poppins font-[500] text-[15px] text-[#949494]">Craft Your Message</p>
      </div>
      <div>
      <div className="ml-8">
        <img src="m9.png" 
        className="rounded-[12px]"/>
        <p className="font-poppins font-semibold text-[20px]">SEO Optimization</p>
        <p className="font-poppins font-[500] text-[15px] text-[#949494]">Rank Higher in Search</p>
      </div>
      <div className="ml-8">
        <img src="m8.png" 
        className="rounded-[12px]"/>
        <p className="font-poppins font-semibold text-[20px]">App Development</p>
        <p className="font-poppins font-[500] text-[15px] text-[#949494]">Innovate with Apps</p>
      </div>
      </div>
     </div>
     <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg-[#D2DCE7] flex flex-row m-auto">
       
        <div>
          <h4 className="font-catamaran font-bold text-[36px]">Ad Performance Analytics</h4>
          <p className="font-poppins font-normal text-[18px] mt-2 mb-4">Track your success and optimize your strategy with our detailed ad performance analytics. Understand your audience bette..</p>
          <button className="border-2 border-[#949494] ] ml-2 rounded-[6px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold">Learn Insights</button>
          <button className="border-1 border-[#1D4E89] bg-[#1D4E89] ml-2 rounded-[6px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold text-white">Analyze Now</button>
        
          <div className="flex mt-6">
            <img src="a1.png"/>
            <img src="a2.png"/>
            <img src="a3.png"/>
            <p className="font-poppins font-normal text-[18px] ml-2">Empower your advertising efforts with actionable data. See what works and refine your approach for maximum impact.</p>
          </div>
          </div>
          <img src="mm.png"></img>
      </div>
     </div> 
    <Footer/>
    </div>



  )
}

export default About
