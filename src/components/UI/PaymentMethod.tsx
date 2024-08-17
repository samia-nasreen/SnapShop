import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface PaymentMethodProps {
  id: string;
  value: string;
  label: string;
  register: UseFormRegisterReturn;
  defaultChecked?: boolean;
  className?: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  id,
  value,
  label,
  register,
  defaultChecked = false,
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="radio"
        id={id}
        {...register}
        value={value}
        className="appearance-none w-6 h-6 mr-2 border-[1.5px] border-black checked:bg-black checked:ring-transparent focus:ring-0"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default PaymentMethod;
