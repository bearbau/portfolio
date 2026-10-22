import Navbar from "../components/Navbar";
import Skillset from "../components/Skillset";
import ProjCard from "../components/Proj-card";
import Carousel from "../components/Carousel";

import cv from "../assets/CV.pdf";
import placeholder from "../assets/placeholder.jpg";
import shark from "../assets/shark.png";

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
      <div className="h-screen grid grid-flow-col grid-rows-7 gap-0 py-20 px-45">
        <div className="h-full row-span-5 col-span-5 bg-blue-500 mx-4 rounded-l-xl animate-in fade-in slide-in-from-top-20 duration-2000"></div>
        <div className="h-full row-span-2 col-span-5 p-0 m-4">
          <h1 className="text-7xl font-bold tracking-wide">bearbau</h1>
          <p className="text-base">full stack dev and front-end designer.</p>
          <Navbar />
        </div>
        <div className="col-span-2 row-span-7 bg-blue-500 mx-4 rounded-xl rounded-tl-none animate-in fade-in slide-in-from-top-15 duration-4000">
          image
        </div>
        <div className="col-span-1 row-span-7">
          <div className="flex h-full flex-col justify-start gap-5">
            <a href={cv} className="flex h-12 w-12 items-center justify-center">
              <i className="fa-regular fa-file text-2xl"></i>
            </a>
            <a
              href="https://github.com/bearbau"
              className="flex h-12 w-12 items-center justify-center"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://t.me/beatrizbautista"
              className="flex h-12 w-12 items-center justify-center"
            >
              <i className="fa-brands fa-telegram text-2xl"></i>
            </a>
            <a
              href="https://monkeytype.com/profile/bearbau"
              className="flex h-12 w-12 items-center justify-center"
            >
              <i className="fa-solid fa-keyboard text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="main-page">
        <h1>tech stack</h1>
        <Skillset />
      </div>

      <div className="projects">
        <h1>projects</h1>
        <div className="proj-row">
          <ProjCard
            projPreview={breadcrumber}
            title="breadcrumber"
            subtitle="Make passion projects easier by dividing them into smaller crumbs. Made during a 5-day hackathon."
            tags={breadcrumberTags}
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
