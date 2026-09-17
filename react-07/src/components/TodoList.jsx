import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function TodoList() {
  const todoSchema = z.object({
    todo: z.string().min(1, "Todo is required"),
  });

  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todo: "",
    },
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data) => {
    dispatch({ type: "todoList/add", payload: data.todo });
    console.log(data);
    reset();
  };

  console.log("errors", errors);

  return (
    <div className="w-120 h-100 mx-auto mt-8 p-4 bg-cyan-100 rounded shadow">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-5">
        Todo List
      </h1>
      <ul className="list-disc pl-5 mb-5">
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <hr />
      <form
        className="flex items-center gap-4 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-4">
          <input
            type="text"
            name="todo"
            placeholder="Add a new todo"
            className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("todo")}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>
      <div className="mt-2">
        {errors.todo && (
          <span className="text-red-500 text-sm">{errors.todo.message}</span>
        )}
      </div>
    </div>
  );
}
