import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const About = () => {
  return (
    <div className="w-screen">
      <NavBar />
      <div className="min-h-screen">
        <div className="  ">
          {/* <div className="flex justify-center items-center gap-[10px]">
            <button className="border-2 border-[#1D4E89] bg-[#1D4E89] rounded-[6px] px-2 ml-1 gap-1 text-[18px] font-semibold text-white align-center h-[54px] w-[154px] mt-2 mb-2 ">
              Products
            </button>
            <Link
              to="/services"
              className="text-[#464646] font-semibold text-[18px] ml-2"
            >
              Services
            </Link>
          </div> */}

          <div className="mx-auto text-center bg-[#0E2744] lg:w-full sm:w-3/4 md:w-[400px] md:h-[296px] lg:p-4 sm:p-4 md:pr-4">
            <h1 className="font-catamaran font-bold text-[52px] text-white">
            Find All You Need 
            </h1>
            <p className="text-[20px] font-poppins font-normal text-white text-center">
              Discover, Connect and Thrive in Our Marketplace
            </p>
            <button className=" border-2 border-[#06101B] rounded-[6px] px-2 ml-1 gap-1 text-[18px] font-semibold text-white  h-[44px] mt-2 mb-2">
              Learn More
            </button>
            <button className="ml-1  border-1 border-[#AF0100] bg-[#AF0100] rounded-[6px] px-2  gap-1 text-[18px] font-semibold text-white h-[44px]  mt-2 mb-2">
              Get Started
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url(home3.png)`,
              width: "100%",
              height: "546px",
              opacity: 1,
            }}
            className="bg-cover "
          ></div>
        </div>
        <div className="justify-center text-center gap-[12px]">
          <p className="font-poppins font-bold text-[18px] text-[#4D4D4D] h-[28px] mt-8">
            Transform Your Marketplace
          </p>
          <p className="text-catamara font-bold text-[36px] mt-2 mb-4">
            Unlock Your Business Potential
          </p>
        </div>
        <div className="bg-[#D2DCE7] w-[1312px] h-[184px]  flex border-1 border-[#949494] rounded-[12px] flex-row gap-[24px] p-[32px] m-auto">
          <div className="flex flex-col gap-[12px] p-4">
            <p className="font-poppins font-bold text-[36px]">150K+</p>
            <p className="font-poppins font-[500] text-[18px] text-[#949494]">
              Services & Products Offered
            </p>
          </div>
          <div className="flex flex-col gap-[12px] p-4">
            <p className="font-poppins font-bold text-[36px]">20K+</p>
            <p className="font-poppins font-[500] text-[18px] text-[#949494]">
              Happy Vendors
            </p>
          </div>
          <div className="flex flex-col gap-[12px] p-4">
            <p className="font-poppins font-bold text-[36px] ">99.9%</p>
            <p className="font-poppins font-[500] text-[18px] text-[#949494]">
              Customer Satisfaction
            </p>
          </div>
          <div className="flex flex-col gap-[12px] p-4">
            <p className="font-poppins font-bold text-[36px]">100M</p>
            <p className="font-poppins font-[500] text-[18px] text-[#949494]">
               Users Nationwide
            </p>
          </div>
        </div>
        <div className="flex mt-14 w-[1440x] gap-[45px] ">
          <div className="w-[664px] h-[560px] ">
            <button className="ml-16 w-[123px] h-[36px] rounded-[2px] px-[8px] py-[8px] font-poppins font-semibold text-[#FFFFFF] bg-[#CA5655]">WHO WE ARE</button>
            <h1 className="font-poppins font-semibold text-[40px] ml-12 p-2">MarketMate, Largest Product and Service Ecommerce Platform in Nigeria.</h1>
            <p className="font-poppins font-normal text-[20px] ml-12 p-2 text-[#475156]">Your dynamic ecommerce platform, seamlessly combines shopping and information. Explore our user-friendly interface to discover products and services tailored to your needs. From personalized choices to in-depth insights, MarketMate ensures a smooth journey. Stay informed with our engaging newsfeed feature, which delivers exciting updates and experiences.</p>
            <div className="w-[665px] h-[144px] flex ml-12 p-2 mt-2 flex-col ">
              <div className="flex gap-2 mb-1">
                <img src="Checks.png"
                className="w-[24px] h-[24px]"/>
                <p className="font-poppins text-[16px]">Great 24/7 customer service</p>
              </div>
              <div className="flex gap-2 mb-1">
                <img src="Checks.png"
                className="w-[24px] h-[24px]"/>
                <p className="font-poppins text-[16px]">30k+ Businesses registered</p>
              </div>
              <div className="flex gap-2 mb-1">
                <img src="Checks.png"
                className="w-[24px] h-[24px]"/>
                <p className="font-poppins text-[16px]">50+ Branches in Nigeria</p>
              </div>
              <div className="flex gap-2 ">
                <img src="Checks.png"
                className="w-[24px] h-[24px]"/>
                <p className="font-poppins text-[16px]">Over 10 Million listings available</p>
              </div>
            </div>
          </div>
          <div className="ml-10 pl-8 h-[632px]">
            <img src="unsplash.png"/>
          </div>
        </div>
        <div className="justify-center text-center gap-[12px]">
          <p className="font-poppins font-bold text-[18px] text-[#4D4D4D] h-[28px] mt-16">
            Explore. Connect. Succeed.
          </p>
          <p className="text-catamara font-bold text-[36px] mt-2 mb-4">
            Revolutionizing Service Marketplaces
          </p>
        </div>
        <div className="w-[1288px] h-[430px] gap-[48px] m-auto flex flex-wrap mb-8">
          <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6] rounded-[12px]">
            <div className="flex flex-row  gap-[12px]">
              <img src="md.png" className="w-[44px] h-[44px] border-1"></img>
              <p className="font-poppins font-semibold text-[18px]">
                Browse Easily
              </p>
            </div>
            <p className="ml-[28px] text-justify">
              Dive into a world where finding services is as easy as pie, with
              categories that simplify your search
            </p>
            <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">
              Learn More
            </button>
          </div>
          <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6] rounded-[12px]">
            <div className="flex flex-row  gap-[12px]">
              <img src="md1.png" className="w-[44px] h-[44px] border-1"></img>
              <p className="font-poppins font-semibold text-[18px]">
                Instant Chat
              </p>
            </div>
            <p className="ml-[28px] text-justify">
              Bridge the gap with direct communication, making transactions
              smoother and more personal
            </p>
            <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">
              Chat Now
            </button>
          </div>
          <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6] flex-row rounded-[12px]">
            <div className="flex flex-row  gap-[12px]">
              <img src="md2.png" className="w-[44px] h-[44px] border-1"></img>
              <p className="font-poppins font-semibold text-[18px]">
                Seller Hub
              </p>
            </div>
            <p className="ml-[28px] text-justify">
              A seamless platform for sellers to showcase their <br />
              services, manage listings, and update details on the go.
            </p>
            <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">
              Discover How
            </button>
          </div>
          <div className="w-[620px] h-[190px]  p-[24px] gap-[16px] bg-[#F6F6F6] rounded-[12px]">
            <div className="flex flex-row  gap-[12px]">
              <img src="md3.png" className="w-[44px] h-[44px] border-1"></img>
              <p className="font-poppins font-semibold text-[18px]">
                Ad Performance
              </p>
            </div>
            <p className="ml-[28px] text-justify">
              Track your success with detailed analytics on advertisement
              performance, turning insights into action.
            </p>
            <button className="ml-[28px] border-none text-[#1D4E89] mt-[15px] font-poppins text-[18px] font-semibold">
              View Stats
            </button>
          </div>
        </div>
            <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg-[#] flex flex-row m-auto">
            <div className="mt-8">
            <h4 className="font-catamaran font-bold text-[36px]">
              Create Your Listing
            </h4>
            <p className="font-poppins font-normal text-[18px] mt-2 mb-4">
            Easily list your services, manage your offerings, and connect with buyers. Our platform makes it simple and efficient.
            </p>
            <button className="border-2 border-[#184172] text-[#184172] ml-2 rounded-[5px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold">
              Details
            </button>
            <button className="border-1 border-[#BC2B2A] bg-[#BC2B2A] ml-2 rounded-[5px] w-[136px] h-[44px] text-[18px] font-poppins font-semibold text-white">
              List Now
            </button>

            <div className="flex items-center mt-6  space-x-2">
            <div className="relative ml-10">
              <img src="a1.png" className="  absolute w-[48px] h-[48px] -left-8" />
              <img src="a2.png" className="absolute w-[48px] h-[48px] -left-4" />
              <img src="a3.png" className="relative w-[48px] h-[48px]" />
            </div>
            <p className="font-poppins font-normal text-[18px] text-[#8d8d8d]">
            Start your seller journey with us and grow your business!
            </p>
            </div>
          </div>
          <img src="abbout.png" 
          className="w-[568px] h-[524px]"></img>
      
        </div>
       
        <div className="w-[1440px] h-[652px] p-[64px] gap-[64px]  flex flex-row m-auto bg-[#EFCCCC]">
          <img src="aboutt.png"></img>
          <div className="mt-10">
            <h4 className="font-catamaran font-bold text-[36px]">
              Connect Instantly
            </h4>
            <p className="font-poppins font-normal text-[18px] mt-2 mb-4">
              Communicate with sellers or service providers directly through our
              platform. Get your questions answered in real-time.
            </p>
            <button className="border-2 border-[#184172] text-[#184172] ml-2 rounded-[5px]  w-[140px] h-[44px] text-[15px] font-poppins font-semibold ">
              Chat Now
            </button>
            <button className="border-1 border-[#BC2B2A] bg-[#BC2B2A] ml-2 rounded-[5px] w-[216px] h-[44px] text-[15px] font-poppins font-semibold text-white ">
              Start Conversation{" "}
            </button>

            <div className="flex items-center mt-6  space-x-2">
            <div className="relative ml-10">
              <img src="a1.png" className="  absolute w-[50px] h-[50px] -left-8" />
              <img src="a2.png" className="absolute w-[48px] h-[48px] -left-4" />
              <img src="a3.png" className="relative w-[48px] h-[48px]" />
            </div>
            <p className="font-poppins font-normal text-[18px] text-[#8d8d8d]">
            Experience seamless communication today.<br></br> Connect, ask, and receive answers effortlessly.
            </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-poppins font-normal text-[18px] ml-6">
            Discover Services That Elevate Your Lifestyle
          </p>
          <p className="font-catamaran ml-6 font-bold text-[36px]">
            {" "}
            Browse Top Categories
          </p>
        </div>
        <div className="flex flex-wrap p-8">
          <div className="ml-14 ">
            <img src="m11.png" />
            <p className="font-poppins font-semibold text-[20px]">
              Fashion Design
            </p>
            <p className="font-poppins font-[500] text-[15px] text-[#949494]">
              {" "}
             Express Yourself Through Style
            </p>
          </div>
          <div className="ml-4">
            <img src="m2.png" />
            <p className="font-poppins font-semibold text-[20px]">
              Graphics Design
            </p>
            <p className="font-poppins font-[500] text-[15px] text-[#949494]">
              {" "}
              Visualize Your Brand
            </p>
          </div>
          <div className="ml-4">
            <img src="m22.png" />
            <p className="font-poppins font-semibold text-[20px]">
              Digital Marketing
            </p>
            <p className="font-poppins font-[500] text-[15px] text-[#949494]">
              Expand Your Reach
            </p>
          </div>
        </div>
        <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg-[#EFCCCC] flex flex-row m-auto">
          <img src="m4.png"></img>
          <div className="mt-10">
            <h4 className="font-catamaran font-bold text-[36px]">
              Your Catalog Showcase
            </h4>
            <p className="font-poppins font-normal text-[18px] mt-2 mb-4">
              Highlight all your services in a personalized catalog. Let customers browse your unique offerings at a glance.
            </p>
            <button className="border-2 border-[#1D4E89] text-[#1D4E89]  ml-2 rounded-[6px] w-[136px] h-[44px] text-[16px] font-poppins font-semibold">
              View Catalog{" "}
            </button>
            <button className="border-1 border-[#BC2B2A] bg-[#BC2B2A] ml-2 rounded-[6px] w-[151px] h-[44px] text-[18px] font-poppins font-semibold text-white">
              Create Yours
            </button>

            <div className="flex items-center mt-6  space-x-2">
            <div className="relative ml-10">
              <img src="a1.png" className="  absolute w-[48px] h-[48px] -left-8" />
              <img src="a2.png" className="absolute w-[48px] h-[48px] -left-4" />
              <img src="a3.png" className="relative w-[48px] h-[48px]" />
            </div>
            <p className="font-poppins font-normal text-[18px] text-[#8d8d8d]">
            Build your brand with a comprehensive <br></br>and attractive catalog.
                Show the world <br></br>what you've got!
            </p>
            </div>

           
          </div>
        </div>
        <div className="mt-8">
          <p className="font-poppins font-normal text-[18px] ml-6">
            Your One-Stop Marketplace for Proffesional Services!
          </p>
          <p className="font-catamaran ml-6 font-bold text-[36px]">
            {" "}
            Our Featured Services
          </p>
        </div>
        <div className="flex mb-8">
          <div className="ml-8">
            <img src="m6.png" className="rounded-[12px]" />
            <p className="font-poppins font-semibold text-[20px]">
              Content Writing
            </p>
            <p className="font-poppins font-[500] text-[15px] text-[#949494]">
              Craft Your Message
            </p>
          </div>
          <div>
            <div className="ml-8">
              <img src="m9.png" className="rounded-[12px]" />
              <p className="font-poppins font-semibold text-[20px]">
                SEO Optimization
              </p>
              <p className="font-poppins font-[500] text-[15px] text-[#949494]">
                Rank Higher in Search
              </p>
            </div>
            <div className="ml-8">
              <img src="m8.png" className="rounded-[12px]" />
              <p className="font-poppins font-semibold text-[20px]">
                App Development
              </p>
              <p className="font-poppins font-[500] text-[15px] text-[#949494]">
                Innovate with Apps
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[652px] p-[64px] gap-[64px] bg-[#EFCCCC] flex flex-row m-auto mb-[120px]">
          <div>
            <h4 className="font-catamaran font-bold text-[36px]">
              Ad Performance Analytics
            </h4>
            <p className="font-poppins font-normal text-[18px] mt-2 mb-4">
              Track your success and optimize your strategy with our detailed ad
              performance analytics. Understand your audience bette..
            </p>
            <button className="border-2 border-[#184172] ] ml-2 rounded-[5px] w-[164px] h-[44px] text-[18px] text-[#184172] font-poppins font-semibold">
              View Insights
            </button>
            <button className="border-1 border-[#BC2B2A] bg-[#BC2B2A] ml-2 rounded-[5px] w-[110px] h-[44px] text-[18px] font-poppins font-semibold text-white">
              Post Ad
            </button>


            <div className="flex items-center mt-6  space-x-2">
            <div className="relative ml-10">
              <img src="a1.png" className="  absolute w-[50px] h-[50px] -left-8" />
              <img src="a2.png" className="absolute w-[48px] h-[48px] -left-4" />
              <img src="a3.png" className="relative w-[48px] h-[48px]" />
            </div>
              <p className="font-poppins font-normal text-[18px] ml-2 text-justify">
                Empower your advertising efforts with <br></br> actionable data. See what
                works and <br></br>refine your approach for maximum impact.
          
             </p>
            </div>
          </div>
          <img src="mm.png"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
