import OurStory from "./Sections/OurStory";
import Stats from "./Sections/Stats";
import Team from "./Sections/Team";
import ServicesSection from "../HomePage/Sections/ServicesSection";

const AboutPage = () => {
  return (
    <div className="px-28">
      <OurStory />
      <Stats />
      <Team />
      <ServicesSection />
    </div>
  );
};

export default AboutPage;
