import React from "react";
import DeliveryDetails from "./DeliveryDetails";
import Rating from "../../../../components/UI/Rating";
import WishListIcon from "../../../../components/UI/WishlistIcon";
import Colors from "./Colors";
import Sizes from "./Sizes";
import ImageGrid from "./ImageGrid";
import QuantitySelector from "./QuantitySelector";
import { Product } from "../../../../types/product";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 px-4 max-w-7xl mx-auto mb-20">
      <ImageGrid image={product.image} title={product.name} />
      <div className="lg:w-1/3 flex flex-col space-y-4 lg:pl-2">
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
          <QuantitySelector product={product} />
          <WishListIcon size="10" product={product} />
        </div>
        <DeliveryDetails />
      </div>
    </div>
  );
};

export default ProductDetail;
