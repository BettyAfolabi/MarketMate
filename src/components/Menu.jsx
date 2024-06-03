import React, { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Popover>
        <Popover.Button
          className="md:hidden mr-1 relative focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bx bx-sm bx-menu-alt-right text-darkblue hover:text-primaryred focus:text-primaryred"></i>
        </Popover.Button>
        <Transition
          as={Fragment}
          show={isOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Popover.Panel className="absolute left-0 top-0">
            <div className="w-[250px] h-screen bg-primaryred text-white font-medium flex flex-col cursor-pointer py-[12px] px-1 font-poppins drop-shadow-sm">
              <i
                className="bx bx-x bx-md hover:text-gray self-end mr-3"
                onClick={() => setIsOpen(false)}
              ></i>
              <div className="flex mb-1 justify-center items-center my-4">
                <img
                  src="../logo2.png"
                  alt="Market mate Logo"
                  className="w-[32px] mr-1"
                />
                <h1 className="font-lobstertwo text-[20px]">MarketMate</h1>
              </div>
              <Link
                to="/"
                className="hover:text-gray py-1 border-b border-gray "
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-gray py-1 border-b border-gray "
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray py-1 border-b border-gray "
              >
                Contact
              </Link>

              <Link
                to="/newsfeed"
                className="hover:text-gray py-1 border-b border-gray "
              >
                NewsFeed
              </Link>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Menu;
