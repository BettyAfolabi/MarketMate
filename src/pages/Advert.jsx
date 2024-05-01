import { useState } from "react";
import { Link } from "react-router-dom";
import AdvertCard from "../components/AdvertCard";
import NewAd from "./NewAd";

function Advert() {
  const [isTracking, setIsTracking] = useState(false);

  if (isTracking) {
    return <NewAd />;
  }

  return (
    <div className="font-poppins shadow-md px-auto py-4 mt-5 flex flex-col">
      <div className="flex ml-2 lg:ml-0 lg:justify-end my-2">
        <div className="flex self-center font-semibold leading-[23.4px] mr-2">
          <p className="text-base pr-0.5">Sort by</p>
          <i className="bx bx-sm bx-chevron-down"></i>
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
      <div className="grid grid-cols-2 lg:grid-cols-4 my-2">
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
      <Link
        to="/NewAd"
        className="flex flex-col justify-center items-center mb-3"
      >
        <div className="bg-[#EFCCCC] flex justify-center items-center w-[200px] h-[150px]">
          <img src="/gala_add.png" alt="add more icon" />
        </div>

        <p className="text-secblue text-[22px] leading-5 font-normal pt-3">
          Publish New Ad
        </p>
      </Link>
    </div>
  );
}

export default Advert;
