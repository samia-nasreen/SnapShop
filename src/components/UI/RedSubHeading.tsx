import React from "react";

interface RedSubHeadingProps {
  subHeading: string;
}

const RedSubHeading: React.FC<RedSubHeadingProps> = ({ subHeading }) => {
  return (
    <div className="flex items-center mr-2 mb-6">
      <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
      <span className="text-red-500 font-semibold">{subHeading}</span>
    </div>
  );
};

export default RedSubHeading;
