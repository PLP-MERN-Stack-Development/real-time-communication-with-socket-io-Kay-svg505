export default function Message({ message, own }) {
  return (
    <div className={`mb-2 p-2 rounded ${own ? "bg-blue-200 self-end" : "bg-gray-200 self-start"}`}>
      {!message.system && <p className="text-sm text-gray-700">{message.sender}</p>}
      <p>{message.message}</p>
      <span className="text-xs text-gray-500">{new Date(message.timestamp).toLocaleTimeString()}</span>
    </div>
  );
}
