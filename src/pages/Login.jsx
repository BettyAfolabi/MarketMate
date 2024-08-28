import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { auth } from "../firebase";
import { signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (error) {
      setMsg('Your email or password is incorrect');
      
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
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4">
        <img
          src="./login.png"
          alt="login image"
          className="hidden lg:block w-[700px] h-[751px] rounded-tr-lg rounded-lg pb-4 pr-3"
        />
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className="lg:w-1/2 space-y-4 md:py-4 md:px-2 align-center mt-6"
        >
          <h2 className="md:hidden lg:block lg:text-[38px] h-[58px] font-catamaran">
            Login to MarketMate
          </h2>
          <h3 className="lg:hidden md:w-[299px] text-[38px]">
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
              patternMessage="Password should be 7-16 characters"
            />
          </div>
          <span className="text-mred mt-3">{msg}</span>
          <div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-[143px] h-[56px] bg-mred text-white p-2 rounded-md hover:bg-mred py-[16px] px-[48px] m-4"
            >
              Log in
            </button>
            <Link to="/forgot-password" className="text-mred">
              Forgot Password?
            </Link>
          </div>
          
          <div className="flex flex-row space-x-1 justify-center text-[16px] font-poppins">
            <p>{`Don't have account?`}</p>
            <Link to="/signup" className="text-textcol border-b border-textcol">
              Register
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex items-center font-medium text-gray-800 border rounded-lg bg-white hover:bg-gray-100 lg:w-[365px] lg:h-[56px] gap-2 py-2 px-10"
          >
            <img src="./google.svg" alt="Google logo" className="w-2 h-5" />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
