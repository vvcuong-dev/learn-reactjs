import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { requestLogin } from "../../utils/auth";
import { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  // email: john@mail.com password: changeme,

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitForm = async (data) => {
    setIsLoading(true);
    try {
      const { email, password } = data;
      const emailTrimmed = email.trim();
      const passwordTrimmed = password.trim();

      const response = await requestLogin({
        email: emailTrimmed,
        password: passwordTrimmed,
      });

      console.log(response);

      toast.success("Login successful!");
      reset();
    } catch {
      toast.error("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-3xl font-bold underline text-center">Login</h1>

      <div className="flex justify-center items-center mt-10 bg-gray-100 p-10 rounded-lg shadow-md">
        <form
          className="w-full max-w-sm flex flex-col gap-4"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isLoading ? "Đang đăng nhập..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
