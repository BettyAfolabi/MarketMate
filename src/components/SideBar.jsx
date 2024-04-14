import { useLocation, Link } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  return (
    <div>
      <div className="pt-6 gap-0.5">
        <div className="relative w-[82px] h-[82px] mx-3">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="random user"
            className="h-20 w-20 rounded-full"
          />
          <button className="absolute bottom-0 right-0">
            <img src="../Icon Box.png" alt="camera icon" className="h-4 w-4" />
          </button>
        </div>
        <h3 className="text-[20px] font-semibold py-2">
          {name || "Jane Amokoko"}
        </h3>
      </div>
      <div className="py-[10px] gap-2 text-base font-normal text-lightblack">
        <div className="mb-2">
          <h3 className="text-terblue font-medium pb-0.5">Manage my Account</h3>
          <ul className="px-3 space-y-1">
            <li>
              <Link
                className="hover:text-primaryred focus:text-primaryred"
                to="profile"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="billing-address"
                className="hover:text-primaryred focus:text-primaryred"
              >
                Billing Address
              </Link>
            </li>
            <li>
              <Link
                to="payment"
                className="hover:text-primaryred focus:text-primaryred"
              >
                Payment Details
              </Link>
            </li>
          </ul>
          <div className="my-2">
            <h3 className="text-terblue font-medium pb-0.5">My Orders</h3>
            <ul className="px-3 space-y-0.5">
              <li>
                <Link 
                to="ongoing"
                 className="hover:text-primaryred focus:text-primaryred">
                  Ongoing/Delivered
                </Link>
              </li>
              <li>
              <Link 
                to="returns"
                 className="hover:text-primaryred focus:text-primaryred">
                Returns/Cancellations
                </Link>
              </li>
              <li>
                <Link
                  to="track"
                  className="hover:text-primaryred focus:text-primaryred"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h3 className="text-terblue font-medium pb-0.5">My Store</h3>
            <ul className="px-3 space-y-0.5">
              <li>
                <button className="hover:text-primaryred focus:text-primaryred">
                  Catalog
                </button>
              </li>
              <li>
                <button className="hover:text-primaryred focus:text-primaryred">
                  My Advert
                </button>
              </li>
              <li>
                <button className="hover:text-primaryred focus:text-primaryred">
                  Performance
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button className="text-red-400 text-left hover:text-mred">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default SideBar;
// import { useLocation, Link } from "react-router-dom";

// function SideBar({ onLinkClick }) {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const name = searchParams.get("name");

//   return (
//     <div>
//       <div className="pt-3 lg:pt-6 gap-0.5">
//         <div className="relative w-[82px] h-[82px] mx-auto lg:mx-3 ">
//           <img
//             src="https://randomuser.me/api/portraits/women/79.jpg"
//             alt="random user"
//             className="h-20 w-20 rounded-full"
//           />
//           <button className="absolute bottom-0 right-0">
//             <img src="../Icon Box.png" alt="camera icon" className="h-4 w-4" />
//           </button>
//         </div>
//         <h3 className="text-[20px] font-semibold py-2 text-center lg:text-start">
//           {name || "Jane Amokoko"}
//         </h3>
//       </div>
//       <div className="py-[10px] gap-2 text-base font-normal text-lightblack">
//         <div className="mb-2">
//           <h3 className="text-terblue text-[15px] font-medium py-2 px-2 lg:py-1 lg:px-0 bg-lightgray lg:bg-inherit">
//             Manage my Account
//           </h3>
//           <ul className="px-3 space-y-1">
//             <li>
//               <Link
//                 className="hover:text-primaryred focus:text-primaryred"
//                 to="profile"
//                 onClick={onLinkClick}
//               >
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="billing-address"
//                 className="hover:text-primaryred focus:text-primaryred"
//                 onClick={onLinkClick}
//               >
//                 Billing Address
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="payment"
//                 className="hover:text-primaryred focus:text-primaryred"
//                 onClick={onLinkClick}
//               >
//                 Payment Details
//               </Link>
//             </li>
//           </ul>
//           <div className="my-2">
//             <h3 className="text-terblue text-[15px] font-medium py-2 px-2 lg:py-1 lg:px-0 bg-lightgray lg:bg-inherit">
//               My Orders
//             </h3>
//             <ul className="px-3 space-y-0.5">
//               <li>
//                 <button className="hover:text-primaryred focus:text-primaryred">
//                   Ongoing/Delivered
//                 </button>
//               </li>
//               <li>
//                 <button className="hover:text-primaryred focus:text-primaryred">
//                   Returns/Cancellations
//                 </button>
//               </li>
//               <li>
//                 <Link
//                   to="track"
//                   className="hover:text-primaryred focus:text-primaryred"
//                   onClick={onLinkClick}
//                 >
//                   Track Order
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="my-2">
//             <h3 className="text-terblue text-[15px] font-medium py-2 px-2 lg:py-1 lg:px-0 bg-lightgray lg:bg-inherit">
//               My Store
//             </h3>
//             <ul className="px-3 space-y-0.5">
//               <li>
//                 <button className="hover:text-primaryred focus:text-primaryred">
//                   Catalog
//                 </button>
//               </li>
//               <li>
//                 <button className="hover:text-primaryred focus:text-primaryred">
//                   My Advert
//                 </button>
//               </li>
//               <li>
//                 <button className="hover:text-primaryred focus:text-primaryred">
//                   Performance
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <button className="text-red-400 text-left hover:text-mred px-2 lg:px-0">
//           Delete Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SideBar;
