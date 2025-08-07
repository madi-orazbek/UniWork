import { useParams } from 'react-router-dom';

export default function Chat() {
  const { projectId } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Чат проекта {projectId}</h1>
      <div className="border p-2 h-64 mb-2 overflow-y-scroll">Сообщения...</div>
      <input className="border p-2 w-full" placeholder="Введите сообщение" />
    </div>
  );
}
