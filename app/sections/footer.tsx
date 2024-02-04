import Image from "next/image";
import logo from "../../public/logo.png";
import instagram from "../../public/instagram.svg";
import tiktok from "../../public/tiktok.svg";
import email from "../../public/email.svg";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer 
    initial={{ opacity: 0, y: 70 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: "tween" }}
    className="cust-container flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-10">
      <div className="flex flex-col gap-2 items-center md:items-start justify-start">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" width={40} height={40} />
          <p className="text-lg sm:text-2xl font-bold text-custPrimary">
            IRIS FUTURE FORGE
          </p>
        </div>
        <p className="text-custDark/50 font-semibold text-sm md:text-base">Beyond Powerful With IRIS</p>
        <div className="flex gap-5">
          <Image src={instagram} alt="instagram" width={30} height={30} className="cursor-pointer opacity-60 hover:opacity-80 " />
          <Image src={tiktok} alt="tiktok" width={30} height={30} className="cursor-pointer opacity-60 hover:opacity-80 " />
          <Image src={email} alt="email" width={30} height={30} className="cursor-pointer opacity-60 hover:opacity-80 " />
        </div>
      </div>
      <div className="flex flex-col text-sm md:text-base items-center md:items-start">
        <p className="text-custDark/50 font-semibold">Contact</p>
        <p className="text-custDark/50 text-center">Jl. Raya Bogor KM 26, Ciracas, Jakarta Timur</p>
        <p className="text-custDark/50">+62 812-3456-7890</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
