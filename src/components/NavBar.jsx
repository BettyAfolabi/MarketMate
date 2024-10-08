import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
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
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const logOutUser = async (e) => {
    e.preventDefault();
    await signOut(auth);
    navigate('/login');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();
          setName(userData.name); // Retrieve name from database
        } else {
          console.log("No data available for this user");
        }
      } else {
        setName(''); // Clear name if no user is logged in
      }
    });

    return unsubscribe; // Cleanup subscription on component unmount
  }, []);

  return (
    <div className="sticky top-0 w-screen z-10">
      <header className="hidden bg-darkred text-white w-full lg:flex  px-4 py-2 left-0  ">
        <div className="w-4/5 flex items-center mx-auto justify-between">
          <div className="flex items-center space-x-4">
            <p className="flex items-center">
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
          <div className="flex">
            <Menu />
            <img src="../Logo.png" alt="Market mate Logo" />
            <Link
              to="/"
              className="font-lobstertwo text-primaryred text-3xl md:text-4xl"
            >
              MarketMate
            </Link>
          </div>
          <div className="hidden md:flex flex-row space-x-3 text-gray font-poppins text-xs font-bold">
            <Link to="/" className="hover:text-primaryred pt-0.5">
              Home
            </Link>
            <Link to="/about" className="hover:text-primaryred pt-0.5">
              About
            </Link>
            <Link to="/contact" className="hover:text-primaryred pt-0.5">
              Contact
            </Link>
            <Link to="/services" className="hover:text-primaryred pt-0.5">
              Services
            </Link>
            <Link to="/newsfeed" className="hover:text-primaryred pt-0.5">
              NewsFeed
            </Link>
          </div>
          <div className="flex flex-row basis-5/12 space-x-1 lg:space-x-3 justify-end text-gray font-poppins text-xs font-light">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-3 py-1 w-[200px] bg-[#E2E2E2] text-darkblue rounded-md border border-[#F5F5F5] focus:outline-none focus:border-primaryred"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="material-symbols-outlined">search</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-darkblue hover:text-primaryred lg:hidden">
              search
            </span>
            <Link to="/cart">
              <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
                shopping_cart
              </span>
            </Link>
            <Link to="/wishlist" className="hidden lg:block">
              <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
                favorite
              </span>
            </Link>
            <AccountList logOutUser={logOutUser} />

            <div className="hidden md:flex pt-0.5 flex-row text-secblue font-bold">
              {name ? (
                <h2>Welcome {name}</h2>
              ) : (
                <>
                  <Link to="/login" className="px-0.5 hover:text-primaryred">
                    Login
                  </Link>
                  /
                  <Link to="/signup" className="px-0.5 hover:text-primaryred">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
