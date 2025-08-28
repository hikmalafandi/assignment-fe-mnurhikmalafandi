"use client";

import ProductList from "@/app/components/ProductList";

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex justify-center items-center">Product List</h1>
      <ProductList />
    </div>
  );
}
