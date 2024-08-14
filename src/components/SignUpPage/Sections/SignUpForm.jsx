/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../schemas/authSchemas";
import TextInput from "./TextInput";
import CreateAccountButton from "./CreateAccountButton";
import GoogleSignUpButton from "./GoogleSignUpButton";
import LoginLink from "./LoginLink";

const SignUpForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <TextInput
        label="email"
        register={register}
        errors={errors}
        type="email"
        placeholder="Email"
      />
      <TextInput
        label="username"
        register={register}
        errors={errors}
        type="text"
        placeholder="Username"
      />
      <TextInput
        label="password"
        register={register}
        errors={errors}
        type="password"
        placeholder="Password"
      />
      <TextInput
        label="name"
        register={register}
        errors={errors}
        type="text"
        placeholder="Name"
      />
      <TextInput
        label="address"
        register={register}
        errors={errors}
        type="text"
        placeholder="Address"
      />
      <TextInput
        label="phone"
        register={register}
        errors={errors}
        type="text"
        placeholder="Phone"
      />
      <CreateAccountButton />
      <GoogleSignUpButton />
      <LoginLink />
    </form>
  );
};

export default SignUpForm;
