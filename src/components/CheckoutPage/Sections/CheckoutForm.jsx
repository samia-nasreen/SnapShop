/* eslint-disable react/prop-types */
import FormInput from "./FormInput";

const CheckoutForm = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-zinc-400">
      <FormInput
        label="First Name"
        name="firstName"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        label="Company Name"
        name="companyName"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Street Address"
        name="streetAddress"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        label="Apartment, floor, etc. (optional)"
        name="apartment"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Town/City"
        name="city"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        label="Phone Number"
        name="phoneNumber"
        register={register}
        errors={errors}
        required
      />
      <FormInput
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
