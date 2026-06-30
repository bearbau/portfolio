import { useState } from "react";

function Skillset() {
  const [activeView, setActiveView] = useState("about-hero");

  return (
    <>
      <div className="cntr-row">
        {activeView === "about-hero" && (
          <div
            className="col"
            style={{
              flex: "50%",
              height: "50vh",
              paddingRight: "1rem",
              animation: "fadeIn 0.7s ease",
            }}
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
        )}

        {activeView === "front-end-hero" && (
          <div
            className="col"
            style={{
              flex: "50%",
              height: "50vh",
              paddingRight: "1rem",
              animation: "fadeIn 0.7s ease",
            }}
          >
            <h1>Front-end</h1>
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
            <button
              className="link-circle"
              onClick={() => setActiveView("about-hero")}
            >
              <i className="fa-solid fa-house"></i>
            </button>
          </div>
        )}

        {activeView === "pl-hero" && (
          <div
            className="col"
            style={{
              flex: "50%",
              height: "50vh",
              paddingRight: "1rem",
              animation: "fadeIn 0.7s ease",
            }}
          >
            <h1>Back-end</h1>
            <p>
              These are the languages I picked up through my Computer Science
              degree. I mostly use Java to code.
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
            <button
              className="link-circle"
              onClick={() => setActiveView("about-hero")}
            >
              <i className="fa-solid fa-house"></i>
            </button>
          </div>
        )}

        {activeView === "sh-hero" && (
          <div
            className="col"
            style={{
              flex: "50%",
              height: "50vh",
              paddingRight: "1rem",
              animation: "fadeIn 0.7s ease",
            }}
          >
            <h1>Shell scripting</h1>
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
            <button
              className="link-circle"
              onClick={() => setActiveView("about-hero")}
            >
              <i className="fa-solid fa-house"></i>
            </button>
          </div>
        )}

        <div
          className="col"
          style={{ flex: "50%", flexDirection: "row", padding: "0px" }}
        >
          <div
            className={`oval ${activeView === "front-end-hero" ? "oval--active" : ""}`}
            onClick={() => setActiveView("front-end-hero")}
          >
            <p>front-end</p>
          </div>
          <div
            className={`oval ${activeView === "pl-hero" ? "oval--active" : ""}`}
            onClick={() => setActiveView("pl-hero")}
          >
            <p>back-end</p>
          </div>
          <div
            className={`oval ${activeView === "sh-hero" ? "oval--active" : ""}`}
            onClick={() => setActiveView("sh-hero")}
          >
            <p>shell-scripting</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skillset;
