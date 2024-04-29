import React from "react";
import More from "./More";
import PropTypes from "prop-types";

const AdvertCard = ({
  imageSrc,
  productName,
  productType,
  productPrice,
  viewsCount,
  width = "w-[220px]",
  height = "h-[400px]",
}) => (
  <div
    className={`font-poppins font-medium flex flex-col bg-white justify-center p-2 rounded-2xl ${height} ${width}`}
  >
    <div>
      <img src={imageSrc} alt={productName} className="w-full" />
    </div>

    <h2 className="text-[10px] mt-1 leading-[12px] p-1 text-darkblue bg-[rgb(239,204,204)] self-start">
      {productType}
    </h2>
    <h3 className="leading-5 text-[14px] my-1 text-[#1D2026] self-start">
      {productName}
    </h3>
    <div className="flex mt-1 mb-2 justify-between px-1">
      <p className="text-[12.6px] leading-[18px] text-[#4E5566]">⭐4.6</p>
      <div className="flex gap-0.2">
        <i className="bx bx-show text-notactive"></i>
        <p className="text-[#4E5566] text-[12.6px] leading-[18px]">
          {viewsCount} <span className="text-[#8C94A3] font-normal">views</span>
        </p>
      </div>
    </div>
    <div className="flex justify-between">
      <p className="text-secblue text-[16.2px] leading-[22px] font-semibold">
        {productPrice}
      </p>
      <More />
    </div>
  </div>
);

AdvertCard.propTypes = {
  imageSrc: PropTypes.string,
  productName: PropTypes.string,
  productType: PropTypes.string,
  productPrice: PropTypes.string,
  more: PropTypes.string,
  review: PropTypes.string,
  viewsCount: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imgHeight: PropTypes.string,
};
export default AdvertCard;
