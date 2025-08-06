import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Profile from './pages/Profile.jsx';
import MyProjects from './pages/MyProjects.jsx';
import Chat from './pages/Chat.jsx';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Проекты</Link>
        <Link to="/my-projects">Мои проекты</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/login">Вход</Link>
        <Link to="/register">Регистрация</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/chat/:projectId" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
