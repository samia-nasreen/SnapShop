/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../schemas/authSchemas";
import GoogleSignUpButton from "./GoogleSignUpButton";
import LoginLink from "./LoginLink";
import Button from "../../UI/Button";
import LineInput from "../../UI/LineInput";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full max-w-md">
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
      <Button
        text="CreateAccount"
        fontSize="base"
        onClick={handleSubmit(handleFormSubmit)}
        className="min-w-full"
      />
      <GoogleSignUpButton />
      <LoginLink />
    </form>
  );
};

export default SignUpForm;
