import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./components/Auth/Dashboard";
import Login from "./components/Auth/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // check login
  // ==> Hợp lệ ===> cập nhật state isAuthenticated = true
  // ==> Không hợp lệ ===> hiển thị thông báo lỗi

  const updateAutentication = () => {
    // setIsAuthenticated(true);

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setIsAuthenticated(response.ok))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    updateAutentication();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <>{isAuthenticated ? <Dashboard /> : <Login />}</>;
}

export default App;

// useEffect: hoạt động

/**
 * 1. State thay đổi
 * 2. Component re-render
 * 3. UI updated
 * 4. Cleanup effect (nếu có)
 * 5. Callback effect sẽ chạy
 */

// useLayoutEffect hoạt động

/**
 * 1. State thay đổi
 * 2. Component re-render
 * 3. Cleanup effect (nếu có)
 * 4. Callback useLayoutEffect sẽ chạy
 * 5. UI updated
 */
