import React from "react";

interface HeadingProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  fontSize = "text-2xl sm:text-3xl md:text-4xl",
  fontWeight = "font-medium",
  className = "mb-6 md:mb-10",
}) => {
  return <h2 className={`${fontSize} ${fontWeight} ${className}`}>{text}</h2>;
};

export default Heading;
