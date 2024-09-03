import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../../components/UI/RedSubHeading";
import Button from "../../../components/UI/Button";
import Heading from "../../../components/UI/Heading";
import ProductsGrid from "../../../components/UI/ProductsGrid";
import GridSkeleton from "../../../components/UI/GridSkeleton";
import { useGetAllProductsQuery } from "../../../api/productsApi";

const TopRatedSection = () => {
  const navigate = useNavigate();
  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery({
    minRating: 4,
    randomize: true,
    count: 4,
  });

  const handleViewAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="flash-sales mt-16 mb-24 px-4 bg-white relative">
      <RedSubHeading subHeading="This Month" />
      <div className="flex items-center justify-between mb-4 ">
        <Heading text="Top Rated Products" />
        <Button text="View All" onClick={handleViewAllButton} />
      </div>
      {isLoading && <GridSkeleton />}
      {!isLoading && <ProductsGrid products={products} />}
      {isError && <p>Error occured: {error}</p>}
    </div>
  );
};

export default TopRatedSection;
