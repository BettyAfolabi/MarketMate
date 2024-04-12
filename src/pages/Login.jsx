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
    navigate("/sign-up");
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
    <div className="w-full overflow-x-hidden bg-white">
      <NavBar />
      <div className="flex flex-col lg:gap-10 lg:flex-row mb-3">
        <div className="hidden lg:block basis-1/2">
          <img
            src="./login.png"
            alt="login image"
            className="rounded-tr-lg rounded-lg"
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className="mx-auto lg:mx-0 lg:w-[380px] my-auto space-y-2 flex flex-col"
        >
          <h2 className="hidden md:block lg:text-[38px] font-catamaran">
            Login to MarketMate
          </h2>
          <h3 className=" md:hidden lg:w-[299px] text-[42px] ">
            Log in to
            <span className="text-mred font-bold font-lobstertwo pl-1">
              MarketMate
            </span>
          </h3>
          <p className="lg:text-[16px] text-textcol font-poppins">
            Enter your details below
          </p>

          <div>
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
          <div className="flex justify-between">
            <button
              disabled={isSubmitting}
              className="w-[143px] h-[56px] bg-mred text-white p-2 rounded-lg hover:bg-mred  py-[16px] px-[48px] m-4"
            >
              Log in
            </button>
            <Link
              to="/forgot-password"
              className="text-mred items-center self-center"
            >
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
