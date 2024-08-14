import ContactInfoCard from "./Sections/ContactInfoCard";
import ContactForm from "./Sections/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 pb-32">
      <div className="w-full max-w-7xl px-8">
        <div className="text-xs text-gray-500 mb-8 mt-2">
          <span className="mr-2">Home</span> /{" "}
          <span className="ml-2 text-black">Contact</span>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <ContactInfoCard />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
