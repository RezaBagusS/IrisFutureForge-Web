import { motion } from "framer-motion";

interface TagSectionProps {
    text: string;
}

const TagSection = ({ text }: TagSectionProps) => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "tween" }}
        className="flex flex-row items-center gap-3">
          <span className="w-10 h-0.5 p-0.5 bg-custPrimary rounded-md"></span>
          <p className="text-custPrimary font-bold text-base">
            {text}
          </p>
        </motion.div>
    )
}

export default TagSection;