import React from "react";

interface BorderInputProps {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  fontSize?: string;
  width?: string;
  padding?: string;
  borderColor?: string;
}

const BorderInput: React.FC<BorderInputProps> = ({
  placeholder = "Enter text",
  value,
  onChange,
  className = "",
  fontSize = "",
  width = "w-full",
  padding = "p-4",
  borderColor = "border-gray-600",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${fontSize} border-[1.5px] ${borderColor} rounded ${padding} ${width} ${className}`}
    />
  );
};

export default BorderInput;
