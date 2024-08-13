import ProductCard from "../../UI/ProductCard";
import { useState, useEffect, useRef } from "react";

const FlashSalesSection = () => {
  const [products, setProducts] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        const formattedProducts = json.map((product) => ({
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

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="flash-sales mt-16 mb-12 px-4 bg-white relative">
      <div className="flex items-center mr-2 mb-6">
        <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
        <span className="text-red-500 font-semibold">Today&apos;s</span>
      </div>
      <div className="flex items-center mb-6">
        <h2 className="text-xl md:text-4xl font-medium mr-6 md:mr-16">Flash Sales</h2>
        <div className="text-2xl text-gray-900 flex items-center">
          <div className="flex flex-col">
            <div className="flex space-x-8 text-[8px] md:text-[11px] -my-2 font-semibold text-gray-900">
              <span className="mr-3">Days</span>
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
            <div className="flex space-x-4">
              <span className="font-semibold text-xl md:text-3xl">03</span>
              <span className="text-red-500 mx-1">:</span>
              <span className="font-semibold text-xl md:text-3xl">23</span>
              <span className="text-red-500 mx-1">:</span>
              <span className="font-semibold text-xl md:text-3xl">19</span>
              <span className="text-red-500 mx-1">:</span>
              <span className="font-semibold text-xl md:text-3xl">56</span>
            </div>
          </div>
        </div>
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
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-red-500 text-sm text-white px-10 py-4 rounded">
          View All Products
        </button>
      </div>
      <div className="mt-12 border-b border-gray-200"></div>
    </div>
  );
};

export default FlashSalesSection;
