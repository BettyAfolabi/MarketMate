import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <div className="bg-white h-full">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/techfeed" element={<TechFeed />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
