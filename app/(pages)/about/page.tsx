import MissionAndValues from "@/app/components/about/MissionAndValues";
import OurCulture from "@/app/components/about/OurCulture";
import OurStory from "@/app/components/about/OurStory";
import TeamMembers from "@/app/components/about/TeamMembers";
import TestimonialsSection from "@/app/components/about/TestimonialsSection";

const About = () => {
  return <div>
    <OurStory />
    <MissionAndValues />
    <TeamMembers />
    <OurCulture />
    <TestimonialsSection />
  </div>;
};

export default About;
