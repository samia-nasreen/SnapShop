const SideBar = () => (
  <div
    className="fixed inset-y-0 left-0 w-64 bg-white z-40 md:relative md:translate-x-0 md:w-1/4 px-2 py-4 md:py-0 
      translate-x-[-100%] md:translate-x-0 hidden md:block"
  >
    <ul className="space-y-4">
      <li className="text-lg font-medium">Manage My Account</li>
      <li className="text-red-500 ml-8">My Profile</li>
      <li className="text-gray-500 ml-8">Address Book</li>
      <li className="text-gray-500 ml-8">My Payment Options</li>
    </ul>
    <ul className="mt-10 space-y-4">
      <li className="text-lg font-medium">My Orders</li>
      <li className="text-gray-500 ml-8">My Returns</li>
      <li className="text-gray-500 ml-8">My Cancellations</li>
    </ul>
    <ul className="mt-10 space-y-4">
      <li className="text-lg font-medium">My WishList</li>
    </ul>
  </div>
);

export default SideBar;
