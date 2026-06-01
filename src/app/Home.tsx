import Card from "../components/Card";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-(--text-main)">
          ReactJS KT Tasks
        </h1>

        <p className="text-(--text-muted) mt-3">
          3-Day ReactJS KT + Project Tasks
        </p>
      </header>

      {/* Day 1 */}
      <section>
        <h2 className="text-2xl font-semibold text-(--text-main) mb-6">
          Day 1
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Task 1"
            description="Build UI Screens - Chat App, Food Delivery Homepage and Admin Dashboard Layout"
            link="/day-1/task-1"
          />

          <Card
            title="Task 2"
            description="Login Page, Registration Page, Form Validation and React Routing"
            link="/day-1/task-2"
          />

          <Card
            title="Task 3"
            description="E-Commerce Product Listing, Product Details and Search Functionality"
            link="/day-1/task-3"
          />
        </div>
      </section>

      {/* Day 2 */}
      <section>
        <h2 className="text-2xl font-semibold text-(--text-main) mb-6">
          Day 2
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Task 1" description="" link="/day-2/task-1" />

          <Card title="Task 2" description="" link="/day-2/task-2" />

          <Card title="Task 3" description="" link="/day-3/task-3" />
        </div>
      </section>
    </main>
  );
};

export default Home;
