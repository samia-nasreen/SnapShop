import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import LoginForm from "./Sections/LoginForm";
import { authActions } from "../../store/auth";
import AuthImage from "../UI/AuthImage";
import Heading from "../UI/Heading";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
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

      if (response.ok) {
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
    <div className="flex flex-row px-8 md:px-36 lg:px-36 py-6 sm:py-6 md:py-8 lg:py-10">
      <div className="hidden md:block lg:block md:w-1/2 lg:w-1/2">
        <AuthImage />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center md:pl-24 lg:pl-24">
        <Heading
          text="Log in to SnapShop"
          fontSize="text-xl sm:text-2xl md:text-3xl"
          className="mb-4"
        />
        <p className="mb-6 text-sm sm:text-base">Enter your details below</p>
        <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default LoginPage;
