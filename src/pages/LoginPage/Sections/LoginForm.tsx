import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/authSchemas";
import Button from "../../../components/UI/Button";
import ForgotPasswordLink from "./ForgotPasswordLink";
import LineInput from "../../../components/UI/LineInput";

interface LoginFormInputs {
  username: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormInputs>;
  errorMessage?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, errorMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
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
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <Button
          text="Log In"
          onClick={handleSubmit(onSubmit)}
          fontSize="base"
        />
        <ForgotPasswordLink />
      </div>
    </form>
  );
};

export default LoginForm;
