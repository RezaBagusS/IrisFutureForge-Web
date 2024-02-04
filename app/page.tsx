'use client'

import { Card } from "@material-tailwind/react";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Hero from "./sections/hero";
import Info from "./sections/info";
import CardPromotion from "./components/cardPromotion";
import Testimonial from "./sections/testimonial";
import Footer from "./sections/footer";
import FlyingWhatsapp from "./components/flyingWhatsapp";

export default function Home() {
  return (
    <div className="relative cust-outer-container">
      <FlyingWhatsapp />
      <Navbar />
      <Hero />
      <About />
      <Info />
      <CardPromotion text="Join Now" desc="Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others." />
      <Testimonial />
      <Footer />
    </div>
  );
}
