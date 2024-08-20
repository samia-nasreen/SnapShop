import { FcGoogle } from "react-icons/fc";
import React from "react";

const GoogleSignUpButton: React.FC = () => (
  <button className="btn btn-google flex items-center justify-center">
    <FcGoogle className="mr-2" size={30} />
    Sign up with Google
  </button>
);

export default GoogleSignUpButton;
