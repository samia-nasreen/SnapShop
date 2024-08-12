/* eslint-disable react/prop-types */
import ProductCard from "../../UI/ProductCard";

const RelatedItems = ({ relatedProducts }) => {
  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center mr-2 mb-6">
          <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
          <span className="text-red-500 font-semibold">Related Items</span>
        </div>
      </div>
      <div className="flex flex-wrap">
        {relatedProducts.map((product) => (
          <div className="p-4 w-full md:w-1/2 lg:w-1/4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;
