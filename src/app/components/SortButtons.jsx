"use client";

export default function SortButtons({ sortOrder, setSortOrder }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span>Sort:</span>
      <button
        className={`px-3 py-1 rounded transition ${
          sortOrder === "asc"
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => setSortOrder("asc")}
      >
        Low → High
      </button>
      <button
        className={`px-3 py-1 rounded transition ${
          sortOrder === "desc"
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => setSortOrder("desc")}
      >
        High → Low
      </button>
    </div>
  );
}

