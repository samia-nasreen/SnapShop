import { NavLink } from "react-router-dom";

const LoginLink = () => (
  <p className="mt-4 flex items-center justify-center">
    Already have an account?{" "}
    <NavLink
      to="/login"
      className="ml-2 p-1 font-medium border-b-[1.25px] border-gray-500"
    >
      Log in
    </NavLink>
  </p>
);

export default LoginLink;
