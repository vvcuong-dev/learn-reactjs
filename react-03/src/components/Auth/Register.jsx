import Input from "./Input";

export default function Register() {
  return (
    <form>
      <h2>Register</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginBottom: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
