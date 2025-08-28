"use client";

export default function SortButtons({ sortOrder, setSortOrder }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span>Sort:</span>
      <button
        className={`px-3 py-1 rounded ${sortOrder === "asc" ? "bg-black text-white" : "bg-gray-200"}`}
        onClick={() => setSortOrder("asc")}
      >
        Low → High
      </button>
      <button
        className={`px-3 py-1 rounded ${sortOrder === "desc" ? "bg-black text-white" : "bg-gray-200"}`}
        onClick={() => setSortOrder("desc")}
      >
        High → Low
      </button>
    </div>
  );
}
