import React from "react";

interface BreadcrumbProps {
  parts: string[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ parts, className }) => {
  return (
    <div className={`text-xs text-gray-500 py-8 ${className}`}>
      {parts.map((part, index) => (
        <span key={index}>
          <span className={index === parts.length - 1 ? "text-black" : ""}>
            {part}
          </span>
          {index < parts.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
