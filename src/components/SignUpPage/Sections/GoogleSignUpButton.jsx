import { FcGoogle } from "react-icons/fc";

const GoogleSignUpButton = () => (
  <button className="btn btn-google w-full mt-4 flex items-center justify-center">
    <FcGoogle className="mr-2" size={30} />
    Sign up with Google
  </button>
);

export default GoogleSignUpButton;