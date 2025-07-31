import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// eslint-disable-next-line react-refresh/only-export-components
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Auth() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Iniciar sesión con GitHub</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Login con GitHub
      </button>
    </div>
  );
}

export default Auth;
