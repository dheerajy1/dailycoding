function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern responsive websites and enterprise web applications.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment services.",
    },
    {
      title: "UI / UX Design",
      description:
        "User-focused design systems and engaging experiences.",
    },
  ];

  return (
    <section className="bg-slate-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-5xl font-bold text-slate-900">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;