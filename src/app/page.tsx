import Me from "@/components/me";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-[100%] flex flex-col gap-[7rem]">
      <Me />
      <Experience />
      <Projects />
    </div>
  );
}
