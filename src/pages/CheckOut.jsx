import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

function CheckOut() {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      phoneno: "",
      state: "",
      zipcode: "",
      townc: "",
      email: "",
      streetadd: "",
      country: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
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

  return (
    <div className="w-full h-screen overflow-x-hidden bg-white font-poppins">
      <NavBar />
      <div className="w-11/12 mx-auto my-2">
        <h1 className="text-center font-semibold text-4xl my-3">Check Out</h1>
        <div className="flex flex-row justify-center gap-3 my-5">
          <div className="border-b-2 border-[#38CB89] pb-3 flex">
            <i className="bx bx-sm bxs-check-circle text-[#38CB89] mr-1"></i>
            <p className="font-semibold text-[#38CB89]">Shopping cart</p>
          </div>
          <div className="border-b-2 border-black pb-3 flex">
            <p className="rounded-full bg-black text-white px-1 mr-1">2</p>
            <p className="font-semibold">Checkout Details</p>
          </div>
          <div className="border-b border-[#B1B5C3] pb-3 flex">
            <p className="rounded-full bg-[#B1B5C3] text-white px-1 mr-1">3</p>
            <p className="font-semibold text-[#B1B5C3]">Order Complete</p>
          </div>
        </div>
        <div className="flex text-[#191919]">
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className="border border-darkblue p-2 text-xs font-semibold mb-3">
              <h3 className="font-medium text-[20px] pb-3">
                Contact Infomation
              </h3>
              <div className="flex gap-[50px] mb-3">
                <InputField
                  label="FIRST NAME"
                  placeholder="first name"
                  id="firstname"
                  name="firstname"
                  register={register}
                  error={errors.firstname}
                  pattern={/[A-Za-z0-9]{3,16}$/}
                  required={true}
                  patternMessage="Enter your first name"
                  className="border-none bg-lightgray rounded w-[330px]"
                />
                <InputField
                  label="LAST NAME"
                  placeholder="last name"
                  id="lastname"
                  name="lastname"
                  register={register}
                  error={errors.lastname}
                  pattern={/[A-Za-z0-9]{3,16}$/}
                  required={true}
                  patternMessage="Enter your last name"
                  className="border-none bg-lightgray rounded w-[330px]"
                />
              </div>
              <InputField
                label="PHONE NUMBER"
                placeholder="Phone number"
                id="phoneno"
                name="phoneno"
                type="number"
                register={register}
                error={errors.phoneno}
                pattern={/^\d{10}$/}
                required={true}
                patternMessage="Enter your phone number up to ten digits"
                className="border-none bg-lightgray rounded w-[630px] mb-3"
              />
              <InputField
                label="Email"
                placeholder="jane@mail.com"
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
                className="border-none bg-lightgray rounded w-[630px]"
              />
            </div>
            <div className="border border-darkblue p-2 text-xs font-semibold">
              <h3 className="font-medium text-[20px] pb-3">Shipping Address</h3>
              <InputField
                label="Street Address *"
                placeholder="Street Address"
                id="streetadd"
                name="streetadd"
                register={register}
                error={errors.streetadd}
                pattern={/[A-Za-z0-9]{3,16}$/}
                required={true}
                patternMessage="Enter your street addresss"
                className="border-none bg-lightgray rounded w-[630px] mb-3"
              />
              <InputField
                label="Country *"
                placeholder="Country"
                id="country"
                name="country"
                type="select"
                register={register}
                error={errors.country}
                pattern={/[A-Za-z0-9]{3,16}$/}
                required={true}
                patternMessage="Enter your country"
                className="border-none bg-lightgray rounded w-[630px] mb-3"
              />
              <InputField
                label="Town / City *"
                placeholder="Town / City "
                id="townc"
                name="townc"
                register={register}
                error={errors.townc}
                pattern={/[A-Za-z0-9]{3,16}$/}
                required={true}
                patternMessage="Enter your town or city"
                className="border-none bg-lightgray rounded w-[630px] mb-3"
              />
              <div className="flex mb-3 gap-[50px]">
                <InputField
                  label="STATE"
                  placeholder="State"
                  id="state"
                  name="state"
                  register={register}
                  error={errors.state}
                  pattern={/[A-Za-z0-9]{3,16}$/}
                  required={false}
                  patternMessage="Enter your state"
                  className="border-none bg-lightgray rounded w-[330px]"
                />
                <InputField
                  label="Zip Code"
                  placeholder="Zip Code"
                  id="zipcode"
                  name="zipcode"
                  type="number"
                  register={register}
                  error={errors.zipcode}
                  pattern={/^\d{6}$/}
                  required={true}
                  patternMessage="Enter your zip code"
                  className="border-none bg-lightgray rounded w-[330px] mb-1"
                />
              </div>
              <div className=" flex gap-x-2">
                <div className="flex h-6 items-center">
                  <input
                    id="different"
                    name="different"
                    type="checkbox"
                    className="h-2 w-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6 self-center">
                  <label htmlFor="different" className="font-medium">
                    Use a different billing address (optional)
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
