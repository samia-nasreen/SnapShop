import { useParams } from "react-router-dom";
import ProductDetail from "./Sections/ProductDetail/ProductDetail";
import RelatedItems from "./Sections/RelatedItems/RelatedItems";
import Breadcrumb from "../UI/Breadcrumb";
import useFetchProduct from "../../hooks/useFetchProduct";
import ProductDetailSkeleton from "../UI/ProductDetailSkeleton";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { product, loading } = useFetchProduct(productId);

  return (
    <div className="px-8 md:px-28">
      <Breadcrumb
        parts={[
          "Account",
          product ? product.category : "Loading...",
          product ? product.name : "Loading...",
        ]}
        className="ml-4"
      />
      {loading && <ProductDetailSkeleton />}
      {!loading && product && (
        <>
          <ProductDetail product={product} />
          <RelatedItems category={product.category} />
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
