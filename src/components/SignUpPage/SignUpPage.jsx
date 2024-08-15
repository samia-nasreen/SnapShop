import SignUpForm from "./Sections/SignUpForm";

const SignUpPage = () => {
  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-2/3 p-16">
        <img
          src="/assets/signup.png"
          alt="Sign up"
          className="h-screen w-full object-cover rounded-r"
        />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-center lg:mt-16 lg:mb-28 p-10">
        <h2 className="text-4xl font-medium mb-6">Create an account</h2>
        <p className="mb-8">Enter your details below</p>
        <SignUpForm onSubmit={handleSignUp} />
      </div>
    </div>
  );
};

export default SignUpPage;
