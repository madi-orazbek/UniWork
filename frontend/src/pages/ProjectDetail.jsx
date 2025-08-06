import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Project {id}</h1>
      <p>Description of project {id}.</p>
    </div>
  );
}
