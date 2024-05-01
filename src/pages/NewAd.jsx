import React, { useState } from "react";
import Advert from "./Advert";

function NewAd() {
  const [isTracking, setIsTracking] = useState(false);

  const handleBack = (data) => {
    console.log("submitted", data);
    setIsTracking(true);
  };
  if (isTracking) {
    return <Advert />;
  }

  return (
    <div>
      <div className="my-1">
        <button onClick={handleBack} className="flex gap-3">
          <i className="bx bx-sm bx-chevron-left"></i>
          <h3 className="text-primaryblue text-sm font-semibold">Back</h3>
        </button>
      </div>
      <div className="flex font-medium text-base leading-[21px] border-b border-primaryred pb-2 justify-between">
        <div className="flex">
          <i className="bx text-darkblue pr-1 bxs-layer"></i>
          <p className="text-[#1D2026]">Basic Information</p>
        </div>
        <div className="flex">
          <i className="bx text-darkblue pr-1 bx-slideshow"></i>
          <p className="text-[#6E7485]">Files</p>
        </div>
        <div className="flex">
          <i className="bx text-darkblue pr-1 bx-play-circle"></i>
          <p className="text-[#6E7485]">Publish Ad</p>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-[24px]">Basic Information</h2>
        <div className="flex gap-3">
          <p className="text-secblue bg-[#EFCCCC80] p-3">Save</p>
          <p className="text-secblue">Save & Preview</p>
        </div>
      </div>
    </div>
  );
}

export default NewAd;
