import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.name) {
      errors.name = "Name is required";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }
    if (!formValues.phone) {
      errors.phone = "Phone number is required";
    }
    if (!formValues.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form is valid, submit the form");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="w-screen">
      <NavBar />

      <div className="min-h-screen">
        <div className="flex pt-14 ml-10 mt-10 pl-10">
          <button className="pr-2 font-bold">Login</button>/
          <button className="pl-2 font-bold">Register</button>
        </div>

        <div
          className="flex items-center h-[460px] justify-center space-x-4  rounded-md mx-auto mt-6"
          style={{
            width: "1000px",
            //  height: '100px',
            boxShadow: "0 1px 13px 0 rgba(0, 0, 0, 0.05)",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="flex space-x-2 ">
            <div className="bg-[#BC2B2A] rounded-full w-[40px] h-[40px] flex justify-center items-center ml-4">
              <img src="phone.png" alt="Write to us" className="w-3/6 "></img>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold">Call To Us</h4>
              <p className="mt-2 mr-3">We are available 24/7 7 days a week.</p>
              <p className="mt-2 "> Phone: (234)800-55-003</p>
            </div>
          </div>

          <div className="h-10 w-px bg-[#000000]"></div>

          <div className="flex space-x-2 ">
            <div className="bg-[#BC2B2A] rounded-full w-[40px] h-[40px] flex justify-center items-center ml-4">
              <img
                src="envelope.png"
                alt="Write to us"
                className="w-3/6 "
              ></img>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold">Write To Us</h4>
              <p className="mt-2 mr-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="mt-2 "> Email: customercare@marketmate.com</p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col items-center">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-2">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-[235px] h-[50px] bg-[#F0F0F0] p-2 text-gray-700 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-[235px] h-[50px] bg-[#F0F0F0] p-2 text-gray-700 focus:outline-none focus:ring-gray-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-[235px] h-[50px] bg-[#F0F0F0] p-2 text-gray-700 focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleChange}
                className="w-[737px] h-[207px] bg-gray-200 items-center p-2 text-gray-700 bg-[#F0F0F0] focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#BC2B2A] text-white p-2 rounded w-[215px] h-[56px] gap-4"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
