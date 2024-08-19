import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../UI/RedSubHeading";
import TransparentButton from "../../UI/TransparentButton";
import ProductsGrid from "../../UI/ProductsGrid";
import useFetchProducts from "../../../hooks/useFetchProducts";
import GridSkeleton from "../../UI/GridSkeleton";

const JustForYou = () => {
  const navigate = useNavigate();
  const { products, loading } = useFetchProducts({ randomize: true, count: 4 });

  const handleSeeAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <RedSubHeading subHeading="Just For You" />
        <TransparentButton text="See All" onClick={handleSeeAllButton} />
      </div>
      {loading && <GridSkeleton />}
      {!loading && <ProductsGrid products={products} />}
    </div>
  );
};

export default JustForYou;
