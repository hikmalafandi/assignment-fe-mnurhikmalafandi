"use client";

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <input
      className="bg-[#F0F0F0] text-black rounded-xl p-2 mb-6 w-full max-w-md"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
