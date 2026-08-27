import Header from "../components/Header";
import Skillset from "../components/Skillset";
import ProjCard from "../components/Proj-card";
import Carousel from "../components/Carousel";

import cv from "../assets/CV.pdf";
import placeholder from "../assets/placeholder.jpg";

{
  {
    /* project imports */
  }
}
import yardee from "../assets/previews/yardee.gif";
import neuchina from "../assets/previews/chinastudies.gif";
import breadcrumber from "../assets/previews/breadcrumber.png";
import ocsnippet1 from "../assets/previews/ocsnippet1.gif";
import radiary1 from "../assets/previews/radiary1.png";

{
  {
    /* certification imports */
  }
}
import ibmSQL from "../assets/certifications/SQLandRelData101.png";
import ociFoundations from "../assets/certifications/cloudInfrastructure.png";
import odpFoundations from "../assets/certifications/dataPlatform.png";
import ociAiFoundations from "../assets/certifications/aiFoundations.png";
import devKadaHT from "../assets/certifications/devKadaHackathon.png";

const certifications = [
  {
    image: ibmSQL,
    title: "SQL and Relational Databases",
    subtitle: "by IBM",
  },
  {
    image: ociFoundations,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    subtitle: "by Oracle",
  },
  {
    image: odpFoundations,
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    subtitle: "by Oracle",
  },
  {
    image: ociAiFoundations,
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    subtitle: "by Oracle",
  },
  {
    image: devKadaHT,
    title: "CodeKada: The Online Hackathon 2026",
    subtitle: "by DevKada",
  },
];

const breadcrumberTags = ["react", "ts", "html", "css"];
const neuchinaTags = ["html", "css", "js"];
const yardeeTags = ["html", "css", "js"];
const ocsnippetTags = ["css", "bootstrap"];
const miscTags = ["figma", "png/jpeg", "misc"];

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="column">
          <div className="box" style={{ height: "100%" }}>
            content
          </div>
        </div>
        <div className="column">
          <div className="row">
            <div className="box" style={{ width: "100%" }}>
              <p>hi there.</p>

              <h1>
                I'm Beatriz Bautista. &nbsp;
                <i className="fa-solid fa-fish-fins"></i>
              </h1>

              <p>front-end dev & UI/UX designer.</p>
            </div>
          </div>
          <div className="row">
            <div className="column" style={{ flex: "40%", height: "100%" }}>
              <div className="box">
                <h1>about me</h1>
                <p>
                  I am a front-end web developer and UI/UX designer who has been
                  developing and conceptualizing web designs since 2020.
                  <br />
                  <br />
                  Currently pursuing a degree in Computer Science, I also spend
                  my free time writing Bash scripts and studying cybersecurity.
                </p>
              </div>
              <div className="box" style={{ height: "100%" }}>
                <h1>techstack</h1>
                <div className="row">
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
                    <i className="fa-brands fa-typescript"></i>
                    &nbsp;typescript
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
            </div>
            <div className="column" style={{ flex: "60%" }}>
              <div className="nav">
                <button>Projects</button>
                <button>Certificates</button>
                <button>Blog</button>
              </div>
              <div className="box" style={{ height: "100%" }}>
                content
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
