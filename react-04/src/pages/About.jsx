export default function About() {
  const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>Giới thiệu</h1>
      {fibonacci(40)}
    </div>
  );
}
