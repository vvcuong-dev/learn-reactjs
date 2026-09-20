import { useForm } from "react-hook-form";

export type UserFormValues = {
  name: string;
  email: string;
};

type UserAddProps = {
  onAdd: (values: UserFormValues) => void;
};

export default function UserAdd({ onAdd }: UserAddProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleSubmitForm = (data: UserFormValues) => {
    onAdd(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center py-2">
      <h1 className="text-xl font-bold text-gray-800">User Add</h1>
      <form
        className="flex flex-col gap-4 p-4 border rounded shadow w-160"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-8 px-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is invalid",
              },
            })}
            className="mt-1 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-8 px-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
