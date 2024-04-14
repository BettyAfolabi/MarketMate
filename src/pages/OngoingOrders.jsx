
  
const OngoingOrders = () => {
  return (
    <div>
   
    <div className="flex flex-col items-center justify-center flex-1 w-full px-10"> 
    <div className="flex flex-col items-center justify-center w-full max-w-[465px] h-[671px] "> 
  <div className="w-[465px] h-[366px]">  
    <img src="../cart.png" alt="Saved Orders"/> 
  </div>
  <div>
    <h3 className="font-poppins font-medium text-[25px] text-[#000000] text-center m-2">No Orders have been placed yet</h3>
    <p className="font-poppins font-normal text-[20px] text-[#000000] text-center">All your orders will be saved here for you to access their state</p>
    <button className="bg-[#920100] text-white w-[424px] h-[80px] font-poppins font-medium text-[28px] rounded-lg hover:bg-primaryred hover:text-white">Continue Shopping</button>
  </div>
  </div>
  </div>
  </div>

  )
}

export default OngoingOrders
