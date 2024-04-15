const ReturnedOrders = () => {
  return (
    <div className="w-[465px] h-[671px] flex items-center justify-center flex-col p-10 m-auto">
      <div className="w-[465px] h-[366px]">
        <img src="../cart.png" alt="No Orders"></img>
      </div>
      <div>
        <h3 className="font-poppins font-medium text-[25px] text-[#000000] text-center m-2">
          No Orders to Display
        </h3>
        <p className="font-poppins font-normal text-[20px] text-[#000000] text-center">
          All your closed orders will be saved here{" "}
        </p>
        <button className="bg-[#920100] text-white w-[424px] h-[80px] font-poppins font-medium text-[28px] rounded-lg">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default ReturnedOrders;
