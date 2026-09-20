// export default function App({
//   message,
// }: {
//   message: string;
// }): React.JSX.Element {
//   return (
//     <h1 className="text-2xl font-bold text-blue-500 text-center">{message}</h1>
//   );
// }

type AppProps = {
  message: string;
};

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <h1 className="text-2xl font-bold text-blue-500 text-center">
      Cường vũ: {message}
    </h1>
  );
};

export default App;
