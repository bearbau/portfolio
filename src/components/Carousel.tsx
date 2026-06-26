import Card from "./Card";

interface CardData {
  image: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  cards: CardData[];
}

export default function Carousel({ cards }: CarouselProps) {
  return (
    <div className="proj-container">
      <h1>Certifications</h1>
      <p>my valid certifications</p>
      <hr />
      <div className="carousel">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
