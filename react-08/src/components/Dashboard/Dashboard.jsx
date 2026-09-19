import Profile from "./Profile";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center align-middle flex-col gap-4">
      <h2 className="text-3xl text-blue-500  text-center font-bold mt-10">
        Hello my fiend, welcome to the dashboard
      </h2>
      <Profile />
    </div>
  );
}
