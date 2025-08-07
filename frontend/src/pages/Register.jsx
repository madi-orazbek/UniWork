import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Ошибка регистрации');
      localStorage.setItem('token', data.token);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

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
      <h1 className="text-2xl mb-4">Регистрация</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input
          className="border p-2"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Имя"
        />
        <input
          className="border p-2"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Электронная почта"
        />
        <input
          className="border p-2"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Пароль"
          type="password"
        />
        <select className="border p-2" name="role" value={form.role} onChange={handleChange}>
          <option value="student">Студент</option>
          <option value="client">Клиент</option>
        </select>
        <button className="bg-green-500 text-white p-2">Register</button>
        {error && <div className="text-red-500">{error}</div>}
        <button className="bg-green-500 text-white p-2">Зарегистрироваться</button>
      </form>
    </div>
  );
}
