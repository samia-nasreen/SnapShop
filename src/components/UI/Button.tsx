import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  isDisabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  fontSize = "sm",
  color = "bg-red-500",
  hoverColor = "hover:bg-red-600",
  isDisabled = false,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        px-[2.5em] py-[1.15em] rounded text-white 
        text-${fontSize} 
        ${color}
        ${isDisabled ? "bg-gray-500 opacity-50 cursor-not-allowed" : hoverColor}
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
