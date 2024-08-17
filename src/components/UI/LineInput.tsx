import React from "react";
import { UseFormRegister, FieldErrors, FieldError } from "react-hook-form";

interface LineInputProps {
  label: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  [key: string]: any;
}

const LineInput: React.FC<LineInputProps> = ({
  label,
  register,
  errors,
  ...rest
}) => (
  <div className="mb-6">
    <input
      {...register(label)}
      {...rest}
      className="underline-input"
    />
    {errors[label] && (
      <p className="text-red-500 text-sm mb-2">
        {(errors[label] as FieldError)?.message || "Invalid input"}
      </p>
    )}
  </div>
);

export default LineInput;
