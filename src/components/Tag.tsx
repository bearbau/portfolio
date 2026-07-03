export interface TagProps {
  tagTitle: string;
}

export default function Tag({ tagTitle }: TagProps) {
  return <button className="tag">{tagTitle}</button>;
}
