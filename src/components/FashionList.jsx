import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function FashionList() {
  return (
    <div>
      <Popover>
        <Popover.Button className="flex justify-between p-1 hover:bg-lightgray relative w-full">
          <span>Fashion</span>
          <i className="bx bx-sm bx-chevron-right self-center"></i>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-x-1"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-1"
        >
          <Popover.Panel className="left-full absolute ml-2 h-full top-0">
            <div className=" w-[620px] flex flex-row justify-between p-3 bg-white">
              <div className=" px-1 font-poppins text-notactive text-sm flex flex-col">
                <h3 className="font-bold pb-2">WOMENS'S FASHION</h3>
                <Link className="py-1 hover:bg-lightgray">Shoes</Link>
                <Link className="py-1 hover:bg-lightgray">Clothing</Link>
                <Link className="py-1 hover:bg-lightgray">Accessories</Link>
                <Link className="py-1 hover:bg-lightgray">Jewelry</Link>
                <Link className="py-1 hover:bg-lightgray">Handbags</Link>
                <Link className="py-1 hover:bg-lightgray">
                  Underwear & Sleepwear
                </Link>
                <Link className="py-1 hover:bg-lightgray">Maternity</Link>
                <Link className="py-1 hover:bg-lightgray">Traditional</Link>
                <Link className="py-1 hover:bg-lightgray">
                  Beach & Swimwear
                </Link>
                <Link className="py-1 hover:bg-lightgray">Flats</Link>
              </div>
              <div className=" px-1 font-poppins text-notactive text-sm flex flex-col">
                <h3 className="font-bold pb-2">MENS'S FASHION</h3>
                <Link className="py-1 hover:bg-lightgray">Shoes</Link>
                <Link className="py-1 hover:bg-lightgray">Clothing</Link>
                <Link className="py-1 hover:bg-lightgray">Accessories</Link>
                <Link className="py-1 hover:bg-lightgray">
                  Underwear & Sleepwear
                </Link>
                <Link className="py-1 hover:bg-lightgray">
                  Traditional & Cultural
                </Link>
                <Link className="py-1 hover:bg-lightgray">T-Shirts</Link>
                <Link className="py-1 hover:bg-lightgray">Polo Shirts</Link>
                <Link className="py-1 hover:bg-lightgray">
                  Trousers & Chinos
                </Link>
                <Link className="py-1 hover:bg-lightgray">Sneakers</Link>
                <Link className="py-1 hover:bg-lightgray">Jerseys</Link>
              </div>
              <div className=" px-1 font-poppins text-notactive text-sm flex flex-col">
                <div className="flex flex-col mb-5">
                  <h3 className="font-bold pb-2">WATCHES</h3>
                  <Link className="py-1 hover:bg-lightgray">
                    Women's Watches
                  </Link>
                  <Link className="py-1 hover:bg-lightgray">Men's Watches</Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold pb-2">KID'S FASHION</h3>
                  <Link className="py-1 hover:bg-lightgray">Boy's Fashion</Link>
                  <Link className="py-1 hover:bg-lightgray">
                    Girl's Fashion
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default FashionList;
