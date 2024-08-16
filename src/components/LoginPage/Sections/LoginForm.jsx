/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/authSchemas";
import TextInput from "./TextInput";
import RedButton from "../../UI/RedButton";
import ForgotPasswordLink from "./ForgotPasswordLink";

const LoginForm = ({ onSubmit, errorMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
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
      {errorMessage && (
        <p className="error text-red-500 mb-4">{errorMessage}</p>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <RedButton
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
