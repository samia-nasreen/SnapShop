import React from "react";

interface RedButtonProps {
  text: string;
  onClick: () => void;
  fontSize?: string;
  isDisabled?: boolean;
  className?: string;
}

const RedButton: React.FC<RedButtonProps> = ({
  text,
  onClick,
  fontSize = "sm",
  isDisabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        px-[2.5em] py-[1.15em] rounded text-white 
        text-${fontSize} 
        ${
          isDisabled
            ? "bg-gray-500 opacity-50 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        }
        ${className} // Additional classes
      `}
    >
      {text}
    </button>
  );
};

export default RedButton;
