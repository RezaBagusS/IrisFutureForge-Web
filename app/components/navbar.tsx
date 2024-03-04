import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.webp";
import { motion } from "framer-motion";
import { useEffect } from "react";

const listMenu = ["Home", "About", "Info"];

interface SpecialButtonProps {
  toogleBackground: boolean;
}

const SpecialButton = ({ toogleBackground }: SpecialButtonProps) => {
  return (
    <button className={`cursor-pointer text-sm px-5 py-2 rounded-md font-semibold transition-all duration-150
    ${toogleBackground ? "bg-custPrimary text-white hover:bg-opacity-60" : "bg-custSecondary text-custPrimary hover:bg-opacity-80"}
    `}>
      Program
    </button>
  );
};

function Navbar() {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const toggleBackground = () => {
      if (window.scrollY > 40) {
        setBackground(true);
        console.log("scroll Down");
      } else {
        console.log("scroll Up");
        setBackground(false);
      }
    };
    window.addEventListener("scroll", toggleBackground);
    return () => {
      window.removeEventListener("scroll", toggleBackground);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      className={`fixed w-full top-0 py-5 text-custLight z-50 transition-all duration-500
        ${ background ? "bg-white text-black/70 shadow-md" : "bg-transparent"}
      `}
    >
      <div className="cust-container flex justify-between">
        <div className="flex gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
        </div>
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-10 font-medium">
          {listMenu.map((item, index) => {
            return (
              <li
                key={index}
                className={`cursor-pointer hidden lg:flex font-semibold text-sm
                ${background ? "hover:text-black/90" : "hover:text-white"}
                `}
              >
                {item}
              </li>
            );
          })}
          <li>
            <SpecialButton toogleBackground={background}  />
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
