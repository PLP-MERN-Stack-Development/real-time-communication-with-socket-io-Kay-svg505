import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUsername }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setUsername(name);
    localStorage.setItem("username", name);
    navigate("/chat");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl mb-4">Enter Username</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Join Chat
        </button>
      </form>
    </div>
  );
}
