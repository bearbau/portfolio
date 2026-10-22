import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-6">
        <Link to="/" className="navbar-item">
          home
        </Link>
        <Link to="/projects" className="navbar-item">
          projects
        </Link>
        <Link to="/blog" className="navbar-item">
          blog
        </Link>
      </div>
    </>
  );
}
