type UserProps = {
  user: {
    id: number | string;
    name: string;
    email: string;
    style?: React.CSSProperties;
    histories: {
      id: number | string;
      name: string;
      status: boolean;
    }[];
  };
};

export default function UserItem({ user }: UserProps) {
  return (
    <div className="p-4 m-2 border rounded shadow" style={user.style}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {user.histories.map((history) => (
        <div key={history.id} className="p-2 m-1 border rounded shadow">
          <p>{history.name}</p>
          <p>{history.status ? "Active" : "Inactive"}</p>
        </div>
      ))}
    </div>
  );
}
