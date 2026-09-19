import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import { getToken, saveToken, removeToken } from "../utils/auth";

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
    saveToken(tokenData);
    setIsAuthenticated(true);
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
