import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../UI/RedSubHeading";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import ProductsGrid from "../../UI/ProductsGrid";
import useFetchProducts from "../../../hooks/useFetchProducts";
import GridSkeleton from "../../UI/GridSkeleton";

const ExploreSection = () => {
  const navigate = useNavigate();
  const { products, loading } = useFetchProducts({ randomize: true, count: 8 });

  const handleViewAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="explore-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Our Products" />
      <Heading text="Explore Our Products" />
      {loading && <GridSkeleton lines={2} />}
      {!loading && <ProductsGrid products={products} />}
      <div className="mt-12 text-center">
        <Button text="View All Products" onClick={handleViewAllButton} />
      </div>
    </div>
  );
};

export default ExploreSection;
