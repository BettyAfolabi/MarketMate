import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NewsFeed() {
  return (
    <div>
      <NavBar />
      <div className="w-11/12 mx-auto my-2">
        <div className="flex flex-row font-poppins">
          <h1 className="font-semibold text-[26px] leading-[39px] basis-2/5">
            NewsFeed
          </h1>
          <div className="flex flex-row font-medium gap-[35px] text-base leading-6 basis-3/5">
            <h3>All</h3>
            <h3>Trending Now</h3>
          </div>
        </div>
        <h2 className="font-semibold text-[18px] leading-[27px] py-2">
          BEST OF THE WEEK
        </h2>
        <div className="flex">
          <div className="basis-3/5 flex flex-col ">
            <div className="flex text-base leading-6 gap-3 my-2 font-medium">
              <h3 className=" text-primaryred">
                Latest Trends in Mobile Devices
              </h3>
              <h3>.4 hours ago</h3>
            </div>
            <div className="my-2">
              <Link to="/techfeed">
                <img src="../newsfeed1.png" alt="techfeed image" />
              </Link>
              <div className="flex justify-center items-center gap-2 mt-1">
                <div className="flex flex-row gap-1 font-normal text-sm">
                  <p>Share</p>
                  <i className="bx bx-xs bx-share-alt pt-0.5"></i>
                </div>
                <div className="flex flex-row gap-1 font-normal text-sm">
                  <p>Like</p>
                  <i className="bx bx-xs bxs-heart text-[#C34040] pt-0.5"></i>
                </div>
                <div className="flex flex-row gap-1 font-normal text-sm">
                  <p>Comment</p>
                  <i className="bx bx-xs bx-message-dots pt-0.5"></i>
                </div>
              </div>
            </div>
            <div className="my-2">
              <img src="../newsfeed2.png" alt="market trend img" />
              <div className="flex justify-center items-center gap-2 mt-1">
                <div className="flex flex-row gap-1 font-normal text-sm">
                  <p>Share</p>
                  <i className="bx bx-xs bx-share-alt pt-0.5"></i>
                </div>
                <div className="flex flex-row gap-1 font-normal text-sm">
                  <p>Like</p>
                  <i className="bx bx-xs bxs-heart text-[#C34040] pt-0.5"></i>
                </div>
                <div className="flex flex-row gap-1 font-normal text-sm">
                  <p>Comment</p>
                  <i className="bx bx-xs bx-message-dots pt-0.5"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/5">
            <div className="flex flex-row justify-between my-3">
              <h3>Recommended for you</h3>
              <h3>
                View all <i className="bx bx-xs bx-chevron-right pl-1"></i>
              </h3>
            </div>
            <div className="my-2 space-y-4">
              <img src="../newsfeed3.png" alt="software updates img" />
              <img src="../newsfeed4.png" alt="influencer pic" />
              <img src="../newsfeed5.png" alt="mergers pic" />
            </div>
          </div>
        </div>
        <Link className="border border-mred rounded-[37px] px-[20px] py-[10px] font-bold text-sm text-mred mx-auto text-center my-4 w-[120px] flex justify-center items-center">
          Load More
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NewsFeed;
