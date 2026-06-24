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
            challenges, and develop scripts using Bash. <br />
            <p style={{ fontSize: "0.7rem", textAlign: "center" }}>
              Check out my techstack here{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </p>
          </p>
          <br />
        </div>
      )}

      {/* front end dev */}
      {activeView === "front-end-hero" && (
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1 style={{ fontSize: "2rem" }}>Front-End Development</h1>
          <p>
            I discovered my passion in front-end back in 2020 when I was
            tinkering bootstrap elements on a website. Nowadays I use React and
            TypeScript to be more flexible with my code. &nbsp;
            <i style={{ fontSize: "0.7rem" }}>
              My favorite icons are from fontawesome.com ;{")"}
            </i>
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
            <button className="btn-col">
              <i className="fa-brands fa-figma"></i>figma
            </button>
          </div>
          <button
            className="circle-btn"
            onClick={() => setActiveView("about-hero")}
          >
            <i className="fa-regular fa-house"></i>
          </button>
        </div>
      )}

      {/* bash scripting */}
      {activeView === "bash-hero" && (
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1 style={{ fontSize: "2rem" }}>Shell Scripting</h1>
          <p>
            On my free time, I solve CTFs and study Bash scripting. Being a
            pentester is one of my aspirations, but I mostly study it for the
            love of the game.
          </p>
          <p>I dump my bash scripts on bearbash {"(github repo)"}</p>
          <br />
          <div className="btn-row">
            <button className="btn-col">
              <i className="fa-brands fa-linux"></i>&nbsp;linux
            </button>
            <button className="btn-col">
              <i className="fa-solid fa-terminal"></i>&nbsp;bash
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-docker"></i>&nbsp;docker
            </button>
          </div>
          <button
            className="circle-btn"
            onClick={() => setActiveView("about-hero")}
          >
            <i className="fa-regular fa-house"></i>
          </button>
        </div>
      )}

      {/* programming languages */}
      {activeView === "pl-hero" && (
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1 style={{ fontSize: "2rem" }}>Programming languages</h1>
          <p>
            I study Computer Science and these are some of the languages that I
            had to study during my degree. Anything unrelated to front-end goes
            here.
          </p>
          <br />
          <div className="btn-row">
            <button className="btn-col">
              <i className="fa-brands fa-java"></i>&nbsp;java
            </button>
            <button className="btn-col">
              <i className="fa-brands fa-python"></i>&nbsp;python
            </button>
            <button className="btn-col">
              <i className="fa-solid fa-database"></i>&nbsp;SQL
            </button>
          </div>
          <button
            className="circle-btn"
            onClick={() => setActiveView("about-hero")}
          >
            <i className="fa-regular fa-house"></i>
          </button>
        </div>
      )}

      {/* button on clicks -------------------------------------------- */}

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
            onClick={() => setActiveView("pl-hero")}
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            Programming languages
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
        </div>
      </div>
    </>
  );
}

export default Skillset;
