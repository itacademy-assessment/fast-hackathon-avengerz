import { useEffect, useState } from "react";
import axios from "axios";

const teamUsernames = [
  "clos266",
  "mstne03",
  "annahico",
  "edgarpomar",
  "justmove1987",
];

function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllRepos = async () => {
      const allRepos = [];

      for (const username of teamUsernames) {
        try {
          const res = await axios.get(
            `https://api.github.com/users/${username}/repos`
          );
          const userRepos = res.data.map((repo) => ({
            ...repo,
            ownerUsername: username,
          }));
          allRepos.push(...userRepos);
        } catch (error) {
          console.error(`Error al obtener repos de ${username}:`, error);
        }
      }

      setRepos(allRepos);
      setLoading(false);
    };

    fetchAllRepos();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Repositorios del Equipo
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Cargando repositorios...</p>
      ) : (
        <div className="grid gap-4">
          {repos.map((repo) => (
            <div key={repo.id} className="border p-4 rounded shadow">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold text-lg"
              >
                {repo.name}
              </a>
              <p className="text-sm text-gray-700 mb-1">{repo.description}</p>
              <div className="text-xs text-gray-500">
                Lenguaje: {repo.language || "No especificado"} | Propietario:{" "}
                {repo.ownerUsername}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
