import { About } from "@/components/About";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";

const Page = () => {
  
  return (
    <main className="main-wrapper">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
    </main>
  );
};

export default Page;