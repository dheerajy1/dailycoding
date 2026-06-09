import Card from "../../../components/Card";

const Day3Task2 = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-(--text-main)">Day 2 - Task 1</h1>

      <p className="mt-4 text-(--text-muted)">
        Build UI Screens (Click to open each module)
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card
          title="Online Examination System"
          description="Online Examination System"
          link="/day-3/task-1/online-examination-system"
        />
      </div>
    </main>
  );
};

export default Day3Task2;
