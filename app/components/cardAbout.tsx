import { motion } from "framer-motion";

interface CardAboutProps {
  title: string;
  desc: string;
  count: number;
}

const CardAbout = ({ title, desc, count }: CardAboutProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: count*0.2, type: "tween" }}
      className="rounded-lg text-sm w-full hover:bg-teal-50"
    >
      <div className="p-5">
        <h2 className="text-lg font-bold text-custPrimary">{title}</h2>
        <p className="text-custDark/70">{desc}</p>
      </div>
    </motion.div>
  );
};

export default CardAbout;
