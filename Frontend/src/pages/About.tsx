import { useEffect, useState } from "react";

const usernames = ["mstne03", "clos266", "annahico", "edgarpomar", "justmove1987"];

type GithubProfile = {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
};

function About() {
  const [profiles, setProfiles] = useState<GithubProfile[]>([]);

  useEffect(() => {
    async function fetchProfiles() {
      const responses = await Promise.all(
        usernames.map((username) =>
          fetch(`https://api.github.com/users/${username}`).then((res) => res.json())
        )
      );
      setProfiles(responses);
    }

    fetchProfiles();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Sobre el Equip AvengersZ</h1>
      <p className="text-center text-gray-600 mb-10">
        Aquest projecte ha estat desenvolupat per un equip de cinc membres amb talents complementaris. Coneix-nos!
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {profiles.map((profile) => (
            <div key={profile.login} className="bg-white shadow-md p-6 rounded-lg border text-center">
            <img
              src={profile.avatar_url}
              alt={`${profile.login} avatar`}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{profile.name || profile.login}</h2>
            <p className="text-sm text-gray-500">@{profile.login}</p>
            <p className="mt-2 text-gray-700">{profile.bio || "Sense biografia definida."}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default About;
