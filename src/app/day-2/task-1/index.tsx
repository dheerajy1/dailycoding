import Card from "../../../components/Card";

const Day2Task1 = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-(--text-main)">Day 2 - Task 1</h1>

      <p className="mt-4 text-(--text-muted)">
        Build UI Screens (Click to open each module)
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card
          title="Food Delivery Homepage"
          description="Restaurant listing and food UI layout"
          link="/day-2/task-1/food-delivery-homepage"
        />
      </div>
    </main>
  );
};

export default Day2Task1;
