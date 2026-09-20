import UserItem from "./UserItem";
import type { User } from "./UserItem";

type UserListProps = {
  users: User[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <div className="flex flex-col items-center py-2">
      <h2 className="text-xl font-bold text-gray-800">User List</h2>
      <div className="h-100 overflow-auto">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
