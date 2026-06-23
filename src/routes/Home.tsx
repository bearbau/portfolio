import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";
import notebook from "../assets/notebook.mp4";
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
            front-end designer & aspiring pentester. visual creative who is
            willing to learn new stuff. loves color blue. (maybe a bit too
            much.)
          </p>
          <button className="link">
            <i className="fa-regular fa-file">&nbsp;</i>resume
          </button>
        </div>
      </div>

      {/* navigator page */}
      <div className="nav-container">
        <div
          className="nav-col"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          Certifications
        </div>
        <div
          className="nav-col"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          UI Projects
        </div>
        <div
          className="nav-col"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          Blog
        </div>
      </div>

      {/* start of page */}
      <div className="container-row">
        <div
          className="col"
          style={{ flex: "75%", padding: "0vh 15vh 0vh 15vh" }}
        >
          <span className="title">notebook: stats for nerds</span>
          <span className="subtitle">
            a blog for CTF solutions, bash scripting, automation, cybersec
            resources, etc.
          </span>
          <div>
            <button className="link">blog</button> &nbsp;
            <button className="link">
              <i className="fa-brands fa-telegram"></i>&nbsp;telegram channel
            </button>
          </div>
        </div>
        <div className="col" style={{ flex: "25%", padding: "0px" }}>
          <video
            src={notebook}
            style={{ height: "50vh", borderRadius: "20px" }}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      <Carousel title="Certifications" cards={certifications} />
      <Carousel title="UI Projects" cards={uiProjects} />
    </>
  );
}
