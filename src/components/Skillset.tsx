import { useState } from "react";
import placeholder from "../assets/hero-wallpaper.jpg";

function Skillset() {
  const [activeView, setActiveView] = useState("about-hero");

  return (
    <>
      <div className="cntr-row">
        <div
          className="col"
          style={{ flex: "50%", height: "50vh", paddingRight: "1rem" }}
        >
          <h1>What I do</h1>
          <p>
            I am a front-end web developer and UI/UX designer who has been
            developing and conceptualizing web designs since 2020. <br />
            <br />
            Currently pursuing a degree in Computer Science, I also spend my
            free time studying cybersecurity, solving CTF challenges, and
            writing Bash scripts.
          </p>
          <br />
          <div className="stack-row">
            <button className="stack">
              <i className="fa-brands fa-html5"></i>&nbsp;html
            </button>
            <button className="stack">
              <i className="fa-brands fa-css"></i>&nbsp;css
            </button>
            <button className="stack">
              <i className="fa-brands fa-bootstrap"></i>&nbsp;bootstrap
            </button>
            <button className="stack">
              <i className="fa-brands fa-react"></i>&nbsp;react
            </button>{" "}
            <button className="stack">
              <i className="fa-brands fa-js"></i>&nbsp;javascript
            </button>
            <button className="stack">
              <i className="fa-brands fa-typescript"></i>&nbsp;typescript
            </button>
            <button className="stack">
              <i className="fa-solid fa-bolt-lightning"></i>&nbsp;vite
            </button>
            <button className="stack">
              <i className="fa-brands fa-figma"></i>&nbsp;figma
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
        </div>
        <div
          className="col"
          style={{ flex: "50%", flexDirection: "row", padding: "0px" }}
        >
          <div className="oval">
            <p>front-end</p>
          </div>
          <div className="oval">
            <p>back-end</p>
          </div>
          <div className="oval">
            <p>shell-scripting</p>
          </div>
        </div>
      </div>

      {/*<div className="hero-bottom">
        <div className="nav-container">
          <div
            className={`nav-col ${activeView === "front-end-hero" ? "nav-col--active" : ""}`}
            onClick={() => setActiveView("front-end-hero")}
          >
            <i className="fa-solid fa-caret-down"></i>&nbsp;Front-end
          </div>
          <div
            className={`nav-col ${activeView === "pl-hero" ? "nav-col--active" : ""}`}
            onClick={() => setActiveView("pl-hero")}
          >
            <i className="fa-solid fa-caret-down"></i>&nbsp;Back-end
          </div>
          <div
            className={`nav-col ${activeView === "bash-hero" ? "nav-col--active" : ""}`}
            onClick={() => setActiveView("bash-hero")}
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
          <div className="hero-info" style={{ padding: "2rem 2rem 0rem 2rem" }}>
            <h1 style={{ fontSize: "2rem" }}>What I do</h1>
            <p>
              I am a <u>front-end web developer and UI/UX designer</u> currently
              studying Computer Science.
              On the side, I study cybersec, solve CTFs, and write Bash scripts.
            </p>

            <br />
            <div className="stack-row">
              <button className="stack">
                <i className="fa-brands fa-html5"></i>&nbsp;html
              </button>
              <button className="stack">
                <i className="fa-brands fa-css"></i>&nbsp;css
              </button>
              <button className="stack">
                <i className="fa-brands fa-bootstrap"></i>&nbsp;bootstrap
              </button>
              <button className="stack">
                <i className="fa-brands fa-react"></i>&nbsp;react
              </button>
              <button className="stack">
                <i className="fa-brands fa-js"></i>&nbsp;javascript
              </button>
              <button className="stack">
                <i className="fa-brands fa-typescript"></i>&nbsp;typescript
              </button>
              <button className="stack">
                <i className="fa-solid fa-bolt-lightning"></i>&nbsp;vite
              </button>
              <button className="stack">
                <i className="fa-brands fa-figma"></i>&nbsp;figma
              </button>
              <button
                className="stack"
                style={{ backgroundColor: "var(--primary-darker)" }}
              >
                <i className="fa-brands fa-java"></i>&nbsp;java
              </button>
              <button
                className="stack"
                style={{ backgroundColor: "var(--primary-darker)" }}
              >
                <i className="fa-brands fa-python"></i>&nbsp;python
              </button>
              <button
                className="stack"
                style={{ backgroundColor: "var(--primary-darker)" }}
              >
                <i className="fa-solid fa-database"></i>&nbsp;SQL
              </button>
              <button
                className="stack"
                style={{
                  backgroundColor: "var(--primary-muted)",
                }}
              >
                <i className="fa-brands fa-linux"></i>&nbsp;linux
              </button>
              <button
                className="stack"
                style={{
                  backgroundColor: "var(--primary-muted)",
                }}
              >
                <i className="fa-solid fa-terminal"></i>&nbsp;bash
              </button>
              <button
                className="stack"
                style={{
                  backgroundColor: "var(--primary-muted)",
                }}
              >
                <i className="fa-brands fa-docker"></i>&nbsp;docker
              </button>
            </div>
            <br />
          </div>
        )}

        {activeView === "front-end-hero" && (
          <div className="hero-info">
            <h1 style={{ fontSize: "2rem" }}>Front-end</h1>
            <p>
              I discovered my passion in front-end back in 2020 when I was
              tinkering with Bootstrap on a website. Nowadays, I use React and
              TypeScript. &nbsp;
            </p>
            <br />
            <div className="stack-row">
              <button className="stack">
                <i className="fa-brands fa-html5"></i>&nbsp;html
              </button>
              <button className="stack">
                <i className="fa-brands fa-css"></i>&nbsp;css
              </button>
              <button className="stack">
                <i className="fa-brands fa-bootstrap"></i>&nbsp;bootstrap
              </button>
              <button className="stack">
                <i className="fa-brands fa-react"></i>&nbsp;react
              </button>
              <button className="stack">
                <i className="fa-brands fa-js"></i>&nbsp;javascript
              </button>
              <button className="stack">
                <i className="fa-brands fa-typescript"></i>&nbsp;typescript
              </button>
              <button className="stack">
                <i className="fa-solid fa-bolt-lightning"></i>&nbsp;vite
              </button>
              <button className="stack">
                <i className="fa-brands fa-figma"></i>&nbsp;figma
              </button>
            </div>
          </div>
        )}
        {activeView === "pl-hero" && (
          <div className="hero-info">
            <h1 style={{ fontSize: "2rem" }}>Back-end</h1>
            <p>
              These are the languages I picked up through my Computer Science
              degree (especially with Java).
            </p>
            <br />
            <div className="stack-row">
              <button
                className="stack"
                style={{ backgroundColor: "var(--primary-darker)" }}
              >
                <i className="fa-brands fa-java"></i>&nbsp;java
              </button>
              <button
                className="stack"
                style={{ backgroundColor: "var(--primary-darker)" }}
              >
                <i className="fa-brands fa-python"></i>&nbsp;python
              </button>
              <button
                className="stack"
                style={{ backgroundColor: "var(--primary-darker)" }}
              >
                <i className="fa-solid fa-database"></i>&nbsp;SQL
              </button>
            </div>
          </div>
        )}
        {activeView === "bash-hero" && (
          <div className="hero-info">
            <h1 style={{ fontSize: "2rem" }}>Shell Scripting</h1>
            <p>
              In my free time, I solve CTFs and study Bash scripting, but I
              mostly study it for the love of the game. I dump my Bash scripts
              on
              <a href="https://github.com/bearbau/bearbash">
                &nbsp;<u>bearbash</u>
              </a>
              .
            </p>
            <br />
            <div className="stack-row">
              <button
                className="stack"
                style={{
                  backgroundColor: "var(--primary-muted)",
                }}
              >
                <i className="fa-brands fa-linux"></i>&nbsp;linux
              </button>
              <button
                className="stack"
                style={{
                  backgroundColor: "var(--primary-muted)",
                }}
              >
                <i className="fa-solid fa-terminal"></i>&nbsp;bash
              </button>
              <button
                className="stack"
                style={{
                  backgroundColor: "var(--primary-muted)",
                }}
              >
                <i className="fa-brands fa-docker"></i>&nbsp;docker
              </button>
            </div>
          </div>
        )}
      </div> */}
    </>
  );
}

export default Skillset;
