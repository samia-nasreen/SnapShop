import ProductCard from "../../UI/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ExploreSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
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

        const selectedProducts = [];
        while (selectedProducts.length < 8 && formattedProducts.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * formattedProducts.length
          );
          selectedProducts.push(formattedProducts.splice(randomIndex, 1)[0]);
        }

        setProducts(selectedProducts);
      });
  }, []);

  return (
    <div className="explore-section mt-16 mb-12 px-4 bg-white relative">
      <div className="flex items-center mr-2 mb-6">
        <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
        <span className="text-red-500 font-semibold">Our Products</span>
      </div>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mr-16 mb-4">
          Explore Our Products
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <NavLink
          to="/products"
          className="bg-red-500 text-sm text-white px-10 py-4 rounded"
        >
          View All Products
        </NavLink>
      </div>
    </div>
  );
};

export default ExploreSection;
