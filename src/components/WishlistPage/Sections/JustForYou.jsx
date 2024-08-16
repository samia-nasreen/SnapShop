import { useNavigate } from "react-router-dom";
import ProductCard from "../../UI/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import RedSubHeading from "../../UI/RedSubHeading";
import TransparentButton from "../../UI/TransparentButton";

const JustForYou = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        const randomProducts = [];
        while (randomProducts.length < 4 && json.length > 0) {
          const randomIndex = Math.floor(Math.random() * json.length);
          randomProducts.push(json.splice(randomIndex, 1)[0]);
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

  const handleSeeAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <RedSubHeading subHeading="Just For You" />
        <TransparentButton text="See All" onClick={handleSeeAllButton} />
      </div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div className="p-4 w-full sm:w-1/2 lg:w-1/4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
