import JustForYou from "./Sections/JustForYou";
import Wishlist from "./Sections/Wishlist";

const WishlistPage = () => {
  return (
    <div className="px-8 sm:px-8 md:px-16 lg:px-28">
      <Wishlist />
      <JustForYou />
    </div>
  );
};

export default WishlistPage;
