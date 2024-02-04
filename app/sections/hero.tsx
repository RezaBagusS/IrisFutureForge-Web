import CustBotton from "../components/custButton";
import Stats from "../components/stats";
import { motion } from "framer-motion";
import TagSection from "../components/tagSection";

function Hero() {
  return (
    <main className="flex bg-white items-center justify-between">
      <div className="cust-container pt-20 flex flex-col gap-3 justify-center bg-white h-screen">
        <TagSection text={"IRIS FUTURE FORGE"} />
        <motion.h1
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="md:w-7/12 font-bold text-custDark text-3xl md:text-4xl lg:text-6xl"
        >
          Beyond Powerful
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "tween" }}
          className="w-7/12 font-bold text-custDark text-3xl md:text-4xl lg:text-6xl"
        >
          With <span className="text-custPrimary">IRIS</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, type: "tween" }}
          className="flex gap-5 mt-3"
        >
          <CustBotton text="Join with Us" />
          <CustBotton text="Learn More" type="onlyText" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, type: "tween" }}
        >
          <Stats />
        </motion.div>
      </div>
      <div className="w-5/12 hidden sm:flex absolute right-0 h-screen">
        <video
          suppressHydrationWarning={true}
          autoPlay
          muted
          loop
          className="flex brightness-75 inset-0 h-full object-cover object-right"
        >
          <source
            src={
              "/videoBackground.mp4"
            }
            type="video/mp4"
          />
          Video tidak didukung oleh peramban Anda.
        </video>
      </div>
    </main>
  );
}

export default Hero;
