/* eslint-disable react/prop-types */
import useFetchRelatedProducts from "../../../../hooks/useFetchRelatedProducts";
import ProductsGrid from "../../../../components/UI/ProductsGrid";
import RedSubHeading from "../../../../components/UI/RedSubHeading";
import GridSkeleton from "../../../../components/UI/GridSkeleton";

const RelatedItems = ({ category }) => {
  const { relatedProducts, loading } = useFetchRelatedProducts(category);

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <RedSubHeading subHeading="Related Items" />
      </div>
      {loading && <GridSkeleton />}
      {!loading && <ProductsGrid products={relatedProducts} />}
    </div>
  );
};

export default RelatedItems;
