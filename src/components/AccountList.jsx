//import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AccountList = ({ logOutUser }) => {
  return (
    <div>
      <Popover>
        <Popover.Button className="relative focus:outline-none bg-[#920100] hover:bg-primaryred rounded-full w-3 h-3">
          <i className='bx bx-user text-[#FFFFFF]' ></i>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className=" z-10 absolute right-8 mt-2 shadow-lg">
            <div className="w-[200px] lg:w-[230px] bg-white text-notactive font-normal py-[12px] px-1 font-poppins text-xs flex flex-col">
              <Link
                to="/account"
                className="p-1 hover:bg-secblue hover:text-white"
              >
                <i className="bx bx-xs bx-layer pr-2"></i>
                <span>My Account</span>
              </Link>
              <Link
                className="p-1 hover:bg-secblue hover:text-white"
                to="/account/ongoing"
              >
                <i className="bx bx-xs bx-store-alt pr-2"></i>Order History
              </Link>
              <Link className="p-1 hover:bg-secblue hover:text-white">
                <i className="bx bx-xs bx-message-rounded-detail pr-2"></i>Messages
              </Link>
              <Link
                className="p-1 hover:bg-secblue hover:text-white"
                to="/account/track"
              >
                <i className="bx bx-xs bx-map pr-2"></i>Track Order
              </Link>
              <Link
                to="/wishlist"
                className="p-1 hover:bg-secblue hover:text-white"
              >
                <i className="bx bx-xs bx-heart pr-2"></i>WishList
              </Link>
              <Link className="p-1 hover:bg-secblue hover:text-white flex flex-row gap-2">
                <i className="bx bx-xs bx-history bx-rotate-270"></i>
                <span>Browsing History</span>
              </Link>
              <Link className="p-1 hover:bg-secblue hover:text-white">
                <i className="bx bx-xs bx-cog pr-2"></i>Setting
              </Link>
              <button
                className="p-1 hover:bg-secblue hover:text-white flex flex-row gap-2"
                onClick={logOutUser}
              >
                <i className="bx bx-xs bx-log-out bx-flip-horizontal"></i>
                <span>Log out</span>
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
};


export default AccountList;
