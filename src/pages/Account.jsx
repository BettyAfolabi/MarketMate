import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import Billing from "./Billing";
import { Route, Routes, Link } from "react-router-dom";
import Payment from "./Payment";
import Track from "./Track";
import OngoingOrders from "./OngoingOrders";
import ReturnedOrders from "./ReturnedOrders";
import CatalogProfile from "./CatalogProfile";


function Account() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <div className="flex justify-between w-5/6 mx-auto">
        <div className="hidden lg:flex">
          <p className="px-2 text-sm">Home</p>/
          <p className="px-2 text-terblue">My Account</p>
        </div>
        <h2>
          Welcome <span className="text-primaryred">Jane</span>
        </h2>
      </div>

      <div className="flex flex-row w-screen lg:w-5/6 mx-auto my-4 h-full">
        <div className="basis-full lg:basis-1/4 flex flex-col font-poppins">
          <SideBar />
        </div>
        <div className="hidden lg:block lg:basis-3/4">
          <div className="lg:hidden w-5/6 mx-auto">
            <Link
              to="/account"
              onClick={() => setSidebarVisible(true)}
              className="flex gap-3"
            >
              <i className="bx bx-sm bx-chevron-left"></i>
              <h3 className="text-primaryblue text-sm font-semibold">Back</h3>
            </Link>
          </div>
          <Routes>
            <Route exact path="/account" element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="billing-address" element={<Billing />} />
            <Route path="payment" element={<Payment />} />
            <Route path="track" element={<Track />} />
            <Route path="ongoing" element={<OngoingOrders />} />
            <Route path="returns" element={<ReturnedOrders />} />
            <Route path="catalog" element={<CatalogProfile />} />
           
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Account;
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import SideBar from "../components/SideBar";
// import Profile from "./Profile";
// import Billing from "./Billing";
// import Track from "./Track";
// import { Route, Routes, Link } from "react-router-dom";
// import { useState } from "react";
// import Payment from "./Payment";

// function Account() {
//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarVisible((prev) => !prev);
//   };

//   return (
//     <div className="w-full overflow-x-hidden">
//       <NavBar />
//       <div className="flex justify-between w-5/6 mx-auto">
//         <div className="hidden lg:flex">
//           <p className="px-2 text-sm">Home</p>/
//           <p className="px-2 text-terblue">My Account</p>
//         </div>
//         <h2>
//           Welcome <span className="text-primaryred">Jane</span>
//         </h2>
//       </div>

//       <div className="flex flex-row w-5/6 mx-auto my-4 h-full">
//         {/* Sidebar */}
//         <div
//           className={`${
//             isSidebarVisible ? "block" : "hidden"
//           } lg:block lg:basis-1/4 side`}
//         >
//           <SideBar onLinkClick={toggleSidebar} />
//         </div>
//         {/* Content area */}
//         <div className={`lg:block lg:basis-3/4 main min-w-[300px]`}>
//           {" "}
//           {/* Added min-width */}
//           <div className="lg:hidden w-5/6 mx-auto">
//             <Link
//               to="/account"
//               onClick={() => setSidebarVisible(true)}
//               className="flex gap-3"
//             >
//               <i className="bx bx-sm bx-chevron-left"></i>
//               <h3 className="text-primaryblue text-sm font-semibold">Back</h3>
//             </Link>
//           </div>
//           <Routes>
//             <Route path="/account" element={<Profile />} />
//             <Route path="/account/profile" element={<Profile />} />
//             <Route path="/account/billing-address" element={<Billing />} />
//             <Route path="/account/payment" element={<Payment />} />
//             <Route path="/account/track" element={<Track />} />
//           </Routes>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Account;
