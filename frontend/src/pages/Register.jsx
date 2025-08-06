export default function Register() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Register</h1>
      <form className="flex flex-col gap-2 max-w-sm">
        <input className="border p-2" placeholder="Name" />
        <input className="border p-2" placeholder="Email" />
        <input className="border p-2" placeholder="Password" type="password" />
        <select className="border p-2">
          <option value="student">Student</option>
          <option value="client">Client</option>
        </select>
        <button className="bg-green-500 text-white p-2">Register</button>
      </form>
    </div>
  );
}
