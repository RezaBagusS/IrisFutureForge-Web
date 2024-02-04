import CustButton from "./custButton";
import { motion } from "framer-motion";

interface CardPromotionProps {
    text: string;
    desc: string;
}

const CardPromotion = ({ text, desc }: CardPromotionProps) => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="cust-container md:my-5 rounded-2xl flex flex-col gap-3 md:flex-row justify-between items-center bg-custSecondary py-5   md:py-10 px-4 md:px-8">
            <p className="w-10/12 lg:w-1/2 text-custDark font-semibold text-center md:text-start text-sm sm:text-base md:text-xl">{desc}</p>
            <CustButton text={text} />
        </motion.div>
    )
}

export default CardPromotion;