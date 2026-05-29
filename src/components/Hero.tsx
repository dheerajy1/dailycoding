const Hero = () => {
  return (
    <section className="bg-(--bg-normal) text-(--text-main) min-h-[50vh] flex items-center justify-center px-6">
      <div className="max-w-(--container) text-center">
        <p className="text-(--accent-primary) font-semibold mb-4">
          Design System Ready
        </p>
        <h1 className="text-5xl font-bold mb-6">Build UI with Tokens Only</h1>
        <p className="text-(--text-muted) mb-10 max-w-xl mx-auto">
          No magic values. Everything comes from a scalable design system using
          CSS variables + Tailwind mapping.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-(--accent-primary) hover:bg-(--accent-hover) text-(--text-main) px-6 py-4 rounded-lg transition">
            Get Started
          </button>
          <button className="border border-(--border-main) text-(--text-muted) hover:text-(--text-main) px-6 py-4 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
