import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from "../components/InputField";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Signup() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState, watch } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  const onError = (errors) => {
    console.log("Form Errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const name = watch("name");

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <NavBar />
      <div className="flex flex-col lg:gap-12 lg:flex-row mb-3">
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
          className="mx-auto mt-3 lg:mx-0 lg:w-[380px] lg:mt-5 space-y-3 flex flex-col"
        >
          <h3 className="text-[38px] font-catamaran text-black font-bold">
            Create an account
          </h3>
          <p className="font-poppins text-[16px] font-normal items-start py-1">
            Enter your details below
          </p>
          <div>
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

          <button
            disabled={isSubmitting}
            className="bg-mred text-white p-2 rounded-md hover:bg-mred  py-2 px-6 font-poppins w-full"
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
          <div className="flex flex-row gap-4 pt-2 justify-center">
            <p>Already have account?</p>
            <Link
              to="/"
              className="text-textcol text-[16px] font-poppins border-b border-textcol"
            >
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
