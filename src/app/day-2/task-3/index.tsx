import Card from "../../../components/Card";

const Day1Task1 = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-(--text-main)">Day 1 - Task 3</h1>

      <p className="mt-4 text-(--text-muted)">
        Build UI Screens (Click to open each module)
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card
          title="Admin Dashboard Layout"
          description="Analytics dashboard UI structure"
          link="/day-2/task-3/admin-dashboard-layout"
        />
      </div>
    </main>
  );
};

export default Day1Task1;
