import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project not found | Library"
    };
  }

  return {
    title: `${project.title} | Library`,
    description: project.summary
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <article className="project-page">
      <Link className="button ghost" href="/projects">
        ← Back to projects
      </Link>
      <div className="pill project-date">{project.date}</div>
      <h1>{project.title}</h1>
      <p className="lead">{project.summary}</p>

      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {project.links && (
        <div className="link-grid">
          {project.links.map((link) => (
            <Link key={link.href} className="button primary" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
