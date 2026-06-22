interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function Card({
  image,
  title,
  subtitle,
  buttonText,
}: CardProps) {
  return (
    <div className="card">
      <img src={image} />
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
      <button className="link">{buttonText}</button>
    </div>
  );
}
