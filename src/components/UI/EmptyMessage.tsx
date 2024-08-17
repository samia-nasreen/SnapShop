import React from "react";

interface EmptyCartProps {
  isEmpty: boolean;
  message: string;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ isEmpty, message }) => {
  return (
    <>
      {isEmpty && (
        <div className="text-center py-10">
          <h3 className="text-xl">{message}</h3>
        </div>
      )}
    </>
  );
};

export default EmptyCart;
