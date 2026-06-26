import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import yardee from "../assets/previews/yardee.gif";
import neuchina from "../assets/previews/chinastudies.gif";

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

export default function Home() {
  return (
    <>
      <Hero />
      <div className="proj-container">
        <h1>Projects</h1>
        <p>compilation of websites and code snippets</p>
        <hr />
        <div className="proj-row">
          <div className="proj-preview">
            <img src={placeholder} style={{ height: "35vh" }}></img>
          </div>
          <div className="proj-content">
            <div className="stack-row">
              <button className="tag">React</button>
              <button className="tag">TS</button>
              <button className="tag">Vite</button>
              <button className="tag">HTML</button>
              <button className="tag">CSS</button>
            </div>
            <h1>Breadcrumber</h1>
            <p>
              Turning overwhelming passion projects into manageable "crumbs"
              using AI-generated workflows and Pomodoro focused timers. A 5-day
              hackathon project with my friends.
            </p>
            <button className="link">See more</button>
          </div>
        </div>

        <div className="proj-row">
          <div className="proj-preview">
            <img src={neuchina} style={{ height: "35vh" }}></img>
          </div>
          <div className="proj-content">
            <div className="stack-row">
              <button className="tag">HTML</button>
              <button className="tag">CSS</button>
              <button className="tag">JS</button>
            </div>
            <h1>NEU China Studies Center</h1>
            <p>
              Designed to feature news from New Era University's China Studies
              Center.
            </p>
            <button className="link">See more</button>
          </div>
        </div>

        <div className="proj-row">
          <div className="proj-preview">
            <img src={yardee} style={{ width: "35vh" }}></img>
          </div>
          <div className="proj-content">
            <div className="stack-row">
              <button className="tag">HTML</button>
              <button className="tag">CSS</button>
              <button className="tag">JS</button>
            </div>
            <h1>Yardee</h1>
            <p>Oral defense for my Grade 11 - Computer Programming subject.</p>
            <button className="link">See more</button>
          </div>
        </div>

        <div className="proj-row">
          <div className="proj-preview">
            <img src={placeholder} style={{ height: "35vh" }}></img>
          </div>
          <div className="proj-content">
            <div className="stack-row">
              <button className="tag">HTML</button>
              <button className="tag">Bootstrap</button>
            </div>
            <h1>Character Profile (Snippet)</h1>
            <p>
              Made for a website called toyhou.se. The website uses Bootstrap as
              a framework.
            </p>
            <button className="link">Live preview</button>
          </div>
        </div>
      </div>

      <Carousel title="Certifications" cards={certifications} />
    </>
  );
}
