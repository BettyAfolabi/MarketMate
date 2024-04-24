import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const navigate = useNavigate();

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
    navigate("/complete");
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
      <div className="w-4/5 mx-auto my-3">
        <h1 className="text-center font-semibold text-4xl my-3">Check Out</h1>
        <div className="flex flex-row justify-center gap-3 my-5">
          <div className="hidden border-b-2 border-[#38CB89] pb-3 lg:flex">
            <i className="bx bx-sm bxs-check-circle text-[#38CB89] mr-1"></i>
            <p className="font-semibold text-[#38CB89]">Shopping cart</p>
          </div>
          <div className="border-b-2 border-black pb-3 flex">
            <p className="rounded-full bg-black text-white px-1 mr-1">2</p>
            <p className="font-semibold">Checkout Details</p>
          </div>
          <div className="border-b border-[#B1B5C3] pb-3 flex">
            <p className="rounded-full bg-[#B1B5C3] text-white px-1 mr-1">3</p>
            <p className="hidden lg:block font-semibold text-[#B1B5C3]">
              Order Complete
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className="flex text-[#191919] flex-col-reverse lg:flex-row justify-between gap-x-8"
        >
          <div className="basis-3/5">
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
          </div>
          <fieldset className="basis-2/5 flex flex-col w-[390px] p-2">
            <legend className="font-semibold w-1/4 text-base">
              Logistics Summary
            </legend>
            <div className="mt-2 space-y-4 text-sm font-semibold">
              <div className="flex border border-[#8D8D8D] p-1 justify-between">
                <div className=" flex items-center gap-x-3">
                  <input
                    id="delivery-team"
                    name="deliveryteam"
                    type="radio"
                    className="h-2 w-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="delivery-team"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Marketmate Delivery Team
                  </label>
                </div>
                <p>#1000</p>
              </div>
              <div className="flex border border-[#8D8D8D] p-1 justify-between">
                <div className=" flex items-center gap-x-3">
                  <input
                    id="shipping"
                    name="shipping"
                    type="radio"
                    className="h-2 w-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="shipping"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Shipping Overseas
                  </label>
                </div>
                <p>+#10000</p>
              </div>
              <div className="flex border border-[#8D8D8D] p-1 justify-between">
                <div className="flex items-center gap-x-3">
                  <input
                    id="pick-up"
                    name="pickup"
                    type="radio"
                    className="h-2 w-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="pick-up"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Pick Up
                  </label>
                </div>
                <p>#0.00</p>
              </div>
              <div className="flex border border-[#8D8D8D] p-1 justify-between">
                <div className="flex items-center gap-x-3">
                  <input
                    id="personal-logistics"
                    name="personallogistics"
                    type="radio"
                    className="h-2 w-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="personal-logistics"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Pick Up with Personal Logistics
                  </label>
                </div>
                <p>#0.00</p>
              </div>
              <div className="flex justify-between border-b border-[#8D8D8D] pb-2 font-bold text-sm">
                <p>Subtotal</p>
                <p>#41,597</p>
              </div>
              <div className="flex justify-between pb-1 font-bold text-sm">
                <p>Total</p>
                <p>#42,597</p>
              </div>
              <button
                disabled={isSubmitting}
                className="text-white text-center font-semibold text-[18px] leading-7 bg-primaryred hover:bg-mred py-[15px] px-5 w-full"
              >
                Proceed to Payment
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
