interface CardAboutProps {
    title: string;
    desc: string
}

const CardAbout = ({ title, desc }: CardAboutProps) => {

  return (
    <div className="rounded-lg text-sm w-full hover:bg-teal-50 transition-all duration-300">
        <div className="p-5">
            <h2 className="text-lg font-bold text-custPrimary">{title}</h2>
            <p className="text-custDark/70">{desc}</p>
        </div>
    </div>
  );
};

export default CardAbout;
