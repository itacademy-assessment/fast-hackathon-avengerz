import { useState } from "react";
import axios from "axios";

function SearchUsers() {
  const [inputUser, setInputUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepos = async () => {
    if (!inputUser.trim()) return;
    setLoading(true);
    setError("");
    setRepos([]);

    try {
      const res = await axios.get(
        `https://api.github.com/users/${inputUser}/repos`
      );
      setRepos(res.data);
    } catch (err) {
      setError("Could not fetch repositories. Is this a valid user?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Search Repositories by User
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
          className="flex-grow border px-3 py-2 rounded"
        />
        <button
          onClick={fetchRepos}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-center text-gray-500">Loading repositories...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {repos.length > 0 && (
        <div className="space-y-3">
          {repos.map((repo) => (
            <div key={repo.id} className="border p-4 rounded shadow">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold"
              >
                {repo.name}
              </a>
              <p className="text-sm text-gray-700">{repo.description}</p>
              <p className="text-xs text-gray-500">
                Language: {repo.language || "N/A"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchUsers;