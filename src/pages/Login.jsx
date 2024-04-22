import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log("submitted", data);
    navigate("/home");
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
      <div className="w-5/6 flex flex-col lg:flex-row justify-between items-center lg:space-x-4">
        <img
          src="./login.png"
          alt="login image"
          className="hidden lg:block w-[805px] h-[781px] pt-[25px] rounded-tr-lg rounded-lg pb-4 px-3"
        />
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className=" lg:w-1/2 space-y-4 md: p-5 align-center "
        >
          <h2 className=" md:hidden lg:block lg:text-[38px] h-[58px] font-catamaran text-[] ">
            Login to MarketMate
          </h2>
          <h3 className="lg:hidden md: w-[299px] text-[38px] ">
            Log in to{" "}
            <span className="text-mred font-bold font-lobstertwo">
              MarketMate
            </span>
          </h3>
          <div>
            <p className="block mb-2 lg:text-[16px] text-textcol font-poppins">
              Enter your details below
            </p>

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
          </div>
          <div>
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
          <div>
            <button
              disabled={isSubmitting}
              className="w-[143px] h-[56px] bg-mred text-white p-2 rounded-md hover:bg-mred  py-[16px] px-[48px] m-4"
            >
              Log in
            </button>
            <Link to="/forgot-password" className="text-mred">
              Forgot Password?
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex items-center  font-medium text-gray-800 border rounded-lg bg-white hover:bg-gray-100 lg:w-[365px] lg: h-[56px]  gap-2 py-2 px-10"
          >
            <img src="./google.svg" alt="Google logo" className=" w-2 h-5 " />
            Sign in with Google
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
