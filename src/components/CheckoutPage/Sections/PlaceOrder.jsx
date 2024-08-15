/* eslint-disable react/prop-types */
const PlaceOrder = ({ register, handleSubmit, onSubmit }) => {
  return (
    <>
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <input
              type="radio"
              id="bank"
              {...register("paymentMethod")}
              value="Bank"
              className="appearance-none w-6 h-6 mr-2 border-[1.5px] border-black checked:bg-black checked:ring-transparent focus:ring-0"
            />
            <label htmlFor="bank" className="ml-2">
              Bank
            </label>
          </div>
          <img src="/assets/banks.png" className="h-7 lg:mr-24" />
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="cod"
            {...register("paymentMethod")}
            value="Cash on delivery"
            className="appearance-none w-6 h-6 mr-2 border-[1.5px] border-black checked:bg-black checked:ring-transparent focus:ring-0"
            defaultChecked
          />
          <label htmlFor="cod" className="ml-2">
            Cash on delivery
          </label>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 py-4">
        <input
          type="text"
          placeholder="Coupon Code"
          {...register("couponCode")}
          className="flex-1 p-4 border-[1.5px] rounded"
        />
        <button className="bg-red-500 text-white px-10 py-4 rounded">
          Apply Coupon
        </button>
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-red-500 text-white px-10 py-4 rounded"
      >
        Place Order
      </button>
    </>
  );
};

export default PlaceOrder;
