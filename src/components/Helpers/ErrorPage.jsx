import Button from "../UI/Button";
import Breadcrumb from "../UI/Breadcrumb";

const ErrorPage = () => {
  return (
    <div className="px-32 h-1/2">
      <Breadcrumb parts={["Home", "404 Error"]} />
      <div className="flex flex-col items-center pt-40 pb-56 justify-center bg-white text-center">
        <h1 className="text-8xl text-black mb-8">404 Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops, you encountered an error. You may go to home page.
        </p>
        <Button
          text="Back to home page"
          fontSize="base"
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
