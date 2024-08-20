import React from "react";
import RoundedInput from "../../../components/UI/RoundedInput";
import {
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

interface CheckoutFormValues {
  firstName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  phoneNumber: string;
  email: string;
}

interface CheckoutFormProps {
  handleSubmit: UseFormHandleSubmit<CheckoutFormValues>;
  onSubmit: (data: CheckoutFormValues) => void;
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-zinc-400">
      <RoundedInput
        label="First Name"
        name="firstName"
        register={register}
        errors={errors}
        required
      />
      <RoundedInput
        label="Company Name"
        name="companyName"
        register={register}
        errors={errors}
      />
      <RoundedInput
        label="Street Address"
        name="streetAddress"
        register={register}
        errors={errors}
        required
      />
      <RoundedInput
        label="Apartment, floor, etc. (optional)"
        name="apartment"
        register={register}
        errors={errors}
      />
      <RoundedInput
        label="Town/City"
        name="city"
        register={register}
        errors={errors}
        required
      />
      <RoundedInput
        label="Phone Number"
        name="phoneNumber"
        register={register}
        errors={errors}
        required
      />
      <RoundedInput
        label="Email Address"
        name="email"
        register={register}
        errors={errors}
        required
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="saveInfo"
          className="mr-4 h-6 w-6 appearance-none border-[1.5px] border-zinc-300 rounded-sm checked:bg-red-500 checked:border-red-500 checked:icon-white focus:ring-0"
        />
        <label htmlFor="saveInfo" className="text-black">
          Save this information for faster check-out next time
        </label>
      </div>
    </form>
  );
};

export default CheckoutForm;
