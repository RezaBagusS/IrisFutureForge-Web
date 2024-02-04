import CardAbout from "../components/cardAbout";
import TagSection from "../components/tagSection";
import { motion } from "framer-motion";

// const dataMisi = [
//     "Memberikan akses pendidikan berkualitas tinggi melalui platform online, AsahOtak, untuk membantu siswa meraih kesuksesan dalam ujian UTBK-SNBT.",
//     "Menginspirasi dan memberdayakan siswa melalui IRIS Scholarship, memberikan peluang beasiswa bagi mereka yang berpotensi.",
//     "Mendorong diskusi positif dan pemahaman mendalam tentang kehidupan perkuliahan melalui proyek College Life.",
//     "Menyebarkan kebahagiaan melalui Bright Smile Project, dengan berkontribusi pada yayasan anak dan proyek amal lainnya.",
//     "Menyuarakan empati dan kepedulian melalui proyek It's Friday, dengan membagikan makanan kepada mereka yang membutuhkan."
// ]

const data = [
  {
    title: "Innovation",
    desc: "Adopting a creative approach and innovative solutions to respond to evolving educational needs.",
  },
  {
    title: "Openness",
    desc: "Creating an inclusive environment, embracing various perspectives, and promoting diversity.",
  },
  {
    title: "Integrity",
    desc: "Committing to honesty, ethics, and transparency in every aspect of business and interaction.",
  },
  {
    title: "Compassion",
    desc: "Understanding and empathizing with societal needs and contributing to well-being through social projects.",
  },
  {
    title: "Quality Education",
    desc: "Reaffirming the commitment to providing the best educational services and profound understanding.",
  },
];

function About() {
  return (
    <div className="cust-container pt-20 pb-0 flex flex-col lg:flex-row gap-8 items-center bg-white">
      <div className="lg:w-5/12 h-full flex flex-col justify-center gap-3">
        <TagSection text={"ABOUT IRIS"} />
        <motion.h1 
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="text-custDark text-3xl md:text-5xl font-bold">
          IRIS FUTURE FORGE
        </motion.h1>
        <motion.p
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "tween" }}
        className="text-opacity-70 text-custDark text-sm md:text-base">
          IRIS Future Forge, an innovative education company, differentiates
          itself with its online tutoring platform, AsahOtak, which focuses on
          UTBK-SNBT exam preparation. Through social projects such as the IRIS
          Scholarship and others, this company plays an active role in creating
          a positive impact on education and society.
        </motion.p>
      </div>
      <div className="lg:w-7/12 bg-slate-800 h-full flex flex-wrap justify-center">
        {data.map((item, index) => {
          return <CardAbout title={item.title} desc={item.desc} count={index} key={index} ></CardAbout>;
        })}
      </div>
    </div>
  );
}

export default About;
