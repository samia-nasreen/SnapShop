import React from "react";

interface Category {
  icon: string;
  label: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 border rounded-md hover:bg-red-100 transition">
      <img
        src={`/assets/${category.icon}`}
        alt={category.label}
        className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-4"
      />
      <span className="text-sm md:text-md">{category.label}</span>
    </div>
  );
};

export default CategoryCard;
