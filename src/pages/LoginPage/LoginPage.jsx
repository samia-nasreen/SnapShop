import LoginForm from "./Sections/LoginForm";
import AuthImage from "../../components/UI/AuthImage";
import Heading from "../../components/UI/Heading";

const LoginPage = () => {
  return (
    <div className="flex flex-row px-8 md:px-36 lg:px-36 py-6 sm:py-6 md:py-8 lg:py-10 mt-32 mb-56 md:mt-0 md:mb-24">
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
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
