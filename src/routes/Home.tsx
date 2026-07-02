import Header from "../components/Header";
import Skillset from "../components/Skillset";

import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";
import yardee from "../assets/previews/yardee.gif";
import neuchina from "../assets/previews/chinastudies.gif";
import breadcrumber from "../assets/previews/breadcrumber.png";
import ocsnippet1 from "../assets/previews/ocsnippet1.gif";

const certifications = [
  {
    image: placeholder,
    title: "Card 1",
    subtitle: "Lorem ipsum dolor sit amet...",
  },
  {
    image: placeholder,
    title: "Card 2",
    subtitle: "Lorem ipsum dolor sit amet...",
  },
  {
    image: placeholder,
    title: "Card 3",
    subtitle: "Lorem ipsum dolor sit amet...",
  },
  {
    image: placeholder,
    title: "Card 4",
    subtitle: "Lorem ipsum dolor sit amet...",
  },
  {
    image: placeholder,
    title: "Card 5",
    subtitle: "Lorem ipsum dolor sit amet...",
  },
  {
    image: placeholder,
    title: "Card 6",
    subtitle: "Lorem ipsum dolor sit amet...",
  },
  {
    image: placeholder,
    title: "Card 6",
    subtitle: "Lorem ipsum dolor sit amet...",
  },
];

{
  {
    /*Components of the home page

  Hero page w header
  About me
  What I do
  Projects
  Certifications
  Footer  
  
  If need to be reused, make a new component such as the header
  If not, just make it a div-container

  Let me destroy my code rq and then fix it again
  */
  }
}

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
              <i className="fa-regular fa-file">&nbsp;</i>resume
            </button>
            <button className="hero-btn-circle">
              <i className="fa-brands fa-github"></i>
            </button>
            <button className="hero-btn-circle">
              <i className="fa-brands fa-telegram"></i>
            </button>
            <button className="hero-btn-circle">
              <i className="fa-solid fa-keyboard"></i>
            </button>
            <button className="hero-btn-circle">
              <i className="fa-solid fa-flag"></i>
            </button>
          </div>
        </div>
      </div>

      <Skillset />

      <div
        className="container"
        style={{
          padding: "5rem",
          borderRadius: "0",
          backgroundColor: "var(--primary)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "var(--light)" }}>
          What I do
        </h1>
        <div className="cntr-row" style={{ padding: "0rem 5rem" }}>
          <div className="border-box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            dictum justo, vel lobortis sem. Mauris sagittis commodo auctor.
            Curabitur a lectus massa.
          </div>
          <div className="border-box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            dictum justo, vel lobortis sem. Mauris sagittis commodo auctor.
            Curabitur a lectus massa.
          </div>
          <div className="border-box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            dictum justo, vel lobortis sem. Mauris sagittis commodo auctor.
            Curabitur a lectus massa.
          </div>
        </div>
      </div>

      <div className="proj-container">
        <h1>Projects</h1>
        <p>compilation of websites and code snippets</p>
        <hr />
        <div className="proj-row">
          <div className="proj-card">
            <div
              className="proj-prev"
              style={{ backgroundImage: `url(${breadcrumber})` }}
            ></div>
            <h2>Breadcrumber</h2>
            <p>Final project for my 11th grade Computer Programming subject.</p>
          </div>
          <div className="proj-card">
            <div
              className="proj-prev"
              style={{ backgroundImage: `url(${neuchina})` }}
            ></div>
            <h2>NEU China Studies Center</h2>
            <p>Final project for my 11th grade Computer Programming subject.</p>
          </div>
        </div>
        <div className="proj-row">
          <div className="proj-card">
            <div
              className="proj-prev"
              style={{ backgroundImage: `url(${yardee})` }}
            ></div>
            <h2>Yardee</h2>
            <p>Final project for my 11th grade Computer Programming subject.</p>
          </div>
          <div className="proj-card">
            <div
              className="proj-prev"
              style={{ backgroundImage: `url(${ocsnippet1})` }}
            ></div>
            <h2>Character Profile (Snippet)</h2>
            <p>Final project for my 11th grade Computer Programming subject.</p>
          </div>
        </div>
        <div className="proj-row">
          <div className="proj-card">
            <div
              className="proj-prev"
              style={{ backgroundImage: `url(${breadcrumber})` }}
            ></div>
            <h2>Breadcrumber</h2>
            <p>Final project for my 11th grade Computer Programming subject.</p>
          </div>
          <div className="proj-card">
            <div
              className="proj-prev"
              style={{ backgroundImage: `url(${neuchina})` }}
            ></div>
            <h2>NEU China Studies Center</h2>
            <p>Final project for my 11th grade Computer Programming subject.</p>
          </div>
        </div>
      </div>

      <Carousel cards={certifications} />
    </>
  );
}
