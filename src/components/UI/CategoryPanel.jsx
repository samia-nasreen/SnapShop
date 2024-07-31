const CategoryPanel = () => {
  return (
    <div className="w-1/4 p-4">
      <ul className="space-y-4">
        <li className="cursor-pointer hover:text-gray-700">Woman’s Fashion</li>
        <li className="cursor-pointer hover:text-gray-700">Men’s Fashion</li>
        <li className="cursor-pointer hover:text-gray-700">Electronics</li>
        <li className="cursor-pointer hover:text-gray-700">Home & Lifestyle</li>
        <li className="cursor-pointer hover:text-gray-700">Medicine</li>
        <li className="cursor-pointer hover:text-gray-700">Sports & Outdoor</li>
        <li className="cursor-pointer hover:text-gray-700">Baby’s & Toys</li>
        <li className="cursor-pointer hover:text-gray-700">Groceries & Pets</li>
        <li className="cursor-pointer hover:text-gray-700">Health & Beauty</li>
      </ul>
    </div>
  );
};

export default CategoryPanel;
