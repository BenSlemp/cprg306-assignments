export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-[#1f2937] text-white rounded-lg px-6 py-4 shadow-md">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-300">Buy {quantity} in {category}</p>
    </li>
  );
}