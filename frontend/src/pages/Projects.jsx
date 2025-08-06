import { Link } from 'react-router-dom';

const dummyProjects = [
  { id: 1, title: 'Website Development', category: 'web' },
  { id: 2, title: 'Logo Design', category: 'design' },
];

export default function Projects() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Projects</h1>
      <ul className="space-y-2">
        {dummyProjects.map((p) => (
          <li key={p.id} className="border p-2">
            <Link to={`/projects/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
