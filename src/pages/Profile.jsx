import { useForm } from "react-hook-form";
import { useEffect } from "react";
//import React from "react";
import InputField from "../components/InputField";

function Profile() {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      password: "",
      cpassword: "",
      npassword: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful, } = formState;

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
        className="font-poppins shadow-md p-4 pl-6 px-auto mt-5"
      >
        <h1 className="text-darkblue text-[20px] font-medium py-2">
          Edit Your Profile
        </h1>
        <div className="flex gap-[50px] mb-2">
          <InputField
            label="First Name"
            placeholder="Jane"
            id="firstname"
            name="firstname"
            register={register}
            error={errors.firstname}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
            className="border-none bg-lightgray rounded w-[330px]"
          />
          <InputField
            label="Last Name"
            placeholder="Amokoko"
            id="lastname"
            name="lastname"
            register={register}
            error={errors.lastname}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
            className="border-none bg-lightgray rounded w-[330px]"
          />
        </div>
        <div className="flex gap-[50px] mb-4">
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
            className="border-none bg-lightgray rounded w-[330px]"
          />
          <InputField
            label="Address"
            placeholder="Ragnarok"
            id="address"
            name="address"
            type="address"
            register={register}
            error={errors.address}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Enter your address"
            className="border-none bg-lightgray rounded w-[330px]"
          />
        </div>
        <div className="space-y-2 my-2">
          <h2 className="text-base">Password changes</h2>
          <InputField
            placeholder="Current password"
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
            className="border-none bg-lightgray w-[710px] rounded"
          />
          <InputField
            placeholder="New Password"
            id="npassword"
            name="npassword"
            type="password"
            register={register}
            error={errors.npassword}
            pattern={
              /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
            }
            required={true}
            patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
            className="border-none bg-lightgray w-[710px] rounded"
          />
          <InputField
            placeholder="Confirm Password"
            id="cpassword"
            name="cpassword"
            type="password"
            register={register}
            error={errors.cpassword}
            pattern={/values.password/}
            required={true}
            patternMessage="Password doesn't match"
            className="border-none bg-lightgray w-[710px] rounded"
          />
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <button className="text-darkblue text-base">Cancel</button>
          <button className="bg-mred text-white p-2 hover:bg-mred px-4 my-2 py-2">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
