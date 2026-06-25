import { useState } from "react";

function Skillset() {
  const [activeView, setActiveView] = useState("about-hero");

  return (
    <>
      <div className="hero-bottom">
        <div className="nav-container">
          <div
            className="nav-col"
            onClick={() => setActiveView("front-end-hero")}
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            <i className="fa-solid fa-caret-down"></i>&nbsp;Front-end
          </div>
          <div
            className="nav-col"
            onClick={() => setActiveView("pl-hero")}
            style={{
              backgroundColor: "#6c8ec4",
            }}
          >
            <i className="fa-solid fa-caret-down"></i>&nbsp;Back-end
          </div>
          <div
            className="nav-col"
            onClick={() => setActiveView("bash-hero")}
            style={{
              backgroundColor: "#8aa3c0",
            }}
          >
            <i className="fa-solid fa-caret-down"></i>&nbsp;Shell Scripting
          </div>
        </div>
        {activeView !== "about-hero" && (
          <button
            className="link-circle"
            onClick={() => setActiveView("about-hero")}
          >
            <i className="fa-solid fa-house"></i>
          </button>
        )}

        {activeView === "about-hero" && (
          <div className="hero-info">
            <h1 style={{ fontSize: "2rem" }}>What I do</h1>
            <p>
              I am a <u>front-end web developer</u> currently pursuing a degree
              in Computer Science. In my spare time, I study cybersecurity,
              solve CTF challenges, and develop scripts using Bash.
            </p>
            <br />
            <div className="stack-row">
              <button className="stack">
                <i className="fa-brands fa-html5"></i>html
              </button>
              <button className="stack">
                <i className="fa-brands fa-css"></i>css
              </button>
              <button className="stack">
                <i className="fa-brands fa-bootstrap"></i>bootstrap
              </button>
              <button className="stack">
                <i className="fa-brands fa-react"></i>react
              </button>
              <button className="stack">
                <i className="fa-brands fa-typescript"></i>typescript
              </button>
              <button className="stack">
                <i className="fa-brands fa-figma"></i>figma
              </button>
              <button className="stack">
                <i className="fa-brands fa-java"></i>&nbsp;java
              </button>
              <button className="stack">
                <i className="fa-brands fa-python"></i>&nbsp;python
              </button>
              <button className="stack">
                <i className="fa-solid fa-database"></i>&nbsp;SQL
              </button>
              <button className="stack">
                <i className="fa-brands fa-linux"></i>&nbsp;linux
              </button>
              <button className="stack">
                <i className="fa-solid fa-terminal"></i>&nbsp;bash
              </button>
              <button className="stack">
                <i className="fa-brands fa-docker"></i>&nbsp;docker
              </button>
            </div>
            <br />
          </div>
        )}

        {/* front end dev */}
        {activeView === "front-end-hero" && (
          <div className="hero-info">
            <h1 style={{ fontSize: "2rem" }}>Front-end</h1>
            <p>
              I discovered my passion in front-end back in 2020 when I was
              tinkering bootstrap elements on a website. Nowadays, I use React
              and TypeScript. &nbsp;
            </p>
            <br />
            <div className="stack-row">
              <button className="stack">
                <i className="fa-brands fa-html5"></i>html
              </button>
              <button className="stack">
                <i className="fa-brands fa-css"></i>css
              </button>
              <button className="stack">
                <i className="fa-brands fa-bootstrap"></i>bootstrap
              </button>
              <button className="stack">
                <i className="fa-brands fa-react"></i>react
              </button>
              <button className="stack">
                <i className="fa-brands fa-typescript"></i>typescript
              </button>
              <button className="stack">
                <i className="fa-brands fa-figma"></i>figma
              </button>
            </div>
          </div>
        )}

        {/* bash scripting */}
        {activeView === "bash-hero" && (
          <div className="hero-info">
            <h1 style={{ fontSize: "2rem" }}>Shell Scripting</h1>
            <p>
              On my free time, I solve CTFs and study Bash scripting. but I
              mostly study it for the love of the game. I dump my bash scripts
              on
              <a href="https://github.com/bearbau/bearbash">
                &nbsp;<u>bearbash</u>
              </a>
              .
            </p>
            <br />
            <div className="stack-row">
              <button className="stack">
                <i className="fa-brands fa-linux"></i>&nbsp;linux
              </button>
              <button className="stack">
                <i className="fa-solid fa-terminal"></i>&nbsp;bash
              </button>
              <button className="stack">
                <i className="fa-brands fa-docker"></i>&nbsp;docker
              </button>
            </div>
          </div>
        )}

        {/* programming languages */}
        {activeView === "pl-hero" && (
          <div className="hero-info">
            <h1 style={{ fontSize: "2rem" }}>Back-end</h1>
            <p>
              I study Computer Science and these are some of the languages that
              I had to study during my degree.
            </p>
            <br />
            <div className="stack-row">
              <button className="stack">
                <i className="fa-brands fa-java"></i>&nbsp;java
              </button>
              <button className="stack">
                <i className="fa-brands fa-python"></i>&nbsp;python
              </button>
              <button className="stack">
                <i className="fa-solid fa-database"></i>&nbsp;SQL
              </button>
            </div>
          </div>
        )}

        {/* button on clicks -------------------------------------------- */}
      </div>
    </>
  );
}

export default Skillset;
