import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, children, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center px-3">
      <div className="relative p-5 bg-white w-full max-w-sm m-auto flex-col flex rounded-lg">
        <div>{children}</div>
        <span className="absolute top-0 right-0 p-4">     
          <button onClick={closeModal}>
            <IoClose className='h-5 w-5 text-red-500'/>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Modal;
