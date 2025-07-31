import { useEffect, useState, useMemo } from "react";
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

  // Estados para filtros
  const [filterName, setFilterName] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [filterOwner, setFilterOwner] = useState("");

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

  // Crear lista única de lenguajes y propietarios para los selects
  const languages = useMemo(() => {
    const langs = repos.map((r) => r.language).filter(Boolean);
    return Array.from(new Set(langs)).sort();
  }, [repos]);

  const owners = useMemo(() => {
    const uniqueOwners = repos.map((r) => r.ownerUsername);
    return Array.from(new Set(uniqueOwners)).sort();
  }, [repos]);

  // Filtrado combinado
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchName = repo.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const matchLang = filterLanguage
        ? repo.language === filterLanguage
        : true;
      const matchOwner = filterOwner
        ? repo.ownerUsername === filterOwner
        : true;
      return matchName && matchLang && matchOwner;
    });
  }, [repos, filterName, filterLanguage, filterOwner]);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Repositorios del Equipo
      </h1>

      {/* FILTROS */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:space-x-4 gap-4">
        <input
          type="text"
          placeholder="Filtrar por nombre"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          className="flex-1 px-3 py-2 border rounded"
        />

        <select
          value={filterLanguage}
          onChange={(e) => setFilterLanguage(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="">Todos los lenguajes</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <select
          value={filterOwner}
          onChange={(e) => setFilterOwner(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="">Todos los propietarios</option>
          {owners.map((owner) => (
            <option key={owner} value={owner}>
              {owner}
            </option>
          ))}
        </select>
      </div>

      {/* LISTA DE REPOS */}
      {loading ? (
        <p className="text-center text-gray-500">Cargando repositorios...</p>
      ) : filteredRepos.length === 0 ? (
        <p className="text-center text-gray-500">
          No se encontraron repositorios.
        </p>
      ) : (
        <div className="grid gap-6">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold text-lg hover:underline"
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
