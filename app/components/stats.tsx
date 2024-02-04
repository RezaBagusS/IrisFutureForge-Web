const dataStats = [
  {
    title: "Participants",
    value: 200,
  },
  {
    title: "Programs",
    value: 10,
  },
];

const Stats = () => {
  return (
    <div className="w-7/12 mt-5 font-semibold text-custDark flex gap-10 justify-start items-center">
      {dataStats.map((data, index) => {
        const { title, value } = data;

        return (
          <div key={index} className="flex flex-col gap-2">
            <p className="font-bold text-2xl sm:text-3xl">{value}+</p>
            <p className="text-custDark/70 text-sm md:text-base">{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
