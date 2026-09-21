import { useState } from "react";

type User = {
  name: string;
  email: string;
};

function App() {
  const [form, setForm] = useState<User | undefined | null>();

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value } as User);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 p-4 border rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name..."
            className="border rounded-md p-2"
            onChange={handleChangeValue}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email..."
            className="border rounded-md p-2"
            onChange={handleChangeValue}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
