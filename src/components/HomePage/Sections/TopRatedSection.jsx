import { useNavigate } from "react-router-dom";
import ProductCard from "../../UI/ProductCard/ProductCard";
import { useState, useEffect, useRef } from "react";
import RedSubHeading from "../../UI/RedSubHeading";
import RedButton from "../../UI/RedButton";

const TopRatedSection = () => {
  const [products, setProducts] = useState([]);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

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

  const handleViewAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="flash-sales mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="This Month" />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-4xl font-medium md:mr-16">
          Top Rated Products
        </h2>
        <RedButton text="View All" onClick={handleViewAllButton} />
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
