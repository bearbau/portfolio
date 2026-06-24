import "./style.css";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blog from "./routes/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
