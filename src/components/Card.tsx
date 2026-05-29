type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-(--bg-primary) border border-(--border-main) rounded-lg p-6 hover:border-(--accent-primary) transition">
      <h3 className="text-(--text-main) text-lg font-semibold mb-3">{title}</h3>

      <p className="text-(--text-muted) leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
