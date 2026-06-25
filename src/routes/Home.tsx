import placeholder from "../assets/placeholder.jpg";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

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
      <Hero />
      <Carousel title="UI Projects" cards={uiProjects} />
      <Carousel title="Certifications" cards={certifications} />
    </>
  );
}
