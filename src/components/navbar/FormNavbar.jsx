import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            📖 Ma'anil Hadis App
          </Link>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          <NavLink to="/bookmark" className="nav-link">Bookmark</NavLink>
            {/* <NavLink to="/hadis" onClick={() => setMenuOpen(false)}>
              Daftar Hadis
            </NavLink> */}

            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              Tentang Kami
            </NavLink>
          </div>

          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
