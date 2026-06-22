import Card from "./Card";

interface CardData {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

interface CarouselProps {
  title: string;
  cards: CardData[];
}

export default function Carousel({ title, cards }: CarouselProps) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="carousel">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
