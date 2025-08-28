import ProductModal from "./ProductModal";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import CategoryDropdown from "./CategoryDropdown";
import SortButtons from "./SortButtons";
import { Search } from "lucide-react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // state modal

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Products..." />
        <CategoryDropdown categories={categories} value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>

      <div className="flex justify-center items-center flex">
        <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <div className="w-16 h-16 border-4 border-black border-dashed rounded-full animate-spin"></div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center mt-20 text-black">
          <Search className="w-16 h-16 mb-4" />
          <p className="text-xl font-semibold">No Products Found</p>
          <p className="text-sm mt-1">Try a different keyword or category</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
