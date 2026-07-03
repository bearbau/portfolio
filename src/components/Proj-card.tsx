import Tag from "./Tag";

interface ProjCardData {
  projPreview: string;
  title: string;
  subtitle: string;
  tags: string[];
}

export default function ProjCard({
  projPreview,
  title,
  subtitle,
  tags,
}: ProjCardData) {
  return (
    <div className="proj-card">
      <div
        className="proj-prev"
        style={{ backgroundImage: `url(${projPreview})` }}
      ></div>
      <div className="proj-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="stack-row">
          {tags.map((tag, index) => (
            <Tag key={index} tagTitle={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
