import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import ContactComponent from "./components/ContactComponent";
import ErrorPage from "./pages/ErrorPage";
import Account from "./pages/Account";
const App = () => {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/account/*" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
