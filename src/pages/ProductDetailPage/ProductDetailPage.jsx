import { useParams } from "react-router-dom";
import ProductDetail from "./Sections/ProductDetail/ProductDetail";
import RelatedItems from "./Sections/RelatedItems/RelatedItems";
import Breadcrumb from "../../components/UI/Breadcrumb";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import { useGetProductQuery } from "../../api/productsApi";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const {
    data: product,
    error,
    isError,
    isLoading,
  } = useGetProductQuery(productId);

  return (
    <div className="px-1 md:px-28">
      <Breadcrumb
        parts={[
          "Account",
          product ? product.category : "Loading...",
          product ? product.name : "Loading...",
        ]}
        className="ml-4"
      />
      {isLoading && <ProductDetailSkeleton />}
      {!isLoading && product && (
        <>
          <ProductDetail product={product} />
          <RelatedItems category={product.category} />
        </>
      )}
      {isError && <p>Error occured: {error}</p>}
    </div>
  );
};

export default ProductDetailPage;
