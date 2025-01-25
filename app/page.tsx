import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Introduction from "./components/Introduction";
import WhatYouGet from "./components/WhatWeGet";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhatYouGet />
      <HowItWorks />
    </>
  );
}
