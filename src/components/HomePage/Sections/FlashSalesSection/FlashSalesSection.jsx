import ProductCard from "../../../UI/ProductCard/ProductCard";
import { useState, useEffect, useRef } from "react";
import TimeRemaining from "./TimeRemaining";
import ScrollLeftButton from "../../../UI/ScrollButtons/ScrollLeftButton";
import ScrollRightButton from "../../../UI/ScrollButtons/ScrollRightButton";
import { NavLink } from "react-router-dom";

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
        <h2 className="text-xl md:text-4xl font-medium mr-6 md:mr-16">
          Flash Sales
        </h2>
        <TimeRemaining />
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
        <ScrollLeftButton scrollLeft={scrollLeft} />
        <ScrollRightButton scrollRight={scrollRight} />
      </div>
      <div className="mt-4 text-center">
        <NavLink
          to="/products"
          className="bg-red-500 text-sm text-white px-10 py-4 rounded"
        >
          View All Products
        </NavLink>
      </div>
      <div className="mt-12 border-b border-gray-200"></div>
    </div>
  );
};

export default FlashSalesSection;
