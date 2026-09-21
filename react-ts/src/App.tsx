import { useRef } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<string[]>([]);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value: string = inputRef.current?.value || "";

    console.log("Current values:", valueRef.current); // Log the current array of values

    valueRef.current.push(value || "");

    console.log("Updated values:", valueRef.current); // Log the updated array of values
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 border rounded-md shadow-md"
      >
        <input
          type="text"
          placeholder="Enter something..."
          className="border rounded-md p-2"
          ref={inputRef}
        />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
