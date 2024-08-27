import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import InputField from "../components/InputField";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/login");
    } catch (error) {
      if (error.code === 'auth/network-request-failed') {
        setMsg("Network error. Please check your connection and try again.");
      } else {
        setMsg("Sorry, something went wrong. Please try again later");
      }
      console.log(error);
    }
  };

  const onError = (errors) => {
    console.log("Form Errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-screen">
      <NavBar />
      <div className="w-5/6 flex flex-col lg:flex-row items-center lg:space-x-4 justify-between">
        <img
          src="./login.png"
          alt="signup image"
          className="hidden lg:block w-[805px] h-[781px] pt-[20px] rounded-tr-lg rounded-lg pb-4 px-3"
        />
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className="lg:w-1/2 space-y-4 md: p-5 align-center mt-6"
        >
          <h3 className="font-catamaran block text-[38px] h-[58px] w-[312px] font-bold">
            Create an account
          </h3>
          <p className="font-poppins text-[16px] font-normal h-[24px]">
            Enter your details below
          </p>
          <div className="space-y-2 mt-3">
            <InputField
              placeholder="First and Last name"
              id="name"
              name="name"
              register={register}
              error={errors.name}
              pattern={/[A-Za-z0-9]{3,16}$/}
              required={true}
              patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
            />
            <InputField
              placeholder="Email or Phone Number"
              id="email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
              pattern={
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              }
              required={true}
              patternMessage="Please enter a valid email address"
            />
            <InputField
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              register={register}
              error={errors.password}
              pattern={
                /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
              }
              required={true}
              patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
            />
          </div>
          <span className="text-mred mt-3">{msg}</span>
          <button
            disabled={isSubmitting}
            className="bg-mred text-white p-2 rounded-md hover:bg-mred py-2 px-6 font-poppins w-full"
          >
            Create Account
          </button>
          <button
            type="button"
            className="flex items-center font-medium text-gray-800 border rounded-lg border-gray hover:border-primaryred lg:w-full gap-2 px-8 py-1 text-center"
          >
            <img src="./google.svg" alt="Google logo" className=" w-2 h-5 " />
            Sign in with Google
          </button>
          <div className="flex flex-row space-x-1 pt-2 justify-center text-[16px] font-poppins">
            <p>Already have account?</p>
            <Link to="/login" className="text-textcol border-b border-textcol">
              Log in
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
