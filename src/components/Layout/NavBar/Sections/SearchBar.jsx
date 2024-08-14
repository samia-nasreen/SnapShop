/* eslint-disable react/prop-types */
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ className = "", ...props }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="What are you looking for?"
        className="px-4 py-2 pr-10 border-none bg-gray-100 rounded w-full"
        {...props}
      />
      <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 text-2xl" />
    </div>
  );
};

export default SearchBar;
