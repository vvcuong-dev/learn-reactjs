import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control border border-gray-300 rounded-md p-2 w-full"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control border border-gray-300 rounded-md p-2 w-full"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

/**
 * rounded-md: nghĩa là bo tròn các góc của phần tử với bán kính 4px.
 * p-2: nghĩa là padding (khoảng cách bên trong phần tử) là 0.5rem (8px).
 * w-full: nghĩa là chiều rộng của phần tử sẽ chiếm toàn bộ chiều rộng của phần tử cha.
 * py-2: nghĩa là padding theo chiều dọc (padding-top và padding-bottom) là 0.5rem (8px).
 * px-4: nghĩa là padding theo chiều ngang (padding-left và padding-right) là 1rem (16px).
 */
