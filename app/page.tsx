import Hero from "@/components/ Hero";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative  bg-black-100  flex justify-center flex-col  ">
      <Hero />
      <TechStack />
    </main>
  );
}
