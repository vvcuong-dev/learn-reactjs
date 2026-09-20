import { useState } from "react";

type ContentProps = {
  name: string;
  email: string;
  status: "active" | "inactive";
};

export default function Content({ name, email, status }: ContentProps) {
  const [title, setTitle] = useState<string | null>("Content Component");

  const handleClick = () => {
    setTitle("Button Clicked!");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        {status === "active" ? (
          <p className="text-green-500">Status: Active</p>
        ) : (
          <p className="text-red-500">Status: Inactive</p>
        )}
        <p>
          Text: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo, <span className="font-bold">{title}</span>
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}

/**
 * mx-auto: This class centers the element horizontally (nghĩa tiếng việt: căn giữa theo chiều ngang) by setting the left and right margins to auto.
 */
