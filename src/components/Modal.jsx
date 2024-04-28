import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, children, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center px-3">
      <div className="relative p-5 bg-white w-full max-w-[550px] m-auto flex-col flex rounded-lg">
        <div>{children}</div>
        <span className="absolute top-0 right-0 p-1">     
          <button onClick={closeModal}>
            <IoClose className='h-4 w-4 text-[#5F6C72]'/>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Modal;
