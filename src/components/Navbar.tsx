import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <Link to="/" className="border px-5 flex-1">
          home
        </Link>
        <Link to="/projects" className="border px-5 flex-1">
          projects
        </Link>
        <Link to="/blog" className="border px-5 flex-1">
          blog
        </Link>
      </div>
    </>
  );
}
