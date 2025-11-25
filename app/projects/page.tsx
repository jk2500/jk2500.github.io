import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="stack">
      <section className="section">
        <div className="section-head">
          <div>
            <p className="muted">Projects</p>
            <h1>The full shelf.</h1>
            <p className="lead">
              Every project gets a dedicated page, so you can expand each writeup as it
              grows.
            </p>
          </div>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
