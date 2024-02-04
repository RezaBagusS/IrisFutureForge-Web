import Link from "next/link";

interface CustButtonProps {
  text?: string;
  path?: string;
  type?: "onlyText" | "fill";
}

const CustButton = ({ text, path="/", type="fill" }: CustButtonProps) => {

  return (
    <Link href={path} className={type === "onlyText" ? `text-custPrimary font-semibold text-sm md:text-base h-fit px-5 py-2 transition-all duration-200` : `bg-custPrimary hover:bg-custPrimary/80 whitespace-nowrap h-fit px-5 py-2 rounded-md text-white font-semibold text-sm md:text-base transition-all duration-200`}>{text}</Link>
  );
}

export default CustButton;
