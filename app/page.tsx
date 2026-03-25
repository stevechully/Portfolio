import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-zinc-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <ProjectsSection />
      </div>
    </main>
  );
}