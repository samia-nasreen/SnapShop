import ContactInfoCard from "./Sections/ContactInfoCard";
import ContactForm from "./Sections/ContactForm";
import Breadcrumb from "../../components/UI/Breadcrumb";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center px-4 pb-24 pb-32">
      <div className="w-full max-w-7xl px-8">
        <Breadcrumb parts={["Home", "Contact"]} />
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <ContactInfoCard />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
