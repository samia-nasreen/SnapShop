import ProductCard from "../../UI/ProductCard";
import { useState, useEffect } from "react";

const JustForYou = () => {
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

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center mr-2 mb-6">
          <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
          <span className="text-xl">Just For You</span>
        </div>
        <button className="px-10 py-3 border border-gray-900 rounded-md">
          See All
        </button>
      </div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div className="p-4 w-full md:w-1/2 lg:w-1/4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
