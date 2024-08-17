import { useEffect, useState } from "react";
import ProductsGrid from "../UI/ProductsGrid";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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

  return (
    <div className="max-w-7xl mx-auto pt-4 md:pt-8 pb-20 md:pb-28 px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-8">
        All Products
      </h1>
      <ProductsGrid products={products} />
    </div>
  );
};

export default AllProductsPage;
