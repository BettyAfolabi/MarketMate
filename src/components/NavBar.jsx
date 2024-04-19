import { Link } from "react-router-dom";
import {
  FaPhone,
  FaRegEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa6";
import AccountList from "./AccountList";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-screen">
      <header className="hidden bg-darkred text-white w-full lg:flex  px-4 py-2 left-0  ">
        <div className="w-4/5 flex items-center mx-auto justify-between">
          <div className="flex items-center space-x-4">
            <p className="flex items-center ">
              <FaPhone />
              (225) 555-0118
            </p>
            <p className="flex items-center">
              <FaRegEnvelope />
              info@marketmate.com
            </p>
          </div>

          <p className="flex-grow text-center">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="flex items-center space-x-2">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
            <p>Follow Us</p>
          </div>
        </div>
      </header>

      <nav className=" bg-white py-4 justify-center">
        <div className="w-11/12 flex items-center mx-auto justify-between">
          <div className="flex ">
            <Menu />
            <img src="../Logo.png" alt="Market mate Logo" />
            <h1 className="font-lobstertwo text-primaryred text-3xl md:text-4xl">
              MarketMate
            </h1>
          </div>
          <div className="hidden md:flex flex-row  space-x-3 text-gray font-poppins text-xs font-bold">
            <Link to="/home" className="hover:text-primaryred pt-0.5">
              Home
            </Link>
            <Link to="/error" className="flex hover:text-primaryred">
              <button>Shop</button>
              <span className="material-symbols-outlined">expand_more</span>
            </Link>
            <Link to="/about" className="hover:text-primaryred pt-0.5">
              About
            </Link>
            <Link to="/contact" className="hover:text-primaryred pt-0.5">
              Contact
            </Link>
            <button className="hover:text-primaryred">Pages</button>
            <Link to="/newsfeed" className="hover:text-primaryred pt-0.5">
              NewsFeed
            </Link>
          </div>
          <div className="flex flex-row basis-5/12 space-x-3 justify-end text-gray font-poppins text-xs font-light">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-3 py-1 w-[200px] bg-[#E2E2E2] text-primaryblue rounded-md border border-[#F5F5F5] focus:outline-none focus:border-primaryred"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="material-symbols-outlined">search</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-primaryblue hover:text-primaryred">
              shopping_cart
            </span>
            <span className="material-symbols-outlined text-primaryblue hover:text-primaryred">
              favorite
            </span>
            <AccountList />

            <div className="hidden md:flex pt-0.5 flex-row text-secblue font-bold">
              <Link to="/login" className="px-0.5 hover:text-primaryred">
                Login
              </Link>
              /
              <Link to="/" className="px-0.5 hover:text-primaryred">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
