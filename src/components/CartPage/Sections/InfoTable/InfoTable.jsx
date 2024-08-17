/* eslint-disable react/prop-types */
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const InfoTable = ({
  cartItems,
  increaseQuantityHandler,
  decreaseQuantityHandler,
}) => {
  return (
    <>
      <TableHeader />
      <div className="space-y-8">
        {cartItems.map((item) => (
          <TableItem
            key={item.id}
            item={item}
            increaseQuantityHandler={increaseQuantityHandler}
            decreaseQuantityHandler={decreaseQuantityHandler}
          />
        ))}
      </div>
    </>
  );
};

export default InfoTable;
