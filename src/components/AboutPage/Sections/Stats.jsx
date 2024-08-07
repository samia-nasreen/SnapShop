const stats = [
  {
    icon: "shop_icon.svg",
    label: "10.5k",
    description: "Sellers active on our site",
  },
  { icon: "sale_icon.svg", label: "33k", description: "Monthly Product Sale" },
  {
    icon: "shoppingbag_icon.svg",
    label: "45.5k",
    description: "Customers active on our site",
  },
  {
    icon: "moneybag_icon.svg",
    label: "25k",
    description: "Annual gross sale on our site",
  },
];

const Stats = () => {
  return (
    <div className="category-section mt-20 mb-12 px-4 bg-white relative">
      <div className="flex justify-between">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group flex flex-col items-center w-72 h-64 p-8 pt-12 border-2 border-zinc-200 hover:border-white rounded-md transition-transform hover:bg-red-500 hover:text-white"
          >
            <div className="relative flex justify-center items-center mb-4">
              <div className="absolute w-[88px] h-[88px] bg-zinc-300 rounded-full transition group-hover:bg-red-200"></div>
              <div className="relative w-16 h-16 bg-black rounded-full flex justify-center items-center transition group-hover:bg-white">
                <img
                  src={`/src/assets/${stat.icon}`}
                  alt={stat.label}
                  className="w-10 h-10 svg-icon transition group-hover:filter-invert group-hover:brightness-0"
                />
              </div>
            </div>
            <span className="text-2xl font-semibold mt-6 mb-2">
              {stat.label}
            </span>
            <span className="text-sm text-center">{stat.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
