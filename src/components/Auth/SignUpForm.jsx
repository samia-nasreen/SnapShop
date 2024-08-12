import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string().required("Phone is required"),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex">
      <div className="w-2/3 p-16">
        <img
          src="/src/assets/signup.png"
          alt="Sign up"
          className="h-screen w-full object-cover rounded-r"
        />
      </div>
      <div className="w-1/3 flex flex-col mt-16 mb-28 p-10">
        <h2 className="text-4xl font-medium mb-6">Create an account</h2>
        <p className="mb-8">Enter your details below</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="form-input"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            type="text"
            {...register("username")}
            placeholder="Username"
            className="form-input"
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="form-input"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="form-input"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <input
            type="text"
            {...register("address")}
            placeholder="Address"
            className="form-input"
          />
          {errors.address && <p className="error">{errors.address.message}</p>}

          <input
            type="text"
            {...register("phone")}
            placeholder="Phone"
            className="form-input"
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}

          <button type="submit" className="btn btn-primary w-full">
            Create Account
          </button>
          <button className="btn btn-google w-full mt-4 flex items-center justify-center">
            <FcGoogle className="mr-2" size={30} />
            Sign up with Google
          </button>
          <p className="mt-8 flex items-center justify-center">
            Already have account?{" "}
            <a href="/login" className="ml-2 p-1 font-medium border-b-[1.25px] border-gray-500">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
