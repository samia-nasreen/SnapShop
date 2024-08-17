import Button from "../../UI/Button";
import PaymentMethod from "../../UI/PaymentMethod";
import BorderInput from "../../UI/BorderInput";

/* eslint-disable react/prop-types */
const PlaceOrder = ({ register, handleSubmit, onSubmit }) => {
  return (
    <>
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <PaymentMethod
            id="bank"
            value="Bank"
            label="Bank"
            register={register("paymentMethod")}
          />
          <img src="/assets/banks.png" className="h-7 lg:mr-24" />
        </div>
        <PaymentMethod
          id="cod"
          value="Cash on delivery"
          label="Cash on delivery"
          register={register("paymentMethod")}
          defaultChecked
        />
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 py-4">
        <BorderInput
          placeholder="Coupon Code"
          className="flex-1"
        />
        <Button text="Apply Coupon" fontSize="base" onClick={null} />
      </div>
      <Button
        text="Place Order"
        fontSize="base"
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default PlaceOrder;
