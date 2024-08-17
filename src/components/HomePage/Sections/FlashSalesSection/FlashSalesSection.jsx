import { useState, useEffect, useRef } from "react";
import TimeRemaining from "./TimeRemaining";
import ScrollLeftButton from "../../../UI/ScrollButtons/ScrollLeftButton";
import ScrollRightButton from "../../../UI/ScrollButtons/ScrollRightButton";
import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../../UI/RedSubHeading";
import Button from "../../../UI/Button";
import Heading from "../../../UI/Heading";
import ProductsGrid from "../../../UI/ProductsGrid";

const FlashSalesSection = () => {
  const [products, setProducts] = useState([]);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

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

  const handleViewAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="flash-sales mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Today's" />
      <div className="flex items-center justify-between">
        <Heading text="Flash Sales" />
        <TimeRemaining />
      </div>
      <div className="relative">
        <ProductsGrid
          products={products}
          scrollContainerRef={scrollContainerRef}
          scroll
        />
        <ScrollLeftButton scrollLeft={scrollLeft} />
        <ScrollRightButton scrollRight={scrollRight} />
      </div>
      <div className="mt-4 text-center">
        <Button text="View All Products" onClick={handleViewAllButton} />
      </div>
      <div className="mt-12 border-b border-gray-200"></div>
    </div>
  );
};

export default FlashSalesSection;
