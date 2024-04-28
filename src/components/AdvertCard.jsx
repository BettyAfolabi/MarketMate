import React from "react";
import More from "./More";
import PropTypes from "prop-types";

const AdvertCard = ({
  imageSrc,
  productName,
  productType,
  productPrice,
  viewsCount,
}) => {
  <div
    className={`mx-auto font-poppins font-medium flex flex-col bg-white justify-center items-center p-2 rounded-2xl ${height} ${width}`}
  >
    {showImage && (
      <div>
        <img
          src={imageSrc}
          alt={productName}
          className={`w-full ${imgHeight}`}
        />
      </div>
    )}

    <h2 className="text-[10px] leading-[12px] p-1 text-darkblue bg-[#EFCCCC] ">
      {productType}
    </h2>
    <h3 className="leading-5 text-[14px] my-1 text-[#1D2026]">{productName}</h3>
    <div className="flex gap-2 mt-1 mb-2 self-start">
      <p className="text-[12.6px] leading-[18px] text-[#4E5566]">⭐ 4.6</p>
      <div className="flex gap-1">
        <i class="bx bx-show"></i>
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
  </div>;
};

AdvertCard.propTypes = {
  imageSrc: PropTypes.string,
  productName: PropTypes.string,
  productType: PropTypes.string,
  productPrice: PropTypes.string,
  more: PropTypes.string,
  review: PropTypes.string,
  viewsCount: PropTypes.string,
};
export default AdvertCard;
