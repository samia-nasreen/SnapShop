import BuyNowSection from "./Sections/BuyNowSection";
import CategorySection from "./Sections/CategorySection";
import ExploreSection from "./Sections/ExploreSection";
import FlashSalesSection from "./Sections/FlashSalesSection";
import NewArrivalSection from "./Sections/NewArrivalSection";
import ServicesSection from "./Sections/ServicesSection";
import SliderSection from "./Sections/SliderSection";
import TopRatedSection from "./Sections/TopRatedSection";

const HomePage = () => {
  return (
    <div className="px-8 sm:px-8 md:px-16 lg:px-28">
      <SliderSection />
      <FlashSalesSection />
      <CategorySection />
      <TopRatedSection />
      <BuyNowSection />
      <ExploreSection />
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
