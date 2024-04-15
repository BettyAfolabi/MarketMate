<<<<<<< HEAD
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
=======


const ReturnedOrders = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full px-10"> 
    <div className="flex flex-col items-center justify-center w-full max-w-[465px] h-[671px] "> 
    <div className="w-[465px] h-[366px]"> 
      <img src="../cart.png" alt="No Orders"></img> 
    </div>
    <div>
      <h3 className="font-poppins font-medium text-[25px] text-[#000000] text-center m-2">No Orders to Display</h3>
      <p className="font-poppins font-normal text-[20px] text-[#000000] text-center">All your closed orders will be saved here </p>
      <button className="bg-[#920100] text-white w-[424px] h-[80px] font-poppins font-medium text-[28px] rounded-lg">Start Shopping</button>
    </div>
    </div>
    </div>
  )
}

export default ReturnedOrders
>>>>>>> 1c80afe0f67a5418a91e1cc3c3940af9e88011b7
