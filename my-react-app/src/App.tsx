import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// Define a TypeScript interface for user data
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data.data);
      setError(""); // Clear any previous errors
    } catch {
      setError("Failed to fetch data");
    }
  };

  return (
    <div className="App">
      <h1>User Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
