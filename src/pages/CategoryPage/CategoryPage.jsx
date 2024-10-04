import { useState } from "react";
import ProductsGrid from "../../components/UI/ProductsGrid";
import GridSkeleton from "../../components/UI/GridSkeleton";
import { useGetCategoryProductsQuery } from "../../api/productsApi";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import CategoryPanel from "../HomePage/Sections/SliderSection/CategoryPanel";

const PRODUCTS_PER_PAGE = 8;

const CategoryPage = () => {
  const { category } = useParams();
  const { data, error, isError, isLoading } =
    useGetCategoryProductsQuery(category);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginatedData = data
    ? data.slice(
        currentPage * PRODUCTS_PER_PAGE,
        (currentPage + 1) * PRODUCTS_PER_PAGE
      )
    : [];

  return (
    <div className="max-w-7xl min-h-screen mx-auto pt-4 md:pt-8 pb-20 md:pb-28 px-8">
      <div className="flex">
        <div className="hidden md:block w-1/4 -ml-4 mt-2">
          <CategoryPanel />
        </div>

        <div className="border-r-[1px] border-gray-300 hidden md:block absolute top-36 bottom-48 left-1/4" />

        <div className="w-full md:w-3/4">
          {isLoading && <GridSkeleton lines={5} />}
          {!isLoading && <ProductsGrid products={paginatedData} />}
          {isError && (
            <p className="text-red-500">Error occurred: {error.message}</p>
          )}
        </div>
      </div>
      {!isLoading && !isError && data && (
        <ReactPaginate
          pageCount={Math.ceil(data.length / PRODUCTS_PER_PAGE)}
          onPageChange={handlePageChange}
          containerClassName="flex justify-center mt-6 text-lg font-medium"
          pageClassName="mx-1"
          pageLinkClassName="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-300 transition"
          activeClassName="bg-blue-500 text-white"
          activeLinkClassName="bg-blue-500 text-white hover:bg-blue-500"
          previousLabel="<"
          previousClassName="mx-1"
          previousLinkClassName="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-300 transition"
          nextLabel=">"
          nextClassName="mx-1"
          nextLinkClassName="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-300 transition"
        />
      )}
    </div>
  );
};

export default CategoryPage;
