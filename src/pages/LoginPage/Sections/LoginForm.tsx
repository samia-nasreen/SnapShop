import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/authSchemas";
import Button from "../../../components/UI/Button";
import ForgotPasswordLink from "./ForgotPasswordLink";
import LineInput from "../../../components/UI/LineInput";
import { jwtDecode } from "jwt-decode";
import { authActions } from "../../../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../api/authApi";

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    toast.info("Logging in...");

    const result = await login(data).unwrap();
    const token = result.token;
    const decodedToken = jwtDecode(token);
    const userId = decodedToken?.sub ? parseInt(decodedToken.sub, 10) : null;

    if (userId !== null) {
      dispatch(authActions.login({ userId }));
      toast.success("Logged in sucessfully");
      navigate("/");
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <LineInput
        name="username"
        register={register}
        errors={errors}
        type="text"
        placeholder="Username"
      />
      <LineInput
        name="password"
        register={register}
        errors={errors}
        type="password"
        placeholder="Password"
      />
      {isError && (
        <p className="text-red-500 mb-4">
          Login failed. Please check your username and password.
        </p>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <Button text="Log In" type="submit" fontSize="base" />
        <ForgotPasswordLink />
      </div>
    </form>
  );
};

export default LoginForm;
