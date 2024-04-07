import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

import ContactComponent from "./components/ScreenSizes/ContactComponent";

const App = () => {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactComponent/>} />
      </Routes>
    </div>
  );
};

export default App;
