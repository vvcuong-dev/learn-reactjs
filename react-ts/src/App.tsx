import Content from "./components/Content";
import Provider from "./components/Provider";

export default function App() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value changed", event.target.value);
  };

  return (
    <Provider
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
      }}
      heading={
        <h2 className="text-center font-bold blue-300 text-3xl">
          Provider Component
        </h2>
      }
      onChange={handleChange}
    >
      <Content name="John Doe" email="john.doe@example.com" status="active" />
    </Provider>
  );
}
