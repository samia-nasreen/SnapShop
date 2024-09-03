import React from "react";
import ProductsGrid from "../../../../components/UI/ProductsGrid";
import RedSubHeading from "../../../../components/UI/RedSubHeading";
import GridSkeleton from "../../../../components/UI/GridSkeleton";
import { useGetRelatedProductsQuery } from "../../../../api/productsApi";

interface RelatedItemsProps {
  category: string;
}

const RelatedItems: React.FC<RelatedItemsProps> = ({ category }) => {
  const {
    data: relatedProducts,
    isError,
    isLoading,
  } = useGetRelatedProductsQuery(category);

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <RedSubHeading subHeading="Related Items" />
      </div>
      {isLoading && <GridSkeleton />}
      {!isLoading && <ProductsGrid products={relatedProducts || []} />}
      {isError && <p>Error occured</p>}
    </div>
  );
};

export default RelatedItems;
