import "./App.css";

const male = "male";

const myAlert = () => {
  alert("You clicked the link!");
};

const welcomeMessage = "Welcome to my React application!";

function App() {
  return (
    <>
      <div className="block">
        <h2 className="sub-title" id="sub-title">
          {welcomeMessage}
        </h2>
        <h1 className="title" id="title">
          React + Vite
        </h1>
        <p className="description" id="description">
          This is a simple React application created using Vite.{" "}
          <a
            onClick={myAlert}
            style={{ color: "green" }}
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Vite
          </a>
          .
        </p>
      </div>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue="cuongvu@gmail.com"
        placeholder="Enter your name"
      />

      <div>
        <label htmlFor="gender" style={{ color: "green" }}>
          Gender:
        </label>
        <select id="gender" name="gender" defaultValue={male}>
          <option value={male}>Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </>
  );
}

export default App;
