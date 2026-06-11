function Hero() {
  return (
    <section
      className="relative min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex min-h-[600px] max-w-6xl items-center px-6">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Digital Innovation
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Building Modern Software For Growing Businesses
          </h1>

          <p className="mb-8 text-lg text-slate-200 md:text-xl">
            We design and develop web applications, cloud solutions, and digital
            platforms that help companies scale faster and work smarter.
          </p>

          <div className="flex gap-4">
            <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white">
              Get Started
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
