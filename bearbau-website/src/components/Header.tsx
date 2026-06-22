import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <span style={{ color: "var(--light)", fontSize: "18px" }}>bearbau</span>
      <nav className="navbar">
        <Link to="/" className="link">
          home
        </Link>
        <Link to="/about" className="link">
          about
        </Link>
        <Link to="/projects" className="link">
          projects
        </Link>
        <Link to="/blog" className="link">
          blog
        </Link>
      </nav>
    </div>
  );
}
