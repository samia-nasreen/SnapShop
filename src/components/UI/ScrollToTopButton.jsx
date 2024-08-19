import UpArrowIcon from "/assets/arrow_up_icon.png";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="bg-gray-200 p-4 rounded-full shadow-lg hover:bg-gray-300 transition"
      onClick={scrollToTop}
    >
      <img src={UpArrowIcon} alt="Back to top" className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
