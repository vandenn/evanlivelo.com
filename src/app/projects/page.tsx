import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProjectFiles, getPublicationFiles, getMarkdownContent } from '@/lib/markdown';
import type { Metadata } from 'next';
import { sharedMetadata } from '../layout';

export const metadata: Metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects | Evan Livelo",
    description: sharedMetadata.description,
    url: `${sharedMetadata.siteUrl}/projects`,
    siteName: sharedMetadata.siteName,
    locale: sharedMetadata.locale,
    type: sharedMetadata.type,
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Evan Livelo",
    description: sharedMetadata.description,
  },
};

export default function Projects() {
  const projects = getProjectFiles();
  const publications = getPublicationFiles();
  const projectsIntro = getMarkdownContent("content/projects/index.md");
  const publicationsIntro = getMarkdownContent("content/projects/publications/index.md");
  const sideProjectsIntro = getMarkdownContent("content/projects/projects/index.md");

  return (
    <>
      <h1>
        Projects
      </h1>
      <div className="mt-4 prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {projectsIntro.content}
        </ReactMarkdown>
      </div>

      <div className="space-y-8">
        <section>
          <h2 id="side-projects" className="mt-8 mb-4">Side Projects</h2>
          <div className="mb-4 prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {sideProjectsIntro.content}
            </ReactMarkdown>
          </div>
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <h3>
                {project.frontmatter.link ? (
                  <a
                    href={project.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.frontmatter.title}
                  </a>
                ) : (
                  project.frontmatter.title
                )}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2 items-center">
                {project.frontmatter.date && (
                  <>
                    <span className="text-sm" style={{ color: "var(--subtext)" }}>
                      {project.frontmatter.date.split('-')[0]}
                    </span>
                    {project.frontmatter.tech && (
                      <span className="text-sm" style={{ color: "var(--subtext)" }}>/</span>
                    )}
                  </>
                )}
                {project.frontmatter.tech && project.frontmatter.tech.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-white rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="prose max-w-none mt-2">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 id="publications" className="mt-8 mb-4">Publications</h2>
          <div className="mb-4 prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {publicationsIntro.content}
            </ReactMarkdown>
          </div>
          {publications.map((pub, index) => (
            <div key={index} className="mb-6">
              <div className="mb-2">
                <h3>
                  {pub.frontmatter.link ? (
                    <a
                      href={pub.frontmatter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.frontmatter.title}
                    </a>
                  ) : (
                    pub.frontmatter.title
                  )}
                </h3>
                <div className="text-sm" style={{ color: "var(--subtext)" }}>
                  {pub.frontmatter.coauthors && `with ${pub.frontmatter.coauthors} / `}
                  {pub.frontmatter.publisher}
                  {pub.frontmatter.date && ` / ${pub.frontmatter.date.split('-')[0]}`}
                </div>
              </div>
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {pub.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}