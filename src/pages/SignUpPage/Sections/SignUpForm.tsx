import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../schemas/authSchemas";
import GoogleSignUpButton from "./GoogleSignUpButton";
import LoginLink from "./LoginLink";
import Button from "../../../components/UI/Button";
import LineInput from "../../../components/UI/LineInput";
import { toast } from "react-toastify";

interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signUpSchema),
  });

  const handleFormSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    console.log(data);
    toast.success("Registration successful");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
      <LineInput
        label="email"
        register={register}
        errors={errors}
        type="email"
        placeholder="Email"
      />
      <LineInput
        label="username"
        register={register}
        errors={errors}
        type="text"
        placeholder="Username"
      />
      <LineInput
        label="password"
        register={register}
        errors={errors}
        type="password"
        placeholder="Password"
      />
      <LineInput
        label="name"
        register={register}
        errors={errors}
        type="text"
        placeholder="Name"
      />
      <LineInput
        label="address"
        register={register}
        errors={errors}
        type="text"
        placeholder="Address"
      />
      <LineInput
        label="phone"
        register={register}
        errors={errors}
        type="text"
        placeholder="Phone"
      />
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <Button
          text="Create Account"
          fontSize="base"
          onClick={handleSubmit(handleFormSubmit)}
        />
        <GoogleSignUpButton />
      </div>
      <LoginLink />
    </form>
  );
};

export default SignUpForm;
