import React from "react";
import Button from "../../../components/UI/Button";
import PaymentMethod from "../../../components/UI/PaymentMethod";
import BorderInput from "../../../components/UI/BorderInput";
import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";

interface PlaceOrderValues {
  paymentMethod: string;
}

interface PlaceOrderProps {
  register: UseFormRegister<PlaceOrderValues>;
  handleSubmit: UseFormHandleSubmit<PlaceOrderValues>;
  onSubmit: (data: PlaceOrderValues) => void;
}

const PlaceOrder: React.FC<PlaceOrderProps> = ({
  register,
  handleSubmit,
  onSubmit,
}) => {
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
          <img
            src="/assets/banks.png"
            className="h-7 lg:mr-24"
            alt="Bank methods"
          />
        </div>
        <PaymentMethod
          id="cod"
          value="Cash on delivery"
          label="Cash on delivery"
          register={register("paymentMethod")}
          defaultChecked
        />
      </div>
      <div className="flex flex-row space-x-4 py-4">
        <BorderInput placeholder="Coupon Code" className="flex-1" />
        <Button
          text="Apply Coupon"
          fontSize="base"
          onClick={() => {
            /* handle coupon application */
          }}
        />
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
