import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

function TrackModal({ onClose, children, isOpen }) {
  if (!isOpen) return null;
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50  bg-black bg-opacity-50 flex justify-center items-center px-3">
      <div className="relative p-5 bg-white m-auto flex-col flex rounded-lg">
        <span className="absolute top-0 right-0 p-0.5">
          <button onClick={onClose}>
            <IoClose className="h-4 w-4 " />
          </button>
        </span>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default TrackModal;
