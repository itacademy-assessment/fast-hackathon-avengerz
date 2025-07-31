// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import About from "./pages/About";
import SearchUsers from "./pages/SearchUsers"; // NUEVO

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-between flex-wrap">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Buscar Usuarios</Link> {/* NUEVO */}
        </div>
        <Link to="/auth">Login</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchUsers />} /> {/* NUEVO */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
