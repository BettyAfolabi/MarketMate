import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Popover>
        <Popover.Button className="md:hidden mr-1 relative focus:outline-none">
          <img
            src="../menu.png"
            alt="menu bar icon"
            className="hover:bg-primaryred"
          />
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
          <Popover.Panel className="w-screen h-screen z-10 absolute mt-1">
            <div className="w-full bg-white text-gray font-poppins text-sm font-bold flex flex-col py-[12px] px-1">
              <Link to="/home" className="hover:text-primaryred p-1">
                Home
              </Link>
              <Link to="/error" className="flex hover:text-primaryred p-1">
                <button>Shop</button>
                <span className="material-symbols-outlined">expand_more</span>
              </Link>
              <Link to="/about" className="hover:text-primaryred p-1">
                About
              </Link>
              <Link to="/contact" className="hover:text-primaryred p-1">
                Contact
              </Link>
              <Link className="hover:text-primaryred p-1">Pages</Link>
              <Link to="/newsfeed" className="hover:text-primaryred p-1">
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
