// import Login from "./components/Login";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function App() {
  const schema = object({
    username: string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    email: string()
      .required("Email is required")
      .email("Invalid email address"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    accountType: string().required("Vui lòng chọn loại tài khoản"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: "firstError", // chỉ hiển thị lỗi đầu tiên của mỗi element
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      accountType: "",
    },
  });

  const handleLogin = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-400 text-center">
        Đăng nhập
      </h2>
      <form className="w-70 mx-auto mt-5" onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            className="form-control border border-gray-300 rounded-md p-2 w-full"
            id="username"
            {...register("username")}
            name="username"
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control border border-gray-300 rounded-md p-2 w-full"
            id="email"
            name="email"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="form-control border border-gray-300 rounded-md p-2 w-full"
            id="password"
            name="password"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
        <div className="mb-3">
          <FormControl fullWidth>
            <InputLabel id="account-type-label">Loại tài khoản</InputLabel>
            <Controller
              control={control}
              name="accountType"
              render={({ field: { onChange, value } }) => (
                <Select
                  labelId="account-type-label"
                  id="demo-simple-select"
                  value={value ?? ""}
                  label="Loại tài khoản"
                  onChange={onChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </div>
        {errors.accountType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.accountType.message}
          </p>
        )}
        <div>
          <button
            type="submit"
            className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
