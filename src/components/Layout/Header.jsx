import downarrow from "../../assets/downarrow.svg";

const Header = () => {
  return (
    <div className="hidden md:flex bg-black text-white font-sans p-4 flex items-center justify-between h-12">
      <div className="flex items-center flex-grow justify-center">
        <span className="inline-block text-sm mr-2 ml-[130px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        </span>
        <span className="font-medium text-sm underline cursor-pointer">
          ShopNow
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-sm mr-2">English</span>
        <img src={downarrow} alt="Down Arrow" className="w-4 h-4 mr-24" />
      </div>
    </div>
  );
};

export default Header;
