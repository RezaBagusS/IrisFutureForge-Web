import { CardInfo } from "../components/cardInfo";
import CustButton from "../components/custButton";
import TagSection from "../components/tagSection";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const dataInfo = [
  {
    title: "Registration IRIS Scholarship",
    status: true,
    desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  },
  {
    title: "Opren Recruitment Staff IRIS Future Forge #Batch 2",
    status: true,
    desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  },
  {
    title: "Open Recruitment Tutor Bimbingan Belajar AsahOtak #Batch 2",
    status: false,
    desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  },
  {
    title: "Registration Bimbel Online UTBK-SNBT 2024 AsahOtak #Batch 2",
    status: false,
    desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  },
];

function Info() {
  const [selectedData, setSelectedData] = useState(dataInfo);

  useEffect(() => {
    const shuffledData = [...dataInfo].sort(() => Math.random() - 0.5);
    setSelectedData(shuffledData.slice(0, 3));
  }, []);

  return (
    <div className="cust-container py-10 md:py-20 bg-white">
      <TagSection text={"INFO IRIS"} />
      <motion.p
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="text-custDark font-semibold text-base md:text-xl"
      >
        Information about activity on IRIS and the programs we offer to you.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-5 pb-10">
        {selectedData.map((item, index) => {
          return (
            <CardInfo
              title={item.title}
              status={item.status}
              desc={item.desc}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <CustButton text="See More" />
      </div>
    </div>
  );
}

export default Info;
