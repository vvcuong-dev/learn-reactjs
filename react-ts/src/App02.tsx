import { useState } from "react";
import UserAdd from "./components/Users/UserAdd";
import type { UserFormValues } from "./components/Users/UserAdd";
import UserList from "./components/Users/UserList";
import data from "./components/Users/data.json";
import type { User } from "./components/Users/UserItem";

export default function App() {
  const [users, setUsers] = useState<User[]>(data);

  const handleAddUser = ({ name, email }: UserFormValues) => {
    setUsers((prev) => [
      ...prev,
      { id: Date.now(), name, email, histories: [] },
    ]);
  };

  return (
    <div>
      <UserList users={users} />
      <UserAdd onAdd={handleAddUser} />
    </div>
  );
}
