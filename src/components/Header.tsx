import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        {/* logo */}
        <a href="/" className="title-logo">
          <i className="fa-solid fa-code"></i>&nbsp;bearbau
        </a>
        {/* navbar */}
        <nav className="navbar">
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to="/blog">blog</Link>
        </nav>
        {/* contact button */}
        <button className="contact-btn">
          contact&nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
