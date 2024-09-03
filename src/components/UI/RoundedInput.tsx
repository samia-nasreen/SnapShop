import React from "react";
import { UseFormRegister, FieldErrors, FieldError } from "react-hook-form";

interface RoundedInputProps {
  label?: string;
  name: string;
  type?: string;
  defaultValue?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  required?: boolean;
  placeholder?: string;
}

const RoundedInput: React.FC<RoundedInputProps> = ({
  label,
  name,
  type = "text",
  defaultValue,
  register,
  errors,
  required = false,
  placeholder = "",
}) => {
  return (
    <div>
      {label && (
        <label className="block font-medium text-gray-600 mb-1">
          {label}
          {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full p-4 border-none bg-zinc-100 rounded-md"
        defaultValue={defaultValue}
        {...register(name, { required })}
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">
          {(errors[name] as FieldError)?.message || "Invalid input"}
        </p>
      )}
    </div>
  );
};

export default RoundedInput;
