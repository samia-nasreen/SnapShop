import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../store/cart";
import { useDispatch } from "react-redux";
import TransparentButton from "../../../components/UI/TransparentButton";

const CartActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCartButton = () => {
    dispatch(cartActions.clearCart());
  };

  const handleReturnToShopButton = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-row justify-between mt-8">
      <TransparentButton
        text="Return To Shop"
        fontWeight="medium"
        onClick={handleReturnToShopButton}
      />
      <TransparentButton
        text="Clear Cart"
        fontWeight="medium"
        onClick={handleClearCartButton}
      />
    </div>
  );
};

export default CartActions;
