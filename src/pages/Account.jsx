import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import Billing from "./Billing";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Payment from "./Payment";
import Track from "./Track";
import OngoingOrders from "./OngoingOrders";
import ReturnedOrders from "./ReturnedOrders";
import CatalogProfile from "./CatalogProfile";
import Advert from "./Advert";

function Account() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(false);
  };

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
        <div
          className={`lg:block basis-full lg:basis-1/4 ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          <SideBar onLinkClick={toggleSidebar} />
          <Outlet />
        </div>
        <div
          className={`lg:block basis-full lg:basis-3/4 ${
            isSidebarVisible ? "hidden" : "block"
          }`}
        >
          <div className="lg:hidden w-5/6 mx-auto">
            <Link
              to="/account"
              onClick={() => setSidebarVisible(true)}
              className={`flex gap-3 ${isSidebarVisible ? "" : "block"}`}
            >
              <i className="bx bx-sm bx-chevron-left"></i>
              <h3 className="text-primaryblue text-sm font-semibold">Back</h3>
            </Link>
          </div>

          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="billing-address" element={<Billing />} />
            <Route path="payment" element={<Payment />} />
            <Route path="track/*" element={<Track />} />
            <Route path="ongoing" element={<OngoingOrders />} />
            <Route path="returns" element={<ReturnedOrders />} />
            <Route path="catalog" element={<CatalogProfile />} />
            <Route path="advert" element={<Advert />} />

            <Route index element={<Profile />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Account;
