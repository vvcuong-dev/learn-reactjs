type Props = {
  message: string;
};

const App = ({ message = "Hello, World!" }: Props) => {
  return <div>{message}</div>;
};

export default App;
