import Hero from "@/components/ Hero";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Experience from "@/components/WorkExperince";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative  bg-black-100  flex justify-center flex-col  ">
      <FloatingNav navItems={navItems} />
      <Hero />
      <TechStack />
      <Experience />
      <Footer/>
    </main>
  );
}
