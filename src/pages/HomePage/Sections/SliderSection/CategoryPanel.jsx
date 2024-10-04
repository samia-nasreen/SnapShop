import { useNavigate, useLocation } from "react-router-dom";
import { categories } from "../../../../data/categories";

const CategoryPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    navigate(`/products/category/${category}`);
  };

  const isActiveCategory = (category) => {
    return location.pathname === `/products/category/${category}`;
  };

  return (
    <div className="w-full p-4">
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.value}
            className={`cursor-pointer hover:text-gray-700 ${
              isActiveCategory(category.value)
                ? "text-gray-700 font-semibold text-lg"
                : ""
            }`}
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
