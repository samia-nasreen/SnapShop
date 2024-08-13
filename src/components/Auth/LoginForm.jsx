import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode"; 

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const token = result.token;
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);

      if (response.ok) {
        console.log(result);
        dispatch(authActions.login({ userId: decodedToken.sub }));
        navigate("/");
      } else {
        setErrorMessage(
          "Login failed. Please check your username and password."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Image Section - Hidden on small screens */}
      <div className="hidden lg:block lg:w-2/3 p-16 mb-20">
        <img
          src="/src/assets/signup.png"
          alt="Log in"
          className="h-screen w-full object-cover rounded-r"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center p-10 lg:-mt-32">
        <h2 className="text-4xl font-medium mb-6">Log in to SnapShop</h2>
        <p className="mb-8">Enter your details below</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <input
            type="text"
            {...register("username")}
            placeholder="Username"
            className="form-input w-full mb-4"
          />
          {errors.username && (
            <p className="error text-red-500 mb-2">{errors.username.message}</p>
          )}

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="form-input w-full mb-4"
          />
          {errors.password && (
            <p className="error text-red-500 mb-2">{errors.password.message}</p>
          )}

          {errorMessage && (
            <p className="error text-red-500 mb-4">{errorMessage}</p>
          )}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <button
              type="submit"
              className="btn btn-primary w-full sm:w-32 mb-4 sm:mb-0"
            >
              Log In
            </button>
            <p className="mt-4 sm:mt-0">
              <a href="#forgot-password" className="text-red-500">
                Forgot Password?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
