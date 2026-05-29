import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <main className="bg-(--color-bg) min-h-screen">
      <Navbar logo="ReactUI" />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20 border border-(--border-main) rounded-xl my-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Fast Development"
            description="Build reusable interfaces quickly using React and Tailwind."
          />

          <Card
            title="Reusable Components"
            description="Create scalable UI systems with clean component architecture."
          />

          <Card
            title="Modern Design"
            description="Responsive layouts with modern dark UI styling."
          />
        </div>
      </section>
    </main>
  );
}

export default App;