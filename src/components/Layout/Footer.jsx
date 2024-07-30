import sendIcon from "../../assets/send_icon.png";

const Footer = () => {
  return (
    <footer className="bg-black pt-16 text-white">
      <div className="container px-10 mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-5 text-lg">Subscribe</p>
          <p className="mb-3 text-sm font-light">
            Get 10% off your first order
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 pl-4 rounded-l bg-black border-2 border-r-0 border-gray-400 placeholder-gray-500"
              style={{ width: "180px", fontSize: "14px" }}
            />
            <button
              type="submit"
              className="p-2 -ml-9 rounded-r border-2 border-l-0 border-gray-400 flex items-center justify-center"
              style={{ width: "40px" }}
            >
              <img src={sendIcon} alt="Send" />
            </button>
          </form>
        </div>
        <div className="w-full ml-2 sm:w-1/2 lg:w-1/5 px-4 mb-6">
          <h2 className="text-lg font-normal mb-4">Support</h2>
          <p className="w-40 mb-4 text-sm font-light">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mb-4 text-sm font-light">exclusive@gmail.com</p>
          <p className="text-sm font-light">+88015-88888-9999</p>
        </div>
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
        <div className="w-full -ml-10 sm:w-1/2 lg:w-1/5 px-4 mb-6">
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
        <div className="w-full -ml-10 sm:w-1/2 lg:w-1/5 px-4 mb-6">
          <h2 className="text-lg font-normal mb-4">Download App</h2>
          <p className="mb-3 text-xs text-gray-400">
            Save $3 with App New User Only
          </p>
          <div className="mb-4 flex">
            <img
              src="/src/assets/qr_code.png"
              alt="QR Code"
              className="mb-2 w-20 mr-2"
            />
            <div>
              <img
                src="/src/assets/google_play.png"
                alt="Google Play"
                className="mb-2 h-9"
              />
              <img
                src="/src/assets/app_store.png"
                alt="App Store"
                className="mb-2 h-9"
              />
            </div>
          </div>
          <div className="flex space-x-6">
            <img
              src="/src/assets/facebook_icon.png"
              alt="Facebook"
              className="ml-2 w-6 h-6"
            />
            <img
              src="/src/assets/twitter_icon.png"
              alt="Twitter"
              className="mt-0.5 w-5 h-5"
            />
            <img
              src="/src/assets/instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
            <img
              src="/src/assets/linkedin_icon.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
      <div className="bg-black py-4 text-center text-gray-600 mt-6 border-t-[1px] border-gray-900">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
