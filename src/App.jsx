import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import ContactComponent from "./components/ScreenSizes/ContactComponent";
import ErrorPage from "./pages/ErrorPage";
import Account from "./pages/Account";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Services from "./pages/Services";
import NewsFeed from "./pages/NewsFeed";
import TechFeed from "./pages/TechFeed";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Wishlist from "./pages/WishlistProduct";
import Complete from "./pages/Complete";
import AboutComponent from "./components/ScreenSizes/AboutComponent";
import WishlistService from "./pages/WishlistService";
import ServicePage from "./pages/ServicePage";
import ReturnPolicy from "./pages/ReturnPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import './transitions.css'

const App = () => {
  const location = useLocation();
    const hideHeader = location.pathname.startsWith('/login') || location.pathname.startsWith('/signup')
  
    return (
    <div className="bg-white h-full">
       {!hideHeader && <NavBar />}
       <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicepage" element={<ServicePage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="/techfeed" element={<TechFeed />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/wishlistservice" element={<WishlistService />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/returnpolicy" element={<ReturnPolicy />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default App;
