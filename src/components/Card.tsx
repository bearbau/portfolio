interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function Card({ image, title, subtitle }: CardProps) {
  return (
    <div className="card">
      <img src={image} style={{ height: "20vh" }} />
      <h1 className="certTitle">{title}</h1>
      <p className="certSubtitle">{subtitle}</p>
    </div>
  );
}
