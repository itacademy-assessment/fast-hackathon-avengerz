import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import About from "./pages/About";
import SearchUsers from "./pages/SearchUsers";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between flex-wrap">
        <div className="flex gap-4 items-center">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/profile">Profile</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/search">Buscar Usuarios</Link>
        </div>
        <Link className="hover:underline" to="/auth">Login</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchUsers />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

