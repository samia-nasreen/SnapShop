const QuickLink = () => {
  return (
    <div className="w-full px-4 mb-6">
      <h2 className="text-lg font-normal mb-4">Quick Link</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            Privacy Policy
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            Terms Of Use
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-light hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLink;
