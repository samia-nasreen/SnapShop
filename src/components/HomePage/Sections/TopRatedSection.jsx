import ProductCard from "../../UI/ProductCard";
import { useState, useEffect, useRef } from "react";

const TopRatedSection = () => {
  const [products, setProducts] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        const filteredProducts = json.filter(
          (product) => product.rating.rate >= 4
        );

        const randomProducts = [];
        while (randomProducts.length < 4 && filteredProducts.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * filteredProducts.length
          );
          randomProducts.push(filteredProducts.splice(randomIndex, 1)[0]);
        }

        const formattedProducts = randomProducts.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10,
          price: product.price,
          originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
          rating: product.rating.rate,
          ratingCount: product.rating.count,
        }));

        setProducts(formattedProducts);
      });
  }, []);

  return (
    <div className="flash-sales mt-16 mb-12 px-4 bg-white relative">
      <div className="flex items-center mr-2 mb-6">
        <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
        <span className="text-red-500 font-semibold">This Month</span>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-4xl font-medium md:mr-16">Top Rated Products</h2>
        <button className="bg-red-500 text-sm text-white px-10 py-4 rounded">
          View All
        </button>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide py-4 px-2"
        >
          {products.map((product) => (
            <div className="flex-shrink-0" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedSection;
