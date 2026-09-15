import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register, // đăng ký element input với react-hook-form
    handleSubmit, // xử lý submit form
    formState: { errors }, // lấy ra các lỗi validation của form
  } = useForm({
    criteriaMode: "firstError", // chỉ hiển thị lỗi đầu tiên của mỗi element
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  console.log("Errors", errors);
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
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters",
              },
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
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
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

/**
 * mode: có các giá trị onChange | onBlur | onSubmit | all
 *
 * - onSubmit: sẽ thưc hiện validate khi submit form và những element không hợp lệ sẽ được lắng nghe sự thay đổi và sau đó tiếp tục validate những element đó bằng mode onChange.
 * - onChange: sẽ thực hiện khi validate mỗi khi onChange element, và nó dẫn đến re-render nhiều lần (cân nhắc khi sử dụng).
 * - onBlur: sẽ thực hiện validate mỗi khi element có sự kiện blur (người dùng click ra ngoài element).
 * - onTouch: sẽ thực hiện validate cho lần blur đầu tiên (người dùng click ra ngoài element) và sau đó sẽ validate cho mỗi lần onChange element.
 * - all: sẽ thực hiện validate khi blur và change event.
 */
