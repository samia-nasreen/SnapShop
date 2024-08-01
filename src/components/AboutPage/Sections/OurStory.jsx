const OurStory = () => {
  return (
    <div className="max-w-7xl -ml-3 -mt-2 py-12 md:px-8">
      <div className="text-xs text-gray-500 mb-8">
        <span className="mr-2">Home</span> /{" "}
        <span className="ml-2 text-black">About</span>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="w-full md:w-1/2 -mt-8">
          <h2 className="text-6xl font-medium mb-10">Our Story</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-[510px]">
            Launched in 2015, SnapShop is South Asia&apos;s premier online
            shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service
            solutions, SnapShop has 10,500 sellers and 300 brands and serves 3
            million customers across the region.
          </p>
          <p className="text-gray-700 font-medium max-w-[510px]">
            SnapShop has more than 1 Million products to offer, growing very
            fast. SnapShop offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        {/* Image */}
        <div className="w-[750px] md:w-[750px] flex justify-end -mr-36 mt-8 md:mt-0">
          <img
            src="/src/assets/story.png"
            alt="Our Story"
            className="w-full h-full object-cover rounded-l"
            style={{ maxHeight: "none" }} // Remove maxHeight constraint
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
