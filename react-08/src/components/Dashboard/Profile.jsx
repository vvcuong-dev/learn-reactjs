import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { getUser } from "../../utils/auth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      const user = await getUser();
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        // Handle the case where the user is not authenticated or the token is invalid
      }
    };
    getProfile();
  }, []);

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  if (isLoading) {
    return <div className="font-bold mt-10">Loading...</div>;
  }

  return (
    <div className="font-bold mt-10">
      <ul className="list-disc list-inside">
        <li>Email: {user?.email}</li>
        <li>Name: {user?.name}</li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-red-500 hover:underline"
            onClick={handleLogout}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
