const ErrorPage = () => {
  return (
    <div className="px-32 h-1/2 mt-10">
      <div className="text-xs text-gray-500">
        <span className="mr-2">Home</span> /{" "}
        <span className="ml-2 text-black">404 Error</span>
      </div>
      <div className="flex flex-col items-center pt-40 pb-48 justify-center bg-white text-center">
        <h1 className="text-8xl text-black mb-8">404 Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops, you encountered an error. You may go to home page.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 px-10 py-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
