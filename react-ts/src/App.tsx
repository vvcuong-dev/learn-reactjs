import Content from "./components/Content";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        Hello Tailwind
      </h1>
      <Content name="John Doe" email="john.doe@example.com" status="active" />
    </div>
  );
}
