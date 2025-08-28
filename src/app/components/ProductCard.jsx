export default function ProductCard({ product }) {
  return (
    <div className="p-5 rounded-md shadow-sm hover:shadow-md transition">
      <img
        className="w-full h-48 p-2 rounded-xl object-contain mb-2 bg-[#F0EEED]"
        src={product.image}
        alt={product.title}
      />
      <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
      <p className="text-gray-600 font-medium mt-2">${product.price}</p>
    </div>
  );
}
