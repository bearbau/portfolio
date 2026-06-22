import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="col" style={{ padding: "28px 10px", flex: "50%" }}>
          <h1>
            <a href="/" style={{ color: "var(--dark)" }}>
              <i className="fa-solid fa-code"></i>&nbsp;bearbau
            </a>
          </h1>
        </div>
        <div className="header">
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
      </div>
    </>
  );
}
