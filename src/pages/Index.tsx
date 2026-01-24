import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import WhatWeDo from "@/components/sections/WhatWeDo";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyBrightPixel from "@/components/sections/WhyBrightPixel";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeWorkWith />
      <WhatWeDo />
      <HowWeWork />
      <WhyBrightPixel />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
