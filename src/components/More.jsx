import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function More() {
  return (
    <div>
      <Popover>
        <Popover.Button className="relative focus:outline-none">
          <i className="bx bx-sm bx-dots-horizontal-rounded text-gray pr-2"></i>
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
          <Popover.Panel className=" z-2 absolute">
            <div className="w-[180px] bg-white text-notactive border border-lightgray font-normal py-[12px] font-poppins text-xs flex flex-col">
              <Link className="p-1 hover:bg-secblue hover:text-white">
                View Details
              </Link>
              <Link className="p-1 hover:bg-secblue hover:text-white">
                Edit Posting
              </Link>
              <Link className="p-1 hover:bg-secblue hover:text-white">
                Delete Posting
              </Link>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default More;
