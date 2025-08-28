"use client";
import ProductsPage from "@/products/page";


export default function Home() {
  return (
    <>
      <ProductsPage />
    </>
    
  );
}


// "use client"

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       setProducts(data)
//     })
//   }, []);

//   const searchProduct = products.filter( (product) => {
//     return product.title.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <>
//       <input
//         className="bg-[#F0F0F0] text-black rounded-xl p-2 border-2 border-black m-10"
//         type="text"
//         placeholder="Cari produk....."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="grid grid-cols-4 gap-4 p-4 mx-5 my-5">
      
//         {searchProduct.map((product) => {
//           return <div key={product.id} className="p-7 border-black border-2 rounded-md">
//               <img className="w-full h-48 p-2 rounded-xl object-contain mb-2 bg-[#F0EEED]"
//                 src={product.image}
//                 alt={product.title} 
//               />
//               <h2>{product.title}</h2>
//               <p>{product.price}</p>
//           </div>
//         })}
//     </div>
//     </>

    
//   );
// }
