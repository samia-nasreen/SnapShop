/* eslint-disable react/prop-types */
import ProductCard from "../../../UI/ProductCard/ProductCard";
import RedSubHeading from "../../../UI/RedSubHeading";

const RelatedItems = ({ relatedProducts }) => {
  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <RedSubHeading subHeading="Related Items" />
      </div>
      <div className="flex flex-wrap">
        {relatedProducts.map((product) => (
          <div className="p-4 w-full lg:w-1/4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;
