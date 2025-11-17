export default function ChatInput({ value, onChange, onSend }) {
  return (
    <div className="flex p-4 bg-white">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type a message..."
        className="flex-1 border p-2 rounded mr-2"
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
      <button
        onClick={onSend}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
