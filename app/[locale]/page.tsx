import { About } from "@/components/About";
import { Intro } from "@/components/Intro";
import { SectionDivider } from "@/components/SectionDivider";

const Page = () => {
  
  return (
    <main className="main-wrapper">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      {/* Other sections can be added here */}  
    </main>
  );
};

export default Page;