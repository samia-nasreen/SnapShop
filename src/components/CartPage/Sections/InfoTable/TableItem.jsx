/* eslint-disable react/prop-types */
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TableItem = ({
  item,
  increaseQuantityHandler,
  decreaseQuantityHandler,
  formatCurrency,
}) => {
  return (
    <div className="bg-white rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.03)] p-4 sm:p-6 grid grid-cols-3 md:grid-cols-4">
      <div className="flex items-center ml-4 md:ml-10">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-6"
        />
        <span className="text-xs sm:text-base">{item.name}</span>
      </div>
      <div className="flex items-center justify-center">
        ${formatCurrency(item.price)}
      </div>
      <div className="flex items-center justify-center">
        <div className="border-[1.5px] border-gray-400 shadow overflow-hidden flex items-center py-1 sm:py-2 px-1 rounded-md">
          <span className="text-center px-2 sm:px-4">{item.quantity}</span>
          <div className="flex flex-col">
            <button
              className="px-1 sm:px-2 py-0.5 hover:bg-gray-300 text-xs"
              onClick={() => increaseQuantityHandler(item.id)}
            >
              <IoIosArrowUp />
            </button>
            <button
              className="px-1 sm:px-2 py-0.5 hover:bg-gray-300 text-xs"
              onClick={() => decreaseQuantityHandler(item.id)}
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end mr-4 md:mr-10">
        ${formatCurrency(item.totalPrice)}
      </div>
    </div>
  );
};

export default TableItem;
