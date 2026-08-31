import { useState } from "react";

function UserComponent() {
  const [user, setUser] = useState("");

  const handleClick = () => {
    setUser("Cuong vu viet");
  };

  return (
    <div>
      <h1>Thông tin người dùng: {user}</h1>
      <button onClick={handleClick}>Cick me</button>
    </div>
  );
}

export default UserComponent;
