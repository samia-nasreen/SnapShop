const Account = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-6">
      <h2 className="text-lg font-normal mb-4">Account</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            My Account
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            Login / Register
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            Cart
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            Wishlist
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-light hover:text-gray-400">
            Shop
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Account;
