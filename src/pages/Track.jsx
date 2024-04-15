import { useForm } from "react-hook-form";
import { useEffect } from "react";
import React from "react";
import InputField from "../components/InputField";

function Track() {
  const form = useForm({
    defaultValues: {
      orderid: "",
      billingmail: "",
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
    <div className="font-poppins shadow-md px-4 pl-6 px-auto py-4 mt-5 flex flex-col">
      <img
        src="../Track.png"
        alt="ordering man image"
        className="w-[350px] h-[300px] my-4 mx-auto"
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-[35px] font-semibold">Track Order</h1>
        <p className="text-gray text-base font-normal">
          To track your order please enter your order ID in the input field
          below and press the “Track Order” button. This was given to you on
          your receipt and in the confirmation email you should have received.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className="space-y-2"
        >
          <div className="flex gap-[50px] w-full">
            <InputField
              label="Order ID"
              placeholder="Enter Order ID"
              id="orderid"
              name="orderid"
              register={register}
              error={errors.orderid}
              pattern={/^\d{10}$/}
              required={true}
              patternMessage="Enter your order id only in numbers"
              className="border-none bg-lightgray rounded w-[400px] p-1"
            />
            <InputField
              label="Billing Email"
              placeholder="Enter your email"
              id="billingmail"
              name="billingmail"
              type="email"
              register={register}
              error={errors.billingmail}
              pattern={
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              }
              required={true}
              patternMessage="Please enter a valid email address"
              className="border-none bg-lightgray rounded w-[400px] p-1"
            />
          </div>
          <p className="text-sm text-gray">
            <span className="text-gray pr-1 font-semibold">&#x24D8;</span> A
            copy of the Order ID was sent to your email
          </p>
          <button className="px-[40px] py-[15px] mt-2 bg-secblue hover:bg-primaryblue text-white rounded">
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Track;
