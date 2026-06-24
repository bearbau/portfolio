import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        {/* logo */}
        <div className="header-col">
          <span className="title-logo">
            <a href="/" style={{ color: "var(--dark)" }}>
              <i className="fa-solid fa-code"></i>&nbsp;bearbau
            </a>
          </span>
        </div>
        {/* navbar */}
        <div className="header-col">
          <nav className="navbar">
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/blog">blog</Link>
          </nav>
        </div>
        {/* contact button */}
        <button className="contact-btn">
          contact&nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
