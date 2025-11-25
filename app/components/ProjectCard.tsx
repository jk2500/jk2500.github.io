import Link from "next/link";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  href?: string;
};

export default function ProjectCard({ project, href }: ProjectCardProps) {
  return (
    <Link className="project-card" href={href ?? `/projects/${project.slug}`}>
      <div className="card-top">
        <span className="pill">{project.date}</span>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p className="muted">{project.summary}</p>
      <div className="card-cta">Read project →</div>
    </Link>
  );
}
