import { categoryIcons } from "../../../data/categories";
import RedSubHeading from "../../../components/UI/RedSubHeading";
import Heading from "../../../components/UI/Heading";
import CategoryCard from "../../../components/UI/CategoryCard";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/category/${category}`);
  };

  return (
    <div className="category-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Categories" />
      <Heading text="Browse By Category" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categoryIcons.map((category, index) => (
          <CategoryCard
            category={category}
            key={index}
            onClick={() => handleCategoryClick(category.value)}
          />
        ))}
      </div>
      <div className="mt-16 border-b border-gray-200"></div>
    </div>
  );
};

export default CategorySection;
