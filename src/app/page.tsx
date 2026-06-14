import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { AuditCTA } from "@/components/AuditCTA";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Results />
        <Services />
        <AuditCTA />
        <CaseStudies />
        <Process />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
