import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({
  imageSrc,
  productName,
  productDesc,
  productPrice,
  prevPrice,
  tag,
  review,
  reviewCount,
  showButton = true,
  showImage = true,
  symbol = true,
  width = "w-[270px] lg:w-[250px] sm:w-[220px]",
  imgWidth = "w-[200px] sm:w-[160px] ",
  imgHeight = "h-[200px]",
}) => (
  <div
    className={`font-poppins flex flex-col bg-white shadow justify-center items-center pt-3 p-2 rounded-2xl aspect-h-1 aspect-w-1 ${width} overflow-hidden xl:aspect-h-8 xl:aspect-w-7`}
  >
    {showImage && (
      <div className="flex ">
        <img
          src={imageSrc}
          alt={productName}
          className={`${imgWidth} ${imgHeight}`}
        />
        {symbol && (
          <span className="material-symbols-outlined hover:text-primaryred focus:text-primaryred pr-1 sm:pr-2">
            favorite
          </span>
        )}
      </div>
    )}

    <h2 className="text-base leading-[18px] pt-2">{productName}</h2>
    <h3 className="leading-4 text-[10px] py-1">{productDesc}</h3>
    <div className="flex gap-2 mt-1 mb-2 self-start">
      <p className="text-base leading-[18px] font-bold">{productPrice}</p>
      <p className="text-gray text-xs leading-3 line-through pt-0.5">
        {prevPrice}
      </p>
    </div>
    {tag && (
      <p className="text-xs text-gray self-start">
        Sold by<span className="text-secblue">{tag}</span>
      </p>
    )}
    <div className="flex gap-2 self-start">
      <p>{review}</p>
      <p className="text-[10px] text-[#A4A9B3] pt-0.5">{reviewCount}</p>
    </div>
    {showButton && (
      <Link
        to="/cart"
        className="border border-mred py-[15px] px-[40px] font-bold text-sm text-mred text-center hover:border-red-500 hover:text-red-500 rounded-md mt-3 mb-2"
      >
        Add to Cart
      </Link>
    )}
  </div>
);

Card.propTypes = {
  imageSrc: PropTypes.string,
  productName: PropTypes.string,
  productDesc: PropTypes.string,
  productPrice: PropTypes.string,
  prevPrice: PropTypes.string,
  tag: PropTypes.string,
  review: PropTypes.string,
  reviewCount: PropTypes.string,
  showButton: PropTypes.bool,
  showImage: PropTypes.bool,
  symbol: PropTypes.bool,
  width: PropTypes.string,
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
};
export default Card;
