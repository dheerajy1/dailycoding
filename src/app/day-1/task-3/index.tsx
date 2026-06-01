import Card from "../../../components/Card";

const Day1Task3 = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-(--text-main)">Day 1 - Task 3</h1>

      <p className="mt-4 text-(--text-muted)">
        Build UI Screens (Click to open each module)
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card
          title="E-Commerce Product"
          description="E-Commerce Product with Product Listing, Product Cards, Product Details Page, Search Functionality"
          link="/day-1/task-3/ecommerce"
        />
      </div>
    </main>
  );
};

export default Day1Task3;