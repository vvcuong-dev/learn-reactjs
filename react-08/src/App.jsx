import Login from "./components/Auth/Login";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard/Dahsboard";

function AppContent() {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{isAuthenticated ? <Dashboard /> : <Login />}</div>;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
