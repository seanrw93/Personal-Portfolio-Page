import { About } from "@/components/sections/about/About";
import { Intro } from "@/components/sections/intro/Intro";
import { Projects } from "@/components/sections/projects/Projects";
import { Skills } from "@/components/sections/skills/Skills";
import { Experiences } from "@/components/sections/experiences/Experiences";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Contact } from "@/components/sections/contact/Contact";

const Page = () => {
  
  return (
    <main className="main-wrapper">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experiences />
      <SectionDivider />
      <Contact />
    </main>
  );
};

export default Page;