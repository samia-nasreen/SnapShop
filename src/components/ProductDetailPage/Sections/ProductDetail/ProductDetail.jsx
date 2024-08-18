import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeliveryDetails from "./DeliveryDetails";
import Rating from "../../../UI/Rating";
import WishListIcon from "../../../UI/WishlistIcon";
import Quantity from "./Quantity";
import Colors from "./Colors";
import Sizes from "./Sizes";
import ImageGrid from "./ImageGrid";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        const product = {
          id: data.id,
          name: data.title,
          image: data.image,
          description: data.description,
          discount: Math.floor(Math.random() * 50) + 10,
          price: data.price,
          originalPrice: (data.price * (1 + Math.random() * 0.5)).toFixed(2),
          rating: data.rating.rate,
          ratingCount: data.rating.count,
        };
        setProduct(product);
      });
  }, [productId]);

  if (!product) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 px-4 max-w-7xl mx-auto mb-20">
      <ImageGrid image={product.image} title={product.name} />
      <div className="lg:w-1/3 flex flex-col space-y-4 lg:pl-8">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          {product.name}
        </h1>
        <div className="flex items-center h-4">
          <Rating rating={product.rating} size="5" />
          <span className="ml-2 text-gray-500">
            ({product.ratingCount} Reviews)
          </span>
          <span className="text-gray-500 px-4">|</span>
          <span className="text-green-500">In Stock</span>
        </div>
        <div className="text-xl md:text-[28px] font-medium text-gray-900">
          ${product.price}
        </div>
        <p className="text-xs md:text-sm text-black md:pb-2">
          {product.description}
        </p>
        <div className="border-[1px] border-gray-400"></div>
        <div className="flex flex-col space-y-4">
          <Colors />
          <Sizes />
        </div>
        <div className="flex flex-row space-x-3 md:space-x-4 pt-4 pb-6 items-center">
          <Quantity product={product} />
          <WishListIcon product={product} />
        </div>
        <DeliveryDetails />
      </div>
    </div>
  );
};

export default ProductDetail;
