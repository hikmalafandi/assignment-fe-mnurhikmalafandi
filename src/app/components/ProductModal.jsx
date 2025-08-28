"use client";
import { X } from "lucide-react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-black hover:text-black"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain mb-4"
        />

        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-black mb-2">{product.description}</p>
        <p className="text-black font-semibold mb-1">Price: ${product.price}</p>
        <p className="text-black mb-1">Category: {product.category}</p>
        <p className="text-black">
          Rating: {product.rating?.rate} ({product.rating?.count} reviews)
        </p>
      </div>
    </div>
  );
}
