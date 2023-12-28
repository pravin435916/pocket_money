// TableComponent.js
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/admin/users")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [{}]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#1A1D3E]">
      <table className="min-w-full bg-[#1A1D3E] border border-gray-300 text-white">
        <thead>
          <tr>
            <th className="py-2 px-0 border-b">ID</th>
            <th className="py-2 px-0 border-b">Username</th>
            <th className="py-2 px-0 border-b">Email</th>
            <th className="py-2 px-0 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b text-center">{user._id}</td>
              <td className="py-2 px-4 border-b text-center">{user.username}</td>
              <td className="py-2 px-4 border-b text-center">{user.email}</td>
              <td className="py-2 px-4 border-b text-center">
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
