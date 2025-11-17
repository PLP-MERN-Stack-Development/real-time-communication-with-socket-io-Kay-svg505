import { useState, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message";
import UserList from "../components/UserList";
import TypingIndicator from "../components/TypingIndicator";

export default function Chat({ username }) {
  const { connect, disconnect, messages, sendMessage, users, typingUsers, setTyping } = useSocket();
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    connect(username);
    return () => disconnect();
  }, [username]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    sendMessage(newMessage);
    setNewMessage("");
    setTyping(false);
  };

  const handleTyping = (e) => {
    setNewMessage(e.target.value);
    setTyping(e.target.value.length > 0);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <UserList users={users} />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} own={msg.sender === username} />
          ))}
        </div>
        <TypingIndicator users={typingUsers} />
        <ChatInput value={newMessage} onChange={handleTyping} onSend={handleSend} />
      </div>
    </div>
  );
}
