import { CardTesti } from "../components/cardTesti";
import TagSection from "../components/tagSection";
import { motion } from "framer-motion";

const dataTesti = [
  {
    from: "Tio Brando",
    desc: "I'm here to follow my dreams and inspire others. Very recommended!",
  },
  {
    from: "Dea Rizkyana",
    desc: "Here is the place to make your dreams come true. I'm so happy to be here!",
  },
  {
    from: "Rizki Fauzi",
    desc: "So happy to be here. Let's make our dreams come true together! Thank you IRIS!",
  },
];

function Testimonial() {
  return (
    <div className="cust-container py-10 md:py-20 bg-white">
      <TagSection text={"Be The Next IRIS"} />
      <motion.h2
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="text-lg sm:text-xl md:text-5xl text-custDark font-bold"
      >
        Success History with IRIS FUTURE FORGE
      </motion.h2>
      <div className="w-full flex justify-center items-center flex-col md:flex-row gap-5">
        {dataTesti.map((item, index) => {
          return <CardTesti key={index} from={item.from} desc={item.desc} />;
        })}
      </div>
    </div>
  );
}

export default Testimonial;
