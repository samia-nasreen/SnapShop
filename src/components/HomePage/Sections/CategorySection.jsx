const categories = [
  { icon: "smartphone.png", label: "Phones" },
  { icon: "computer.png", label: "Computers" },
  { icon: "smartwatch.png", label: "SmartWatch" },
  { icon: "camera.png", label: "Camera" },
  { icon: "headphones.png", label: "HeadPhones" },
  { icon: "gaming.png", label: "Gaming" },
];

const CategorySection = () => {
  return (
    <div className="category-section mt-16 mb-12 px-4 bg-white relative">
      <div className="flex items-center mb-6">
        <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
        <span className="text-red-500 font-semibold">Categories</span>
      </div>
      <h2 className="text-4xl font-medium mb-12">Browse By Category</h2>
      <div className="flex justify-between">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-40 p-8 border rounded-md hover:bg-red-100 transition"
          >
            <img
              src={`/src/assets/${category.icon}`}
              alt={category.label}
              className="w-12 h-12 mb-4"
            />
            <span className="text-md">{category.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-16 border-b border-gray-200"></div>
    </div>
  );
};

export default CategorySection;
