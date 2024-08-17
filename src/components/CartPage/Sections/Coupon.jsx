import Button from "../../UI/Button";
import BorderInput from "../../UI/BorderInput";

const Coupon = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:pr-4 mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4">
      <BorderInput
        placeholder="Coupon Code"
        fontSize="text-sm"
        className="flex-1"
      />
      <Button text="Apply Coupon" onClick={null} className="md:ml-4" />
    </div>
  );
};

export default Coupon;
