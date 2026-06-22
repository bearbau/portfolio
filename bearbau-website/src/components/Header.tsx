import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>bearbau</h1>
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
      </nav>
    </div>
  );
}
