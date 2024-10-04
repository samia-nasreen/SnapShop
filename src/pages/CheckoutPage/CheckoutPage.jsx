import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkoutSchema } from '../../schemas/checkoutSchema';
import { ordersActions } from '../../store/orders';
import { cartActions } from '../../store/cart';
import CartSummary from './Sections/CartSummary';
import CheckoutForm from './Sections/CheckoutForm';
import Heading from '../../components/UI/Heading';
import Breadcrumb from '../../components/UI/Breadcrumb';
import { toast } from 'react-toastify';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = (data) => {
    const orderDetails = {
      ...data,
      paymentMethod: data.paymentMethod || 'Cash on delivery',
      items: cartItems,
      totalQuantity: cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
      totalPrice: totalAmount,
    };

    dispatch(ordersActions.placeOrder(orderDetails));
    dispatch(cartActions.clearCart());
    console.log(data);
    toast.success('Your order has been placed');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-8 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:pr-24">
        <Breadcrumb parts={['Account', 'My Account', 'Cart', 'Checkout']} />
        <Heading text="Billing Details" />
        <CheckoutForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      </div>
      <CartSummary
        cartItems={cartItems}
        totalAmount={totalAmount}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Checkout;
