/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard/ProductCard";

const ProductsGrid = ({
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
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
