import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

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
        <div className="proj-row" style={{ backgroundColor: "aqua" }}>
          <div className="proj-preview">
            <img src={placeholder} style={{ height: "35vh" }}></img>
          </div>
          <div className="proj-content">
            <div className="stack-row">
              <button className="stack">HTML</button>
              <button className="stack">CSS</button>
            </div>
            <h1 className="title">Yardee</h1>
            <p className="subtitle">
              Oral defense for my Grade 11 - Computer Programming subject.
            </p>
            <button className="link">See more</button>
          </div>
        </div>

        <div className="proj-col" style={{ backgroundColor: "aqua" }}>
          hi
        </div>
        <div className="proj-col" style={{ backgroundColor: "aqua" }}>
          hello
        </div>
      </div>
      <Carousel title="Certifications" cards={certifications} />
    </>
  );
}
