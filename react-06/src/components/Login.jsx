import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register, // đăng ký element input với react-hook-form
    // watch, // theo dõi sự thay đổi của element input
    reset, // reset lại giá trị của form về defaultValue
    setError, // set lỗi cho element input (thường dùng khi validate phía server trả về lỗi)
    setValue, // set giá trị cho element input (thường dùng khi muốn set giá trị mặc định cho form)
    setFocus, // set focus cho element input (thường dùng khi muốn set focus cho form)
    getValues, // lấy giá trị của form (thường dùng khi muốn lấy giá trị của form để submit lên server)
    trigger, // trigger validate cho element input (thường dùng khi muốn validate form trước khi submit)
    handleSubmit, // sẽ thực hiện validate, nếu validate thành công thì gọi hàm onSubmit, nếu validate thất bại thì sẽ hiển thị lỗi validation
    formState: { errors, isValid }, // lấy ra các lỗi validation của form
  } = useForm({
    criteriaMode: "firstError", // chỉ hiển thị lỗi đầu tiên của mỗi element
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      accountType: "0",
    },
  });

  const onSubmit = ({ email, password }) => {
    if (email !== "admin@gmail.com" || password !== "123456") {
      setError("email", {
        type: "server",
        message: "Email hoặc mật khẩu không đúng",
      });
      return;
    }

    alert("Đăng nhập thành công");

    reset();
  };

  // const watchAllFields = watch(); // theo dõi sự thay đổi của tất cả các element input

  // useEffect(() => {
  //   console.log("Hello watchAllFields:", watchAllFields);
  // }, [watchAllFields]);

  return (
    <div className="w-70 mx-auto">
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
              // validate
              // onChange: (e) => {
              //   console.log("Email changed:", e.target.value);
              // },
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
        <div className="mb-3">
          <label>Loại tài khoản</label>
          <div className="relative">
            <select
              className="appearance-none border border-gray-300 rounded-md p-2 pr-8 w-full bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              {...register("accountType", {
                required: "Loại tài khoản là bắt buộc",
              })}
            >
              <option value="0">Chọn loại tài khoản</option>
              <option value="user">Người dùng</option>
              <option value="admin">Quản trị viên</option>
            </select>
            <svg
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="grid gap-2">
          <button
            type="button"
            className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-primary bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setValue("email", "admin@gmail.com");
            }}
          >
            Set Value
          </button>
          <button
            type="button"
            className="btn btn-primary bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setFocus("password");
            }}
          >
            Set Focus
          </button>
          <button
            type="button"
            className="btn btn-primary bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              console.log(getValues(["email", "password"]));
              setFocus("password");
            }}
          >
            Get Values
          </button>
          <button
            type="button"
            className="btn btn-primary bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              trigger("email");
              trigger("password");
            }}
          >
            Trigger Validation
          </button>
        </div>
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

/**
 * # formState:
 *
 * - errors: trả về một object chứa lỗi, và key của object tương ứng với name mà chúng ta truyền vào hàm Register. Nếu trường hợp không có lỗi nào thì sẽ trả về object rỗng.
 * - isDirty: so sánh data inpit hiện tại với defaultValue và trả về true nếu value hiện tại khác với defaultValue (dùng để show pop-up khi user chỉnh sửa nhưng chưa submit form). Ví dụ: tình huống user nhập dữ liệu vào form nhưng chưa submit, khi user muốn thoát khỏi trang thì sẽ hiển thị pop-up cảnh báo.
 * - isSubmmitting: trả về true khi form đang trong quá trình submit và false khi form đã submit xong.
 * - isSubmitted: trả về true khi form đã submit và false khi form chưa submit.
 * - isSubmitCount: trả về số lần form đã submit.
 * - isValid: trả về true nếu form hợp lệ và false nếu form không hợp lệ.
 * - isValidating: trả về true nếu form đang trong quá trình validate và false khi form đã validate xong.
 */

/**
 * # SetError và clearError: là hai hàm trong react-hook-form dùng để quản thủ công trạng thái lỗi của các field trong form
 *
 * ## setError:
 *  - dùng để gán lỗi thủ công cho một field, kể cả validatation tự nhiên (theo rules bạn khai báo) không phát hiện ra lỗi đó. Thường dùng khi:
 *    - Validate phía server trả về lỗi (VD: "Email đã tồn tại") và bạn muốn hiển thị lỗi đó lên đúng field tương ứng.
 *    - Có logic validate phức tạp, liên quan nhiều field, không thể diễn tả bằng rules thông thường.
 *
 * - VD: setError("email", { type: "server", message: "Email đã tồn tại" });
 *
 * - Tham số gồm: tên field, object { typem message }, và tùy chọn thứ 3 để shouldFocus (nếu true thì focus vào field đó).
 *
 * ## clearError:
 * - dùng để xóa lỗi thủ công của một hoặc nhiều field (hoặc toàn bộ form), thường dùng khi:
 *   - bạn muốn reset lỗi trước khi submit lịa
 *   - sau khi user sửa dữ liệu và bạn muốn xóa lỗi cũ
 *
 *
 */
