import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../UI/RedSubHeading";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import ProductsGrid from "../../UI/ProductsGrid";
import useFetchProducts from "../../../hooks/useFetchProducts";
import GridSkeleton from "../../UI/GridSkeleton";

const TopRatedSection = () => {
  const navigate = useNavigate();
  const { products, loading } = useFetchProducts({
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
      {loading && <GridSkeleton />}
      {!loading && <ProductsGrid products={products} />}
    </div>
  );
};

export default TopRatedSection;
