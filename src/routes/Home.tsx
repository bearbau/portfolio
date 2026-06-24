import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";
import background from "../assets/hero-wallpaper.jpg";

const certifications = [
  {
    image: placeholder,
    title: "Card 1",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 2",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 3",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 4",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 5",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
];

const uiProjects = [
  {
    image: placeholder,
    title: "Card 1",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 2",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 3",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 4",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
  {
    image: placeholder,
    title: "Card 5",
    subtitle: "Lorem ipsum dolor sit amet...",
    buttonText: "Button",
  },
];
export default function Home() {
  return (
    <>
      {/* hero page */}
      <div className="hero">
        <div className="hero-1"></div>
        <div className="hero-2">
          <span className="hero-title">
            <b>hi there.</b>&nbsp;<i className="fa-solid fa-fish-fins"></i>
          </span>
          <p>
            front-end dev & aspiring pentester. visual creative who enjoys
            creating new stuff. loves color blue. (maybe a bit too much.)
          </p>
          <button className="link">
            <i className="fa-regular fa-file">&nbsp;</i>resume
          </button>
          <button className="link">
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
      </div>

      {/* what i do */}
      <div
        className="hero-container-row"
        style={{
          backgroundColor: "var(--light)",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div className="hero-col-1" style={{ flex: "50%" }}>
          <h1>What I do</h1>
          <p>
            I am a <u>front-end web developer</u> and visual artist currently
            pursuing a degree in Computer Science. In my spare time, I study
            cybersecurity, solve CTF challenges, and develop scripts using Bash.
          </p>
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
        <div className="hero-col-2" style={{ flex: "50%" }}>
          <div className="nav-container">
            <div
              className="nav-col"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              Front End Development
            </div>
            <div
              className="nav-col"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              Cybersecurity
            </div>
            <div
              className="nav-col"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              Bash Scripting
            </div>
          </div>
        </div>
      </div>

      {/* navigator page */}

      {/* start of page */}

      <Carousel title="Certifications" cards={certifications} />
      <Carousel title="UI Projects" cards={uiProjects} />
    </>
  );
}
