import React from "react";

function Payment() {
  return (
    <div className="font-poppins shadow-md px-4 pl-6 px-auto mt-5 h-[702px] flex flex-col">
      <h1 className="text-darkblue text-[25px] font-medium py-2 basis-1/6">
        Saved Cards
      </h1>
      <div className="flex gap-4 basis-2/6">
        <div className="basis-1/2">
          <img src="../CreditCard.png" alt="credit-card image" />
          <div className="flex justify-between mt-1">
            <h3 className="text-darkblue text-[22px]">Edit</h3>
            <h3 className="text-mred text-[22px]">Delete</h3>
          </div>
        </div>

        <div className="basis-1/2">
          <div className="h-[180px] bg-lightgray flex justify-center items-center rounded-md">
            <button>
              <img src="../gala_add.png" alt="" />
            </button>
          </div>
          <h3 className="text-darkblue text-[22px] text-center mt-1">
            Add New Card
          </h3>
        </div>
      </div>
      <div className="flex flex-row gap-3 justify-end basis-3/6 items-end">
        <button className="text-darkblue text-base hover:text-secblue my-4">
          Cancel
        </button>
        <button className="bg-mred text-white p-2 hover:bg-mred px-4 my-2 py-2">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Payment;
