import FAQSection from "./components/home/FAQSection";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Introduction from "./components/home/Introduction";
import Metrics from "./components/home/Metrics";
import WhatYouGet from "./components/home/WhatWeGet";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhatYouGet />
      <HowItWorks />
      <Metrics />
      <FAQSection />
    </>
  );
}
