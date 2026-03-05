import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-[120px] bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111111] mb-16 flex items-center gap-4">
            Projects
            <span className="flex-1 h-px bg-[#E5E5E5]" />
          </h2>
        </ScrollReveal>

        {/* Responsive grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
