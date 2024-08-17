import Button from "../../UI/Button";
import RoundedInput from "../../UI/RoundedInput";

const ContactForm = () => {
  return (
    <div
      className="bg-white rounded-md px-8 py-12 w-full md:w-2/3"
      style={{ boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.05)" }}
    >
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <RoundedInput name="name" placeholder="Your Name" />
          <RoundedInput name="email" placeholder="Your Email" />
          <RoundedInput type="tel" name="phone" placeholder="Your Phone" />
        </div>
        <textarea
          placeholder="Your Message"
          rows="8"
          className="w-full p-3 border border-white bg-stone-100 rounded"
        />
        <div className="pt-4 pb-2 text-right">
          <Button text="Send Message" onClick={null} fontSize="base" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
