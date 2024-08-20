import { categories } from "../../../data/categories";
import RedSubHeading from "../../../components/UI/RedSubHeading";
import Heading from "../../../components/UI/Heading";
import CategoryCard from "../../../components/UI/CategoryCard";

const CategorySection = () => {
  return (
    <div className="category-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Categories" />
      <Heading text="Browse By Category" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <CategoryCard category={category} key={index} />
        ))}
      </div>
      <div className="mt-16 border-b border-gray-200"></div>
    </div>
  );
};

export default CategorySection;
