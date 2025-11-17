export default function TypingIndicator({ users }) {
  if (users.length === 0) return null;
  return (
    <div className="p-2 text-gray-600 text-sm">
      {users.join(", ")} {users.length === 1 ? "is" : "are"} typing...
    </div>
  );
}
