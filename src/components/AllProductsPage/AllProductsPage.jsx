import ProductsGrid from "../UI/ProductsGrid";
import useFetchProducts from "../../hooks/useFetchProducts";

const AllProductsPage = () => {
  const { products } = useFetchProducts({});

  return (
    <div className="max-w-7xl mx-auto pt-4 md:pt-8 pb-20 md:pb-28 px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-8">
        All Products
      </h1>
      <ProductsGrid products={products} />
    </div>
  );
};

export default AllProductsPage;
