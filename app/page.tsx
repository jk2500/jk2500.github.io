import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 2);

export default function HomePage() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="pill">The Library</div>
        <h1>Ship-ready shelves for projects, essays, and experiments.</h1>
        <p className="lead">
          A focused home for everything I am building. Browse the index, dive into
          project writeups, or follow ongoing work-in-progress.
        </p>
        <div className="actions">
          <Link href="/projects" className="button primary">
            View projects
          </Link>
          <Link href="#about" className="button ghost">
            Learn more
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="muted">Featured entries</p>
            <h2>Start with these.</h2>
          </div>
          <Link className="button ghost" href="/projects">
            All projects
          </Link>
        </div>
        <div className="grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-head">
          <p className="muted">About the Library</p>
          <h2>Built to scale with the work.</h2>
        </div>
        <div className="about-grid">
          <div className="about-block">
            <h3>Long-form project pages</h3>
            <p className="muted">
              Each project has space for a narrative, implementation details, and links
              out to repos or live demos.
            </p>
          </div>
          <div className="about-block">
            <h3>Indexable by default</h3>
            <p className="muted">
              Projects live under `/projects/slug`, making it easy to share, link, and
              grow into a full blog as new work lands.
            </p>
          </div>
          <div className="about-block">
            <h3>Framework-first</h3>
            <p className="muted">
              Next.js powers routing, metadata, and future integrations (MDX, CMSs,
              analytics) without rewriting the structure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
