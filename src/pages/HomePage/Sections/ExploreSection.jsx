import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../../components/UI/RedSubHeading";
import Button from "../../../components/UI/Button";
import Heading from "../../../components/UI/Heading";
import ProductsGrid from "../../../components/UI/ProductsGrid";
import GridSkeleton from "../../../components/UI/GridSkeleton";
import { useGetAllProductsQuery } from "../../../api/productsApi";

const ExploreSection = () => {
  const navigate = useNavigate();
  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery({
    randomize: true,
    count: 8,
  });

  const handleViewAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="explore-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Our Products" />
      <Heading text="Explore Our Products" />
      {isLoading && <GridSkeleton lines={2} />}
      {!isLoading && <ProductsGrid products={products} />}
      {isError && <p>Error occured: {error}</p>}
      <div className="mt-12 text-center">
        <Button text="View All Products" onClick={handleViewAllButton} />
      </div>
    </div>
  );
};

export default ExploreSection;
