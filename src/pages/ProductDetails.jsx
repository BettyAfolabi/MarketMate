//import React from 'react'

export default function ProductDetails() {
  return (
    <div className="flex justify-between font-poppins">
      <section></section>
      <section>
        <h2 className="font-medium text-2xl py-2">Delivery & Returns</h2>
        <div className="font-medium">
            <h3 className="text-xl py-1">Delivery</h3>
            <p className="text-base py-1 text-deepgray">Estimated delivery time: 1-9 business days</p>
        </div>
        <div className="font-medium">
            <h3 className="text-xl py-1">Express Delivery Available</h3>
            <p className="text-base py-1 text-deepgray">Same day delivery: Order before 11AM and get it today <br />
                Next day delivery: Order after 11AM and get it tomorrow <br />
            Note: Subject to availability in your location</p>
        </div>
        <div className="font-medium">
            <h3 className="text-xl py-1"><i className='bx bx-revision pr-2'></i> Return Policy</h3>
            <p className="text-base py-1 text-deepgray">7 Day Return Guarantee <br />
            For more information on the return shipping options, go to <span className="text-primaryred">MarketMate Return Policy</span>            
            </p>
        </div>

        {/* Similar item */}
        <div className="flex flex-col justify-center items-center mt-7 text-center">
            <h2 className="text-sm font-semibold">Similar Items You May Love</h2>
            <img src="/similarbag.png" alt="image of related item" />
            <p className="font-medium py-1">Designer Leather Purse- Nude</p>
            <div className="flex gap-2">
                <p className="text-xs">N20,000</p>
                <p className="text-gray line-through pt-0.5 text-[8.5px]">N23,500</p>
            </div>
            <p className="text-mred text-[7.25px] font-normal py-0.5">You save N3500</p>
            <div className="flex gap-1">
                <i className='bx bx-sm bxs-star text-[#EDB310]'></i>
                <i className='bx bx-sm bxs-star text-[#EDB310]'></i>
                <i className='bx bx-sm bxs-star text-[#EDB310]'></i>
                <i className='bx bx-sm bxs-star text-[#EDB310]'></i>
                <i className='bx bx-sm bxs-star-half'></i>
                <p className="text-gray">5,23,456</p>
            </div>
            <button className="text-mred border border-mred font-bold text-sm p-3 rounded-md self-center transition-all ease-in-out duration-300 transform hover:scale-105">See More</button>
        </div>
      </section>
    </div>
  )
}
