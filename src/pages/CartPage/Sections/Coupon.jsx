import Button from "../../../components/UI/Button";
import BorderInput from "../../../components/UI/BorderInput";

const Coupon = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-row justify-center md:pr-4 mb-4 md:mb-0 space-x-4">
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
