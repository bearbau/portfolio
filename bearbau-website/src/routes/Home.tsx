import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";

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
      <div className="container-row">
        <div className="col">
          <img src={placeholder} style={{ height: "200px" }} />
        </div>
        <div className="col">
          <span className="title">notebook: stats for nerds</span>
          <span className="subtitle">this is a description</span>
          <button className="link">button</button>
        </div>
      </div>

      <Carousel title="Certifications" cards={certifications} />
      <Carousel title="UI Projects" cards={uiProjects} />
    </>
  );
}
