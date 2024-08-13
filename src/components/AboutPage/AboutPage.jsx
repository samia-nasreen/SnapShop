import OurStory from "./Sections/OurStory";
import Stats from "./Sections/Stats";
import Team from "./Sections/Team";
import ServicesSection from "../HomePage/Sections/ServicesSection";

const AboutPage = () => {
  return (
    <div className="px-8 sm:px-8 md:px-16 lg:px-28">
      <OurStory />
      <Stats />
      <Team />
      <ServicesSection />
    </div>
  );
};

export default AboutPage;
