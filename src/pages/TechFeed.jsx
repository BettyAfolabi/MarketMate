import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function TechFeed() {
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
        <h2 className="font-semibold text-[18px] leading-[27px] py-4 text-[#1D4E89]">
          BEST OF THE WEEK
        </h2>

        <div className="font-poppins my-2 flex flex-col">
          <div className="mx-auto mb-3">
            <img src="../newsfeed6.png" alt="techfeed piture" />
          </div>
          <h1 className="font-semibold text-center text-4xl p-[10px] mb-2 leading-[48px] text-wrap w-[640px] mx-auto">
            The Untold Truth About Blue Ray Technology, MD TechnogEst Reveals
          </h1>
          <div className="flex items-center justify-center w-1/2 mx-auto gap-5 my-2">
            <div className="flex gap-1">
              <h3 className="bg-[#1D4E89] rounded-full p-[10px] text-white text-base font-semibold">
                MT
              </h3>
              <h3 className="text-black p-[10px] font-medium text-base">
                MT News
              </h3>
            </div>

            <div className="flex gap-2">
              <h4 className="bg-black rounded-full w-[10px] h-[10px] mt-1"></h4>
              <h3 className="text-[#920100] text-base font-semibold">
                Following
              </h3>
            </div>
          </div>
          <div className="my-2 flex justify-between w-[640px] mx-auto items-center font-poppins text-sm font-normal">
            <h4>4 mins read </h4>
            <h4>5 hours ago</h4>
            <div className="flex gap-1">
              <i class="bx bx-show"></i>
              <h4>2K</h4>
            </div>
            <div className="flex gap-1">
              <i class="bx bx-message-dots"></i>
              <h4>55</h4>
            </div>
          </div>
          <div className="font-normal text-sm text-black p-[10px] mx-auto justify-center items-center">
            <p className="pb-2 text-start">
              Blue light lenses have become increasingly popular in our digital
              age. While there’s no proof they protect against certain eye
              conditions, there are well-documented benefits, particularly in
              regulating our sleep-wake cycle.
            </p>
            <p className="pb-2 text-start">
              Exposure to blue light, particularly during the evening, has been
              shown to disrupt melatonin production, the hormone responsible for
              regulating our sleep-wake cycle. This disruption can lead to
              difficulties falling asleep and achieving restful sleep.  Blue
              light lenses can help mitigate the impact of blue light by
              limiting how much reaches your eyes, supporting the natural
              release of melatonin and promoting a more restful and rejuvenating
              sleep.
            </p>
            <p className="pb-2 text-start">
              Blue light lenses can help signal to our bodies that it’s time to
              wind down and prepare for a restful sleep. This, in turn, can
              contribute to increased alertness and productivity during the day,
              as we give our bodies the essential rest and rejuvenation they
              require for optimal performance. So, incorporating blue light
              lenses into our routine can be a valuable step towards achieving a
              well-balanced and energized lifestyle.
            </p>
            <p className="pb-2 text-start">Depression & Anxiety Management</p>
            <p className="pb-2 text-start">
              Research has consistently indicated a connection between disrupted
              sleep and susceptibility to depression and anxiety. Blue light
              lenses can effectively regulate our sleep-wake cycle and
              indirectly support mental health. These lenses promote healthier
              sleep patterns and overall well-being. Blue light lenses may
              contribute to improved hormone regulation and alertness and
              provide benefits for managing depression and anxiety. But blue
              light lenses are not only helpful for those who spend time in
              front of digital devices—they can also be beneficial for outdoor
              use, such as when engaging in activities in direct sunlight. These
              lenses help reduce glare and make it easier to focus on your
              activity or enjoy the scenery around you.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6 w-1/2 mx-auto">
          <i className="bx bx-sm bx-share-alt pt-0.5"></i>
          <i className="bx bx-sm bxs-heart text-[#C34040] pt-0.5"></i>
          <i className="bx bx-sm bx-message-dots pt-0.5"></i>
        </div>
        <div className="flex justify-center items-center gap-3 my-5">
          <Link className="bg-mred text-white hover:bg-primaryred rounded-[37px] px-[36px] py-[15px] text-sm font-bold">
            More Like this
          </Link>
          <Link
            to="/newsfeed"
            className="bg-white text-mred border border-mred hover:bg-lightgray rounded-[37px] px-[36px] py-[15px] text-sm font-bold"
          >
            Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TechFeed;
