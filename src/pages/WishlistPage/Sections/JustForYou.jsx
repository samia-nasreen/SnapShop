import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../../components/UI/RedSubHeading";
import TransparentButton from "../../../components/UI/TransparentButton";
import ProductsGrid from "../../../components/UI/ProductsGrid";
import GridSkeleton from "../../../components/UI/GridSkeleton";
import { useGetAllProductsQuery } from "../../../api/productsApi";

const JustForYou = () => {
  const navigate = useNavigate();
  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery({ randomize: true, count: 4 });

  const handleSeeAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <RedSubHeading subHeading="Just For You" />
        <TransparentButton text="See All" onClick={handleSeeAllButton} />
      </div>
      {isLoading && <GridSkeleton />}
      {!isLoading && <ProductsGrid products={products} />}
      {isError && <p>Error occured: {error}</p>}
    </div>
  );
};

export default JustForYou;
