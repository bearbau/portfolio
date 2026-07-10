import "./style.css";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
