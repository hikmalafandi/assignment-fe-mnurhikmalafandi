"use client";

export default function PriceDropdown({ value, onChange }) {
  return (
    <select
      className="bg-[#F0F0F0] text-black rounded-xl p-2 border-2 border-black mb-6 max-w-md ml-2"
      value={value}
      onChange={onChange}
    >
      <option value="">Sortir harga</option>
      <option value="asc">Harga: Rendah ke Tinggi</option>
      <option value="desc">Harga: Tinggi ke Rendah</option>
    </select>
  );
}
