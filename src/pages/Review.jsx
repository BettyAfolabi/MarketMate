import React from "react";
import { Link } from "react-router-dom";

function Review() {
  return (
    <div className="bg-white w-fit rounded border border-[#E4E7E9] p-3 font-poppins text-[21px] leading-7 text-[#191C1F] font-normal flex flex-col">
      <h2 className="font-semibold border-b border-[#E4E7E9] pb-2 mb-2">
        Write a review
      </h2>
      <h3>Rating</h3>
      <div className="flex gap-0.2 border border-[#E4E7E9] p-1 my-2">
        <i className="bx bx-star hover:bxs-star hover:text-yellow-400 focus:bxs-star focus:text-yellow-400"></i>
        <i className="bx bx-star hover:bxs-star hover:text-yellow-400 focus:bxs-star focus:text-yellow-400"></i>
        <i className="bx bx-star hover:bxs-star hover:text-yellow-400 focus:bxs-star focus:text-yellow-400"></i>
        <i className="bx bx-star hover:bxs-star hover:text-yellow-400 focus:bxs-star focus:text-yellow-400"></i>
        <i className="bx bx-star hover:bxs-star hover:text-yellow-400 focus:bxs-star focus:text-yellow-400"></i>
      </div>
      <h3>Feedback</h3>
      <input
        type="textarea"
        placeholder="Write down your feedback about our product & services"
        className="p-2 w-[400px] lg:w-[636px] h-[180px] border-2 border-[#E4E7E9] mb-2 mt-1 rounded-sm"
      />
      <Link
        to="trackorder"
        className="text-white bg-secblue py-2 px-5 my-3 rounded w-fit"
      >
        Publish Review
      </Link>
    </div>
  );
}

export default Review;
