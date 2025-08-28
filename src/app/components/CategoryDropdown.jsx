"use client";

export default function CategoryDropdown({ categories, value, onChange }) {
  return (
    <select
      className="bg-gray-100 text-black rounded-xl p-3 
        mb-6 
        max-w-md 
        ml-2
        shadow-sm
        focus:outline-none 
        focus:ring-2 
        focus:ring-black
        cursor-pointer
        transition
        duration-200
        ease-in-out
        hover:bg-gray-200
      "
      value={value}
      onChange={onChange}
    >
      {/* Placeholder */}
      <option value="" disabled>
        Choose categories....
      </option>

      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}


