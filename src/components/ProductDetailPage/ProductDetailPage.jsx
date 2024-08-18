import { useParams } from "react-router-dom";
import ProductDetail from "./Sections/ProductDetail/ProductDetail";
import RelatedItems from "./Sections/RelatedItems/RelatedItems";
import Breadcrumb from "../UI/Breadcrumb";
import useFetchProduct from "../../hooks/useFetchProduct";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { product, loading } = useFetchProduct(productId);

  if (loading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="px-8 md:px-28">
      <Breadcrumb
        parts={["Account", product.category, product.name]}
        className="ml-4"
      />
      <ProductDetail product={product} />
      <RelatedItems category={product.category} />
    </div>
  );
};

export default ProductDetailPage;
