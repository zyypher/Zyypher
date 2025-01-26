import FAQSection from "./components/home/FAQSection";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Introduction from "./components/home/Introduction";
import Metrics from "./components/home/Metrics";
import WhatYouGet from "./components/home/WhatWeGet";
import SEO from "./components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Zyypher - Innovative Technology Solutions"
        description="Zyypher empowers businesses with cutting-edge technology solutions."
        url="https://www.zyypher.com/"
        image="https://www.zyypher.com/images/home-og-image.png"
      />
      <Hero />
      <Introduction />
      <WhatYouGet />
      <HowItWorks />
      <Metrics />
      <FAQSection />
    </>
  );
}
