"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import CategoryDropdown from "./CategoryDropdown";
import PriceDropdown from "./PriceDropdown";
import SortButtons from "./SortButtons";
import { Search } from "lucide-react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      setLoading(false)
  }, []);
  
  // Kategori Unik
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // filter berdasarkan search & kategori
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

    // sort berdasarkan harga
  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <SearchInput value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Products...." 
        />
        
        <CategoryDropdown 
            categories={categories} 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}  
        />

        {/* <PriceDropdown value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}  /> */}

        <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />

      {loading ? (
        <div className="flex justify-center items-center mt-20">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
        ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center mt-20 text-black">
            <Search className="w-16 h-16 mb-4" />
            <p className="text-xl font-semibold">No Products Found</p>
            <p className="text-sm mt-1">Try a different keyword or category</p>
        </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        )}


        {/* {loading ? (
        <div className="flex justify-center items-center mt-20">
          <div className="w-16 h-16 border-4 border-black border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )} */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </>
  );
}
