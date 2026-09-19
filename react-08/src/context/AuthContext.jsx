import { createContext, useState, useEffect } from "react";
import {
  getToken,
  saveToken as saveTokenToStorage,
  removeToken,
} from "../utils/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const login = (tokenData) => {
    saveTokenToStorage(tokenData);
    setIsAuthenticated(true); // cập nhật ngay, không cần reload
  };

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
