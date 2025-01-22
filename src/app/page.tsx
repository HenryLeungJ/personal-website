import Me from "@/components/me";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-[100%]">
      <Me />
      <Experience />
      <Projects />
    </div>
  );
}
