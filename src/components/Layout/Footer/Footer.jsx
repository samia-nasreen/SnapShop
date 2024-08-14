import Account from "./Sections/Account";
import DownloadApp from "./Sections/DownloadApp";
import Exclusive from "./Sections/Exclusive";
import QuickLink from "./Sections/QuickLink";
import Support from "./Sections/Support";

const Footer = () => {
  return (
    <footer className="bg-black pt-16 text-white">
      <div className="container px-10 mx-auto flex flex-wrap justify-between">
        <Exclusive />
        <Support />
        <Account />
        <QuickLink />
        <DownloadApp />
      </div>
      <div className="bg-black py-4 text-center text-gray-600 mt-6 border-t-[1px] border-gray-900">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
