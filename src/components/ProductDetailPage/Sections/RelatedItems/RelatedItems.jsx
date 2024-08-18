/* eslint-disable react/prop-types */
import useFetchRelatedProducts from "../../../../hooks/useFetchRelatedProducts";
import ProductsGrid from "../../../UI/ProductsGrid";
import RedSubHeading from "../../../UI/RedSubHeading";

const RelatedItems = ({ category }) => {
  const { relatedProducts } = useFetchRelatedProducts(category);

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <RedSubHeading subHeading="Related Items" />
      </div>
      <ProductsGrid products={relatedProducts} />
    </div>
  );
};

export default RelatedItems;
