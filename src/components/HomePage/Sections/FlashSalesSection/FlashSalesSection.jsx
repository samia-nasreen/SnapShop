import { useRef } from "react";
import TimeRemaining from "./TimeRemaining";
import ScrollLeftButton from "../../../UI/ScrollButtons/ScrollLeftButton";
import ScrollRightButton from "../../../UI/ScrollButtons/ScrollRightButton";
import { useNavigate } from "react-router-dom";
import RedSubHeading from "../../../UI/RedSubHeading";
import Button from "../../../UI/Button";
import Heading from "../../../UI/Heading";
import ProductsGrid from "../../../UI/ProductsGrid";
import useFetchProducts from "../../../../hooks/useFetchProducts";
import GridSkeleton from "../../../UI/GridSkeleton";

const FlashSalesSection = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const { products, loading } = useFetchProducts({
    limit: 10,
    randomize: true,
  });

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  };

  const handleViewAllButton = () => {
    navigate("/products");
  };

  return (
    <div className="flash-sales mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Today's" />
      <div className="flex items-start justify-between">
        <Heading text="Flash Sales" />
        <TimeRemaining />
      </div>
      <div className="relative">
        {loading && <GridSkeleton />}
        {!loading && (
          <ProductsGrid
            products={products}
            scrollContainerRef={scrollContainerRef}
            scroll
          />
        )}
        <ScrollLeftButton scrollLeft={scrollLeft} />
        <ScrollRightButton scrollRight={scrollRight} />
      </div>
      <div className="mt-4 text-center">
        <Button text="View All Products" onClick={handleViewAllButton} />
      </div>
      <div className="mt-12 border-b border-gray-200"></div>
    </div>
  );
};

export default FlashSalesSection;
