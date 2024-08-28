import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-screen">
      <div className="flex-col flex justify-center items-center font-poppins mt-8 mx-auto">
        <img src="../404.png" alt="error404 image" className="w-[500px] mb-4" />
        <h2 className=" font-[500] text-black text-[48px] h-[115px] text-center">
          404 Not Found
        </h2>
        <p className="text-base text-center">
          Oops! The page you requested was not found
        </p>
        <Link
          to="/"
          className="bg-primaryred text-base font-[500] py-2 px-6 my-4 text-white hover:bg-mred"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
