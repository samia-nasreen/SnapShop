import React, { RefObject } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  discount: number;
  price: number;
  originalPrice: string;
  category: string;
  rating: number;
  ratingCount: number;
}

interface ProductsGridProps {
  products: Product[];
  scroll?: boolean;
  scrollContainerRef?: RefObject<HTMLDivElement> | null;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  scroll = false,
  scrollContainerRef = null,
}) => {
  return (
    <div
      ref={scroll ? scrollContainerRef : null}
      className={`${
        scroll
          ? "flex overflow-x-auto space-x-4 scrollbar-hide py-4"
          : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4"
      }`}
    >
      {products.map((product) => (
        <div key={product.id} className={scroll ? "flex-shrink-0" : ""}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
