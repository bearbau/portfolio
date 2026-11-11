import Skillset from "../components/Skillset";
import ProjCard from "../components/Proj-card";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

import cv from "../assets/CV.pdf";
import placeholder from "../assets/placeholder.jpg";
import { useEffect, useState } from "react";
import shark from "../assets/shark.webp";

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
      {/* hero */}
      {/*grid grid-cols-[5fr_2fr_auto] grid-rows-7*/}

      <div className="grid h-screen grid-cols-2 grid-rows-1 gap-x-[calc(100vw*2/12)] px-[calc(100vw/12)] py-[calc(100vh/12)]">
        <div className="min-h-0">
          <img
            src={placeholder}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="flex items-center">
          <div className="pr-[calc(100vw/12)]">
            <span className="text-1xl">November 7, 2026 | 9:51</span>
            <h1 className="text-7xl font-bold tracking-wide m-0">bearbau</h1>
            <p className="text-1xl">
              ui/ux designer and full stack developer. shell scripter and blue
              enthusiast. really, really loves sharks.
            </p>
            <hr className="h-[0.6px] bg-current border-0 my-5" />
            <div className="flex justify-between">
              <Link to="/about">
                <b>01</b>
                <br />
                about
              </Link>
              <Link to="/projects">
                <b>02</b>
                <br />
                projects
              </Link>
              <Link to="/blog">
                <b>03</b>
                <br />
                blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* about me */}
      <div className="h-screen flex p-10 bg-sky-400">
        <div className="flex flex-1 p-20 items-start justify-center">
          <div className="h-auto w-80">
            <h1 className="text-6xl font-bold tracking-wide m-0 text-white">
              about <br /> me.
            </h1>
            <p className="text-white">
              i've been tinkering CSS and bootstrap since 2020. passionate in
              code and design, i am currently finishing my major in computer
              science and working towards my goal of being an industry standard
              UI/UX designer.
            </p>
            <button className="border border-white text-white my-5 px-10 py-1 w-max rounded-xl text-center">
              resume
            </button>
            <button className="bg-white text-sky-400 mx-3 my-5 px-10 py-1 w-max rounded-xl text-center">
              github
            </button>
          </div>
        </div>

        <div className="flex flex-1 p-20 items-end place-content-end justify-center">
          <div className="h-auto w-80">
            <h1 className="text-4xl font-bold tracking-wide m-0 text-white">
              techstack
            </h1>
            <p className="text-white">
              {/*refactor this, for visual only, use li*/}
              <b>css</b> <br />
              tailwind <br />
              bootstrap <br />
              <br />
              <b>javascript</b> <br />
              react <br />
              typescript <br />
              <br />
              <b>wireframing</b> <br />
              figma <br />
              lucidchart <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen grid grid-cols-[5fr_2fr_auto] grid-rows-7 gap-x-6 gap-y-0 py-20 px-45">
        <div
          className="bg-cover bg-fixed bg-center col-start-1 row-start-1 row-span-5 rounded-l-3xl animate-in fade-in slide-in-from-top-20 duration-2000"
          style={{ backgroundImage: `url(${shark})` }}
        ></div>

        <div className="col-start-1 row-start-6 row-span-2 my-2">
          <h1 className="text-6xl font-bold tracking-wide m-0">bearbau</h1>
          <p className="text-base p-0">
            full stack dev and front-end designer.
          </p>
          <div className="flex flex-row gap-3 my-2">
            <Link
              to="/projects"
              className="border px-5 py-1 w-max rounded-xl text-center"
            >
              projects
            </Link>
            <Link
              to="/blog"
              className="border px-5 py-1 w-max rounded-xl text-center"
            >
              blog
            </Link>
          </div>
        </div>

        <div
          className="bg-cover bg-fixed bg-center col-start-2 row-start-1 row-span-7 rounded-3xl rounded-tl-none animate-in fade-in slide-in-from-top-15 duration-3500"
          style={{ backgroundImage: `url(${shark})` }}
        ></div>

        <div className="col-start-3 row-start-1 row-span-7 flex flex-col gap-5">
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
