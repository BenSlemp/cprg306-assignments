import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#1a1c23] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}