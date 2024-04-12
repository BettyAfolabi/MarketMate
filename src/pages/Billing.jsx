import { useForm } from "react-hook-form";
import { useEffect } from "react";
import React from "react";
import InputField from "../components/InputField";

function Billing() {
  const form = useForm({
    defaultValues: {
      houseno: "",
      streetname: "",
      city: "",
      state: "",
      postalcode: "",
      phonenum: "",
      addphonenum: "",
      additional: "",
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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
        className="font-poppins shadow-md px-4 pl-6 px-auto mt-5"
      >
        <h1 className="text-darkblue text-[20px] font-medium py-2">
          Edit Your Profile
        </h1>
        <div className="flex gap-[50px] mb-2">
          <InputField
            label="House No."
            placeholder="30"
            id="houseno"
            name="houseno"
            register={register}
            error={errors.houseno}
            pattern={/^\d{3}$/}
            required={true}
            patternMessage="Enter your house number only in numbers"
            className="border-none bg-lightgray rounded w-[330px]"
          />
          <InputField
            label="Street Name"
            placeholder="Kingston street"
            id="streetname"
            name="streetname"
            register={register}
            error={errors.streetname}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Street name should contain 3-16 characters and shouldn't contain any special characters"
            className="border-none bg-lightgray rounded w-[330px]"
          />
        </div>
        <div className="flex gap-[50px] mb-4">
          <InputField
            label="City"
            placeholder="Yaba"
            id="city"
            name="city"
            register={register}
            error={errors.city}
            required={true}
            pattern={/[A-Za-z0-9]{3,16}$/}
            patternMessage="City should contain 3-16 characters and shouldn't contain any special characters"
            className="border-none bg-lightgray rounded w-[330px]"
          />
          <InputField
            label="State"
            placeholder="Lagos"
            id="state"
            name="state"
            register={register}
            error={errors.state}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Enter your state"
            className="border-none bg-lightgray rounded w-[330px]"
          />
        </div>
        <div className="flex gap-[50px] mb-4">
          <InputField
            label="Postal Code"
            placeholder="101255"
            id="postalcode"
            name="postalcode"
            type="number"
            register={register}
            error={errors.postalcode}
            pattern={/^\d{5}$/}
            required={true}
            patternMessage="Enter your postal code"
            className="border-none bg-lightgray w-[3300px] rounded"
          />
          <InputField
            label="Country"
            placeholder="Nigeria"
            id="country"
            name="country"
            register={register}
            error={errors.country}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Enter your country of residence"
            className="border-none bg-lightgray w-[330px] rounded"
          />
        </div>
        <div className="flex gap-[50px] mb-4">
          <InputField
            label="Phone Number"
            placeholder="08132186190"
            id="phonenum"
            name="phonenum"
            type="number"
            register={register}
            error={errors.phonenum}
            pattern={/^\d{10}$/}
            required={true}
            patternMessage="Enter a valid phone number up to 10 digits"
            className="border-none bg-lightgray w-[330px] rounded"
          />
          <InputField
            label="Additional phone number"
            placeholder="08045657677"
            id="addphonenum"
            name="addphonenum"
            type="number"
            register={register}
            error={errors.addphonenum}
            pattern={/^\d{10}$/}
            required={false}
            patternMessage="Enter a valid phone number up to 10 digits"
            className="border-none bg-lightgray w-[330px] rounded"
          />
        </div>
        <InputField
          label="Additional Information"
          placeholder="Enter additional information"
          id="additional"
          name="additional"
          register={register}
          error={errors.additional}
          pattern={/[A-Za-z0-9]{3,16}$/}
          required={false}
          className="border-none bg-lightgray w-[710px] rounded"
        />
        <div className="flex flex-row gap-3 justify-end">
          <button className="text-darkblue text-base hover:text-secblue">
            Cancel
          </button>
          <button className="bg-mred text-white p-2 hover:bg-mred px-4 my-2 py-2">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Billing;
