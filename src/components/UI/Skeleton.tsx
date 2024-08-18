import React from "react";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  width = "100%",
  height = "1em",
  borderRadius = "0.25em",
}) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
