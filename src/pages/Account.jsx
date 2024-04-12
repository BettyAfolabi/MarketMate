import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import Billing from "./Billing";

import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import Track from "./Track";

function Account() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <div className="flex justify-between w-5/6 mx-auto">
        <div className="flex">
          <p className="px-2 text-sm">Home</p>/
          <p className="px-2 text-terblue">My Account</p>
        </div>
        <h2>
          Welcome <span className="text-primaryred">Jane</span>
        </h2>
      </div>

      <div className="flex flex-row w-5/6 mx-auto my-4 h-full">
        <div className="basis-full lg:basis-1/4 flex flex-col font-poppins">
          <SideBar />
        </div>
        <div className="hidden lg:block lg:basis-3/4">
          <Routes>
            <Route path="/account" element={<Profile />} exact />
            <Route path="profile" element={<Profile />} />
            <Route path="billing-address" element={<Billing />} />
            <Route path="payment" element={<Payment />} />
            <Route path="track" element={<Track />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Account;
