import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { todoAdd, todoRemove } from "../redux-toolkit/slice/todoSlice.js";
import { useEffect } from "react";
import { getTodos } from "../redux-toolkit/middlewares/todoMiddleware.js";
import {
  selectTodoList,
  selectTodoStatus,
  selectTodoListCompleted,
} from "../redux-toolkit/slice/todoSlice.js";

export default function TodoList() {
  const todoSchema = z.object({
    todo: z.string().min(1, "Todo is required"),
  });

  const todoList = useSelector(selectTodoList);
  const status = useSelector(selectTodoStatus);
  const todoListCompleted = useSelector((state) =>
    selectTodoListCompleted(state),
  );
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
    dispatch(todoAdd(data.todo));
    console.log(data);
    reset();
  };

  const handleRemove = (index) => {
    dispatch(todoRemove(index));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (status === "error") {
    return <div>Error loading todos</div>;
  }

  return (
    <div className="w-120 h-100 mx-auto mt-8 p-4 bg-cyan-100 rounded shadow">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-5">
        Todo List
      </h1>
      {status === "pending" ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <ul className="list-disc pl-5 mb-5">
          {todoList.map((todo, index) => (
            <div className="flex items-center justify-between" key={index}>
              <li>{todo.title}</li>
              <span
                className="text-red-500 cursor-pointer text-xl p-1"
                onClick={() => handleRemove(index)}
              >
                x
              </span>
            </div>
          ))}
        </ul>
      )}
      <h2>Todo List (Completed)</h2>
      <ul className="list-disc pl-5 mb-5">
        {todoListCompleted.map((todo, index) => (
          <div
            className="flex items-center justify-between"
            style={{ textDecoration: "line-through" }}
            key={index}
          >
            <li>{todo.title}</li>
          </div>
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
