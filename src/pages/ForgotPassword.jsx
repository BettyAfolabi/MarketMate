
const ForgotPassword = () => {
  return (
    <div className="w-screen">
      <div className="items-center  bg-dgray min-h-screen flex justify-center">
        <div className="bg-white p-8  shadow-lg max-w-md mx-auto">
          <h5 className="font-catamara text-secblue text-[35px] ">
            Forgot Password
          </h5>
          <p className="font-poppins text-dgray text-[12px]">
            Enter your email for the verification proccess, we will send 4
            digits code to your email.
          </p>
          <label>Email</label>
          <input
            className="my-2 border-2 border-gray w-[300px] bg-dgray"
            placeholder="Enter email"
            type="email"
          />
          <button
            className=" bg-darkblue w-[300px] h-4 my-1 text-white rounded-md "
            type="submit"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
