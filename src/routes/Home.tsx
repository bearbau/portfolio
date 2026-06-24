import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";
import Skillset from "../components/Skillset";

const uiProjects = [
  {
    image: placeholder,
    title: "breadcrumber",
    subtitle:
      "Breadcrumber is an app that helps creatives stay motivated by turning overwhelming passion projects into manageable steps through breadcrumbing",
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
          &nbsp;
          <button className="link">
            <i className="fa-brands fa-github"></i>
          </button>
          &nbsp;
          <button className="link">
            <i className="fa-brands fa-telegram"></i>
          </button>
          &nbsp;
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
        <Skillset />
      </div>

      <br />
      <Carousel title="UI Projects" cards={uiProjects} />
      <Carousel title="Certifications" cards={certifications} />
    </>
  );
}
