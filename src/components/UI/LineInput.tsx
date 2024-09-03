import React from "react";
import { UseFormRegister, FieldErrors, FieldError } from "react-hook-form";

interface LineInputProps {
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  type: string;
  placeholder: string;
  [key: string]: any;
}

const LineInput: React.FC<LineInputProps> = ({
  name,
  register,
  errors,
  type = "text",
  placeholder = "",
  ...rest
}) => (
  <div className="mb-6">
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      {...rest}
      className="underline-input"
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mb-2">
        {(errors[name] as FieldError)?.message || "Invalid input"}
      </p>
    )}
  </div>
);

export default LineInput;
