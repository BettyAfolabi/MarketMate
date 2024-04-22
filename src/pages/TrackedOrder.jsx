import React, { useState } from "react";
import TrackModal from "../components/TrackModal";
import Review from "./Review";
import Track from "./Track";

function TrackedOrder() {
  const [showModal, setShowModal] = useState(false);
  const [isTracking, setIsTracking] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleBack = (data) => {
    console.log("submitted", data);
    setIsTracking(true);
  };
  if (isTracking) {
    return <Track />;
  }

  return (
    <div className=" p-2 font-poppins text-[#191C1F] shadow-md px-4 pl-6 px-auto py-4 mt-5 flex flex-col">
      <div className="flex justify-between mb-2 border-b border-[lightgray] pb-2">
        <button onClick={handleBack} className="flex gap-3">
          <i className="bx bx-sm bx-chevron-left"></i>
          <h3 className="text-primaryblue text-sm font-semibold">Back</h3>
        </button>
        <button className="flex" onClick={handleClick}>
          <p className="text-secblue text-sm">Leave a Rating</p>
          <i class="bx bx-plus"></i>
        </button>
        <TrackModal isOpen={showModal} onClose={handleClose}>
          <Review />
        </TrackModal>
      </div>
      <div className="border border-[#D2DCE7] p-2 flex justify-between my-2">
        <div>
          <h2 className="text-[20px] text-[#2A2A2A] font-normal leading-[28px] pb-0.5">
            #9645690261
          </h2>
          <div className="flex gap-0.5 text-sm text-[#8D8D8D]">
            <h3>2 Products</h3>
            <h3>. Order Placed in 13 April 2024+ at 7:32 PM</h3>
          </div>
        </div>
        <h2 className="text-[28px] font-semibold leading-8">#41597</h2>
      </div>
      <div className="mb-3 pb-2 border-b border-[lightgray]">
        <h3 className="text-sm font-normal text-[#8D8D8D] pb-3">
          Order expected arrival
          <span className="text-[#191C1F]">30 April, 2024</span>
        </h3>
        <img src="/trckprogress.png" alt="progress" />
      </div>
      <div className="font-normal text-sm space-y-2">
        <h2 className="font-medium text-[18px]">Order Activity</h2>
        <div className="flex gap-2">
          <img src="/trackIcon_1.png" alt="delivered icon" />
          <div>
            <h3>
              Your order has been delivered. Thank you for shopping at
              MarketMate!
            </h3>
            <h3 className="text-[#8D8D8D] pt-1">23 April, 2021 at 7:32 PM</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="/trackIcon_2.png" alt="delivery man icon" />
          <div>
            <h3>
              Your order has been delivered. Thank you for shopping at
              MarketMate!
            </h3>
            <h3 className="text-[#8D8D8D] pt-1">23 April, 2021 at 7:32 PM</h3>
          </div>
        </div>

        <div className="flex gap-2">
          <img src="/trackIcon_3.png" alt="station icon" />
          <div>
            <h3>Your order has reached at local delivery station</h3>
            <h3 className="text-[#8D8D8D] pt-1">18 April, 2021 at 7:32 PM</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="../trackIcon_4.png" alt="packing icon" />
          <div>
            <h3>Your order is being prepared for delivery.</h3>
            <h3 className="text-[#8D8D8D] pt-1">15 April, 2021 at 7:32 PM</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="../trackIcon_5.png" alt="verified icon" />
          <div>
            <h3>Your order is successfully verified.</h3>
            <h3 className="text-[#8D8D8D] pt-1">15 April, 2021 at 7:32 PM</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="../trackIcon_6.png" alt="confirmed icon" />
          <div>
            <h3>Your order has been confirmed.</h3>
            <h3 className="text-[#8D8D8D] pt-1">13 April, 2021 at 7:32 PM</h3>
          </div>
        </div>
      </div>
      {/* Product Details */}
      <div className="my-3">
        <div className="flex bg-lightgray text-[#464646] font-medium text-xs leading-[18px] p-2">
          <h3 className="basis-2/5">PRODUCTS</h3>
          <div className="flex justify-between basis-3/5">
            <h3>PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>SUB-TOTAL</h3>
          </div>
        </div>
        <div className="flex p-2">
          <div className="basis-2/5 flex gap-2">
            <img src="../trackOil.png" alt="oil product" />
            <div>
              <h3 className="font-semibold text-xs text-secblue">
                KIngs Cooking Oil
              </h3>
              <h3 className="font-normal text-sm text-[#2A2A2A] leading-[20px]">
                Kings pure vegetable oil 1L for cooking soya....
              </h3>
            </div>
          </div>
          <div className="basis-3/5 flex pt-2 justify-between font-normal text-sm text-[#464646]">
            <h3>#8999</h3>
            <h3>x2</h3>
            <h3 className="font-medium text-[#2A2A2A]">#17998</h3>
          </div>
        </div>
        <div className="flex p-2">
          <div className="basis-2/5 flex gap-2">
            <img src="../trackShoe.png" alt="shoe product" />
            <div>
              <h3 className="font-semibold text-xs text-secblue">
                Nike Airmax React
              </h3>
              <h3 className="font-normal text-sm text-[#2A2A2A] leading-[20px]">
                Nike Airmax React Red Sports, Fashion size 43 ......
              </h3>
            </div>
          </div>
          <div className="basis-3/5 flex justify-between pt-2 font-normal text-sm text-[#464646]">
            <h3>#23599</h3>
            <h3>x1</h3>
            <h3 className="font-medium text-[#2A2A2A]">#23599</h3>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="block lg:flex justify-between my-3 gap-2">
        <div className="basis-1/3">
          <h2 className="font-semibold text-[18px] leading-6 pb-3">
            Billing Address
          </h2>
          <div className="font-normal text-sm space-y-2">
            <h3 className="font-medium text-[#2A2A2A]">Betty Ajalenkoko</h3>
            <p className="text-[#6A6A6A]">
              30 kingston road, off herbert macaulay road, yaba, lagos, Nigeria.
              101255.
            </p>
            <p className="text-[#2A2A2A]">
              Phone Number:
              <span className="text-[#6A6A6A]">+2348156987335</span>
            </p>
            <p className="text-[#2A2A2A]">
              Email:<span className="text-[#6A6A6A]">Coker2111@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <h2 className="font-semibold text-[18px] leading-6 pb-3">
            Shipping Address
          </h2>
          <div className="font-normal text-sm space-y-2">
            <h3 className="font-medium text-[#2A2A2A]">Betty Ajalenkoko</h3>
            <p className="text-[#6A6A6A]">
              30 kingston road, off herbert macaulay road, yaba, lagos, Nigeria.
              101255.
            </p>
            <p className="text-[#2A2A2A]">
              Phone Number:
              <span className="text-[#6A6A6A]">+2348156987335</span>
            </p>
            <p className="text-[#2A2A2A]">
              Email:<span className="text-[#6A6A6A]">Coker2111@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <h2 className="font-semibold text-[18px] leading-6 pb-3">
            Order Notes
          </h2>
          <p className="font-normal text-sm text-[#6A6A6A]">
            Please, the security will accept the delivery in my stead, please
            call me when you are on your way, so i can inform him. Thank you.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrackedOrder;
