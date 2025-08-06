export default function Login() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Вход</h1>
      <form className="flex flex-col gap-2 max-w-sm">
        <input className="border p-2" placeholder="Электронная почта" />
        <input className="border p-2" placeholder="Пароль" type="password" />
        <button className="bg-blue-500 text-white p-2">Войти</button>
      </form>
    </div>
  );
}
