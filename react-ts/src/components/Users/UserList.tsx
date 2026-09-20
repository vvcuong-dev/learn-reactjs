import users from "./data.json";
import UsersDetail from "./UserItem";

export default function Users() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h2 className="text-xl font-bold text-gray-800">User List</h2>
      <div>
        {users.map((user) => {
          console.log("Rendering user:", user);
          return <UsersDetail key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}
