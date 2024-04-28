import React from "react";
import AdvertCard from "../components/AdvertCard";

function Advert() {
  return (
    <div>
      <div className="flex justify-end my-2">
        <div className="flex self-center font-semibold leading-[23.4px] mr-2">
          <p className="text-base pr-0.5">Sort by</p>
          <i class="bx bx-sm bx-chevron-down"></i>
        </div>
        <div className="flex border border-[#E8ECEF] gap-x-1">
          <i className="bx bx-md bxs-grid border-r border-[#E8ECEF] text-[#6C7275]"></i>
          <i className="bx bx-md bxs-grid-alt bg-[#F3F5F7] border-r border-[#E8ECEF]"></i>
          <img
            src="/Toolbar.png"
            alt="vertical toolbar"
            className="border-r border-[#E8ECEF] pr-0.5"
          />
          <img src="/ToolbarB.png" alt="horiontal toolbar" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 my-10 justify-center self-center">
        <AdvertCard
          imageSrc="/knit.png"
          productName="Knitted Wears"
          productType="Service"
          productPrice="#10000"
          viewsCount="205,509"
        />
        <AdvertCard
          imageSrc="/bubu.png"
          productName="Dress Making (Bubu Gowns}
            Easter Promo!!"
          productType="Product"
          productPrice="#15000"
          viewsCount="236,568"
        />
        <AdvertCard
          imageSrc="/bubu.png"
          productName="Dress Making (Bubu Gowns}
            Easter Promo!!"
          productType="Product"
          productPrice="#15000"
          viewsCount="236,568"
        />
        <AdvertCard
          imageSrc="/silkdress.png"
          productName="Silk Sleeveless Dress (Luxury)"
          productType="Product"
          productPrice="#35000"
          viewsCount="301,868"
        />
        <AdvertCard
          imageSrc="/bubu.png"
          productName="Dress Making (Bubu Gowns}
            Easter Promo!!"
          productType="Product"
          productPrice="#15000"
          viewsCount="236,568"
        />
        <AdvertCard
          imageSrc="/bubu.png"
          productName="Dress Making (Bubu Gowns}
            Easter Promo!!"
          productType="Product"
          productPrice="#15000"
          viewsCount="236,568"
        />
      </div>
      <div className="flex justify-center items-center my-3">
        <p className="text-secblue text-[22px] leading-5 font-normal">
          Publish New Ad
        </p>
      </div>
    </div>
  );
}

export default Advert;
