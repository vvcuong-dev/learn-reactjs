import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center justify-center align-middle flex-col gap-4">
      <h2 className="text-3xl text-blue-500  text-center font-bold mt-10">
        Hello my fiend, welcome to the dashboard
      </h2>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={handleLogout}
      >
        Đăng xuất
      </button>
    </div>
  );
}
