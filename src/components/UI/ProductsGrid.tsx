import React, { RefObject } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../types/product";

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
