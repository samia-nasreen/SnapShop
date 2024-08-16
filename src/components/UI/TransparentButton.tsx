import React from "react";

interface TransparentButtonProps {
  text: string;
  onClick: () => void;
  fontWeight?: string;
  className?: string;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  text,
  onClick,
  fontWeight = "normal",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border border-gray-600 text-gray-900 font-${fontWeight} px-[2em] py-[0.8em] rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default TransparentButton;
