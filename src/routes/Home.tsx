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
      <div className="hero">
        <Header />
        <div className="hero-content">
          <p>hi there.</p>
          <span className="hero-title">
            I'm Beatriz Bautista.&nbsp;
            <i className="fa-solid fa-fish-fins"></i>
          </span>

          <p>front-end dev & UI/UX designer.</p>
          <div className="btn-row">
            <button className="hero-btn">
              <i className="fa-regular fa-file">&nbsp;</i>
              <a href={cv}>resume</a>
            </button>
            <button className="hero-btn-circle">
              <a href="https://github.com/bearbau">
                <i className="fa-brands fa-github"></i>
              </a>
            </button>
            <button className="hero-btn-circle">
              <a href="https://t.me/beatrizbautista">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </button>
            <button className="hero-btn-circle">
              <a href="https://monkeytype.com/profile/bearbau">
                <i className="fa-solid fa-keyboard"></i>
              </a>
            </button>
            <button className="hero-btn-circle">
              <a href="https://learn.cylabacademy.org/users/bearbau">
                <i className="fa-solid fa-flag"></i>
              </a>
            </button>
          </div>
        </div>
      </div>

      <Skillset />

      <div className="proj-container">
        <h1>Projects</h1>
        <p>compilation of websites and code snippets</p>
        <hr />
        <div className="proj-row">
          <ProjCard
            projPreview={breadcrumber}
            title="breadcrumber"
            subtitle="Make passion projects easier by dividing them into smaller crumbs. Made during a 5-day hackathon."
            tags={breadcrumberTags}
            {{/*on click: open page*/}}
          />
          <ProjCard
            projPreview={neuchina}
            title="NEU China Studies Center"
            subtitle="Designed to feature news from New Era University's China Studies Center."
            tags={neuchinaTags}
          />
        </div>
        <div className="proj-row">
          <ProjCard
            projPreview={yardee}
            title="Yardee"
            subtitle="Discover small businesses near you. Final exam for my Grade 11 - Computer Programming subject."
            tags={yardeeTags}
          />
          <ProjCard
            projPreview={ocsnippet1}
            title="Character Profile (Snippet)"
            subtitle="Made for a website called toyhou.se. The website uses a CSS Bootstrap plugin."
            tags={ocsnippetTags}
          />
        </div>
        <div className="proj-row">
          <ProjCard
            projPreview={placeholder}
            title="Figma projects"
            subtitle="A compilation of prototype UI designs made on Figma."
            tags={breadcrumberTags}
          />
          <ProjCard
            projPreview={radiary1}
            title="Concept work"
            subtitle="Drafts, concepts or simple graphics with minimum to no code, purely for the sake of design."
            tags={miscTags}
          />
        </div>
      </div>

      <Carousel cards={certifications} />
    </>
  );
}
