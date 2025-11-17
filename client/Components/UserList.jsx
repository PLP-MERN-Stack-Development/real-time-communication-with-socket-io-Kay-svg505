export default function UserList({ users }) {
  return (
    <div className="w-64 bg-white p-4 border-r">
      <h3 className="text-xl mb-2">Online Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
