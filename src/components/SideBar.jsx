import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SideBar({ onLinkClick }) {
  

  return (
    <div>
      <div className="pt-3 lg:pt-6 gap-0.5">
        <div className="relative w-[82px] h-[82px] mx-auto lg:mx-3 ">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="random user"
            className="h-20 w-20 rounded-full absolute"
          />
          <label
            htmlFor="file-upload"
            className="absolute bottom-0 right-0 cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <img src="../Icon Box.png" alt="camera icon" className="h-4 w-4" />
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
        </div>
        <h2 className="text-[20px] font-semibold py-2 text-center lg:text-start">
          {"Jane Amokoko"}
        </h2>
      </div>
      <div className="py-[10px] gap-2 text-base font-normal text-lightblack">
        <div className="mb-2">
          <h3 className="text-terblue text-[15px] font-medium py-2 px-2 lg:py-1 lg:px-0 bg-lightgray lg:bg-inherit">
            Manage my Account
          </h3>
          <ul className="px-3 space-y-1">
            <li className="flex justify-between">
              <Link
                className="hover:text-primaryred focus:text-primaryred"
                to="profile"
                onClick={onLinkClick}
              >
                My Profile
              </Link>
              <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
            </li>
            <li className="flex justify-between">
              <Link
                to="billing-address"
                onClick={onLinkClick}
                className="hover:text-primaryred focus:text-primaryred"
              >
                Billing Address
              </Link>
              <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
            </li>
            <li className="flex justify-between">
              <Link
                to="payment"
                onClick={onLinkClick}
                className="hover:text-primaryred focus:text-primaryred"
              >
                Payment Details
              </Link>
              <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
            </li>
          </ul>
          <div className="my-2">
            <h3 className="text-terblue text-[15px] font-medium py-2 px-2 lg:py-1 lg:px-0 bg-lightgray lg:bg-inherit">
              My Orders
            </h3>
            <ul className="px-3 space-y-0.5">
              <li className="flex justify-between">
                <Link
                  to="ongoing"
                  onClick={onLinkClick}
                  className="hover:text-primaryred focus:text-primaryred"
                >
                  Ongoing/Delivered
                </Link>
                <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
              </li>
              <li className="flex justify-between">
                <Link
                  to="returns"
                  onClick={onLinkClick}
                  className="hover:text-primaryred focus:text-primaryred"
                >
                  Returns/Cancellations
                </Link>
                <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
              </li>
              <li className="flex justify-between">
                <Link
                  to="track"
                  onClick={onLinkClick}
                  className="hover:text-primaryred focus:text-primaryred"
                >
                  Track Order
                </Link>
                <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h3 className="text-terblue text-[15px] font-medium py-2 px-2 lg:py-1 lg:px-0 bg-lightgray lg:bg-inherit">
              My Store
            </h3>
            <ul className="px-3 space-y-0.5">
              <li className="flex justify-between">
                <Link
                  to="catalog"
                  onClick={onLinkClick}
                  className="hover:text-primaryred focus:text-primaryred"
                >
                  Catalog
                </Link>
                <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
              </li>
              <li className="flex justify-between">
                <Link
                  to="advert"
                  onClick={onLinkClick}
                  className="hover:text-primaryred focus:text-primaryred"
                >
                  My Advert
                </Link>
                <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
              </li>
              <li className="flex justify-between">
                <button className="hover:text-primaryred focus:text-primaryred">
                  Performance
                </button>
                <i className="bx bx-sm bx-chevron-right lg:hidden"></i>
              </li>
            </ul>
          </div>
        </div>
        <button className="text-red-400 text-left hover:text-mred px-2 lg:px-0">
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
