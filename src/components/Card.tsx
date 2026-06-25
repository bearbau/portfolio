interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function Card({ image, title, subtitle }: CardProps) {
  return (
    <div className="card">
      <img src={image} style={{ height: "20vh" }} />
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
