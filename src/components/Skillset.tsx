import { useState } from "react";
import background from "../assets/hero-wallpaper.jpg";

function Skillset() {
  const [activeView, setActiveView] = useState("about-hero");

  return (
    <>
      {activeView === "about-hero" && (
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1 style={{ fontSize: "2rem" }}>What I do</h1>
          <p>
            I am a <u>front-end web developer</u> currently pursuing a degree in
            Computer Science. In my spare time, I study cybersecurity, solve CTF
            challenges, and develop scripts using Bash.
          </p>
          <br />
          <div className="btn-row">
            <button className="btn-col">
              <i className="fa-brands fa-html5"></i>html
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-css"></i>css
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-bootstrap"></i>bootstrap
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-react"></i>react
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-typescript"></i>typescript
            </button>
          </div>
        </div>
      )}

      {/* front end dev ---------------------------------------------------- */}
      {activeView === "front-end-hero" && (
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1 style={{ fontSize: "2rem" }}>Front End Development</h1>
          <p>
            I have been making ah basta ganun since 2020 with HTML, CSS and
            Bootstrap. Nung shs ako basta ganun.
          </p>
          <br />
          <div className="btn-row">
            <button className="btn-col">
              <i className="fa-brands fa-html5"></i>html
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-css"></i>css
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-bootstrap"></i>bootstrap
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-react"></i>react
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-typescript"></i>typescript
            </button>
          </div>
        </div>
      )}

      {/* bash scripting  ----------------------------------------------------*/}
      {activeView === "bash-hero" && (
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1 style={{ fontSize: "2rem" }}>Bash Scripting</h1>
          <p>I have bash scripting blah blah blah</p>
          <br />
          <div className="btn-row">
            <button className="btn-col">
              <i className="fa-brands fa-linux"></i>&nbsp;Linux
            </button>
            <button className="btn-col">
              <i className="fa-solid fa-terminal"></i>&nbsp;Bash
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-docker"></i>&nbsp;Docker
            </button>
          </div>
        </div>
      )}

      {/* programming languergs*/}
      {activeView === "pl-hero" && (
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1 style={{ fontSize: "2rem" }}>Programming languages</h1>
          <p>I study Computer Science. Lol.</p>
          <br />
          <div className="btn-row">
            <button className="btn-col">
              <i className="fa-brands fa-java"></i>&nbsp;Java
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-python"></i>&nbsp;Python
            </button>
            <button className="btn-col">
              <i className="fa-solid fa-database"></i>&nbsp;SQL
            </button>
          </div>
        </div>
      )}

      {/* button on clicks --------------------------------------------------------------------*/}

      <div className="hero-col-2" style={{ flex: "50%" }}>
        <div className="nav-container">
          <div
            className="nav-col"
            onClick={() => setActiveView("front-end-hero")}
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            Front End Development
          </div>
          <div
            className="nav-col"
            onClick={() => setActiveView("bash-hero")}
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            Bash Scripting
          </div>
          <div
            className="nav-col"
            onClick={() => setActiveView("pl-hero")}
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            Programming languages
          </div>
        </div>
      </div>
    </>
  );
}

export default Skillset;
