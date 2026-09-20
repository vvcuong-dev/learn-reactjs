import type { CSSProperties } from "react";

export type User = {
  id: number | string;
  name: string;
  email: string;
  style?: CSSProperties;
  histories?: {
    id: number | string;
    name: string;
    status: boolean;
  }[];
};

export type UserProps = {
  user: User;
};

export default function UserItem({ user }: UserProps) {
  return (
    <div className="p-4 m-2 border rounded shadow" style={user.style}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {user.histories?.map((history) => (
        <div key={history.id}>
          <p>{history.name}</p>
          <p>{history.status ? "Active" : "Inactive"}</p>
        </div>
      ))}
    </div>
  );
}
