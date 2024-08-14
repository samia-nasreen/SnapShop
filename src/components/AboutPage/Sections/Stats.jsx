import { stats } from "../../../data/stats";

const Stats = () => {
  return (
    <div className="category-section mt-20 mb-12 px-5 bg-white relative">
      <div className="flex flex-wrap justify-between gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group flex flex-col items-center w-full sm:w-72 h-64 p-8 pt-12 border-2 border-zinc-200 hover:border-white rounded-md transition-transform hover:bg-red-500 hover:text-white"
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
