import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import MenuItem from "./MenuItem";
import React from "react";

interface AccountMenuOptionsProps {
  closeDropdown: () => void;
  logout: () => void;
}

const AccountMenuOptions: React.FC<AccountMenuOptionsProps> = ({
  closeDropdown,
  logout,
}) => {
  return (
    <div className="text-white p-3">
      <MenuItem
        icon={AiOutlineUser}
        text="Manage My Account"
        href="/profile"
        onClick={closeDropdown}
      />
      <MenuItem
        icon={LuShoppingBag}
        text="My Order"
        href="#orders"
        onClick={closeDropdown}
      />
      <MenuItem
        icon={MdOutlineCancel}
        text="My Cancellations"
        href="#cancellations"
        onClick={closeDropdown}
      />
      <MenuItem
        icon={FaRegStar}
        text="My Reviews"
        href="#reviews"
        onClick={closeDropdown}
      />
      <div
        className="flex items-center w-full px-2 py-2 hover:bg-zinc-600 cursor-pointer"
        onClick={logout}
      >
        <BiLogOut className="text-2xl mr-3" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default AccountMenuOptions;
