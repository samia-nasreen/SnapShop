import { Link } from "react-router-dom";
import React from "react";

interface MenuItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  text,
  href,
  onClick,
}) => {
  return (
    <div
      className="flex items-center px-2 py-2 hover:bg-zinc-600 cursor-pointer"
      onClick={onClick}
    >
      <Link to={href} className="flex items-center w-full">
        <Icon className="text-2xl mr-3" />
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
