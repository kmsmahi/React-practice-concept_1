import { useEffect, useState } from "react";
import Users from "./Users";

export default function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Main</h1>
      <Users users={users} />
    </div>
  );
}
