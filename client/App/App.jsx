import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUsername={setUsername} />} />
        <Route path="/chat" element={<Chat username={username} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
