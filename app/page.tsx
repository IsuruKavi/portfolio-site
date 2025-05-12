import Hero from "@/components/ Hero";
import Footer from "@/components/Footer";
import MyProject from "@/components/MyProject";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Experience from "@/components/WorkExperince";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative  bg-black-100  flex justify-center flex-col  ">
      <div className="bg-yellow-200">
        <FloatingNav navItems={navItems} />
      </div>
      <Hero />
      <TechStack />
      <MyProject />
      <Experience />
      <Footer />
    </main>
  );
}
