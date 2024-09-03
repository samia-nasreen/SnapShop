import OurStory from "./Sections/OurStory/OurStory";
import Stats from "./Sections/Stats/Stats";
import Team from "./Sections/Team/Team";
import ServicesSection from "../HomePage/Sections/ServicesSection/ServicesSection";
import Breadcrumb from "../../components/UI/Breadcrumb";

const AboutPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28">
      <Breadcrumb parts={["Home", "About"]} className="ml-4" />
      <OurStory />
      <Stats />
      <Team />
      <ServicesSection />
    </div>
  );
};

export default AboutPage;
