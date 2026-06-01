import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  link?: string;
};

const Card = ({ title, description, link }: CardProps) => {
  const content = (
    <div className="bg-(--bg-primary) border border-(--border-main) rounded-lg p-6 hover:border-(--accent-primary) transition h-full">
      <h3 className="text-(--text-main) text-lg font-semibold mb-3">{title}</h3>

      <p className="text-(--text-muted) leading-relaxed">{description}</p>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
