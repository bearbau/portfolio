import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className="header-container">
        {/* logo */}
        <Link
          to="/"
          className={`title-logo ${isHome ? "title-logo-light" : "title-logo-dark"}`}
        >
          <i className="fa-solid fa-code"></i>&nbsp;bearbau
        </Link>
        {/* navbar - checks if its on home or not on home*/}
        <nav className={`navbar ${isHome ? "navbar-light" : "navbar-dark"}`}>
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to="/blog">blog</Link>
        </nav>
        {/* contact button */}

        <button
          className={`contact-btn ${isHome ? "contact-btn-light" : "contact-btn-dark"}`}
          onClick={() => navigate("/contact")}
        >
          contact&nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
