import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import LoginForm from "./Sections/LoginForm";
import { authActions } from "../../store/auth";

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
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-2/3 p-16 mb-20">
        <img
          src="/assets/signup.png"
          alt="Log in"
          className="h-screen w-full object-cover rounded-r"
        />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-center p-10 lg:-mt-32">
        <h2 className="text-4xl font-medium mb-6">Log in to SnapShop</h2>
        <p className="mb-8">Enter your details below</p>
        <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default LoginPage;
