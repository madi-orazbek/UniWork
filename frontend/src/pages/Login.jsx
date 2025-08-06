export default function Login() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      <form className="flex flex-col gap-2 max-w-sm">
        <input className="border p-2" placeholder="Email" />
        <input className="border p-2" placeholder="Password" type="password" />
        <button className="bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  );
}
