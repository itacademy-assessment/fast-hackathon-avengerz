/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { User } from '@supabase/supabase-js';

const Profile = () => {
  const [repos, setRepos] = useState([]);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserAndRepos = async () => {
      const sessionRes = await supabase.auth.getSession();
      const token = sessionRes.data?.session?.provider_token;

      if (!token) return;

      const userRes = await supabase.auth.getUser();
      setUser(userRes.data.user);

      const repoRes = await fetch('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
        },
      });

      const data = await repoRes.json();
      setRepos(data);
    };

    fetchUserAndRepos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Repos de {user?.user_metadata?.user_name}</h1>
      <ul className="mt-4 space-y-2">
        {repos.map((repo: any) => (
          <li key={repo.id} className="p-2 bg-gray-100 rounded">
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600">
              {repo.name}
            </a>
            <p className="text-sm text-gray-600">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
