import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}