import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = form;
    const errorObj = {};

    if (!username) {
      errorObj.username = "Username is required";
    }

    if (!password) {
      errorObj.password = "Password is required";
    }

    setErrors(errorObj);

    if (username && password && Object.keys(errorObj).length === 0) {
      console.log("Username:", username);
      console.log("Password:", password);

      setForm({
        username: "",
        password: "",
      });
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Login</h1>
      {Object.keys(errors).length > 0 && (
        <div style={{ color: "red" }}>Please fix the errors above.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </div>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
