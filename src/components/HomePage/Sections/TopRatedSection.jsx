import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RedSubHeading from "../../UI/RedSubHeading";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import ProductsGrid from "../../UI/ProductsGrid";

const TopRatedSection = () => {
  const [products, setProducts] = useState([]);
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
    <div className="flash-sales mt-16 mb-24 px-4 bg-white relative">
      <RedSubHeading subHeading="This Month" />
      <div className="flex items-center justify-between">
        <Heading text="Top Rated Products" />
        <Button text="View All" onClick={handleViewAllButton} />
      </div>
      <ProductsGrid products={products} />
    </div>
  );
};

export default TopRatedSection;
