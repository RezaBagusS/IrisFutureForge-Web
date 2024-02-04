"use client";

import Image from "next/image";
import whatsapp from "../../public/whatsapp.svg";

function FlyingWhatsapp() {
  const handleClick = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=+6285784753921&text=Halo+Saya+Ingin+Bertanya+terkait+Program+Iris&type=phone_number&app_absent=0`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-12 right-7 z-50">
      <div
        onClick={handleClick}
        className="cursor-pointer rounded-full bg-white bg-slate-200 p-2 drop-shadow-[0px_0px_1px_rgba(256,256,256,1)]"
      >
        <Image src={whatsapp} width={40} height={40} alt="Whatsapp" />
      </div>
    </div>
  );
}

export default FlyingWhatsapp;
