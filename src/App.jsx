import "./App.css";
import Customer from "./components/state/customer.state";
import Counter from "./components/state/counter.state";

const customerInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
};

function App() {
  return (
    <>
      <h1>State of react</h1>
      <Customer info={customerInfo} />

      <Counter count={0} />
    </>
  );
}

export default App;
