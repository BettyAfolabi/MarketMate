import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeCarousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    spaceBetween: 10,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:container lg:mx-auto p-4 my-6 sm:mx-3">
      <Slider {...settings}>
        <div className=" hidden lg:block mr-1">
          <img src="../Featured.png" alt="featured img" />
        </div>
        <Card
          height="h-[332px]"
          imageSrc="../iphone.png"
          productName="Apple iPhone 15 Pro 512GB Blue Titanium"
          productPrice="₦1,856,800"
          prevPrice="₦1,956,800"
          showButton={false}
        />
        <Card
          height="h-[332px]"
          imageSrc="../nike.png"
          productName=" Nike Sneakers"
          productPrice="₦39,000"
          prevPrice="₦42,000"
          showButton={false}
        />
        <Card
          height="h-[332px]"
          imageSrc="../PC.png"
          productName="HP ZBook Firefly 14 inch G10 A Mobile Workstation"
          productPrice="₦2,350,499"
          prevPrice="₦2400000"
          showButton={false}
        />
        <div className="hidden lg:block mr-1">
          <img src="../Featured.png" alt="featured img" />
        </div>
        <Card
          height="h-[332px]"
          imageSrc="../iphone.png"
          productName="Apple iPhone 15 Pro 512GB Blue Titanium"
          productPrice="₦1,856,800"
          prevPrice="₦1,956,800"
          showButton={false}
        />
        <Card
          height="h-[332px]"
          imageSrc="../nike.png"
          productName=" Nike Sneakers"
          productPrice="₦39,000"
          prevPrice="₦42,000"
          showButton={false}
        />
        <Card
          height="h-[332px]"
          imageSrc="../PC.png"
          productName="HP ZBook Firefly 14 inch G10 A Mobile Workstation"
          productPrice="₦2,350,499"
          prevPrice="₦2400000"
          showButton={false}
        />
        <div className=" hidden lg:block mr-1">
          <img src="../Featured.png" alt="featured img" />
        </div>

        <Card
          height="h-[332px]"
          imageSrc="../iphone.png"
          productName="Apple iPhone 15 Pro 512GB Blue Titanium"
          productPrice="₦1,856,800"
          prevPrice="₦1,956,800"
          showButton={false}
        />
        <Card
          height="h-[332px]"
          imageSrc="../nike.png"
          productName=" Nike Sneakers"
          productPrice="₦39,000"
          prevPrice="₦42,000"
          showButton={false}
        />
        <Card
          height="h-[332px]"
          imageSrc="../PC.png"
          productName="HP ZBook Firefly 14 inch G10 A Mobile Workstation"
          productPrice="₦2,350,499"
          prevPrice="₦2400000"
          showButton={false}
        />
      </Slider>
    </div>
  );
}

export default HomeCarousel;
