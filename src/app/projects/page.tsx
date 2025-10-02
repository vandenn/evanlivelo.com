import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProjectFiles, getPublicationFiles } from '@/lib/markdown';

export default function Projects() {
  const projects = getProjectFiles();
  const publications = getPublicationFiles();

  return (
    <>
      <h1 className="leading-tight">
        Projects
      </h1>

      <div className="space-y-8">
        <section>
          <h2 id="side-projects" className="mt-8 mb-4">Side Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-8 flex flex-col md:flex-row gap-6">
              {project.frontmatter.image && (
                <div className="flex-shrink-0">
                  <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden">
                    <Image
                      src={project.frontmatter.image}
                      alt={project.frontmatter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <div className="mb-2">
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
                  {project.frontmatter.tech && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.frontmatter.tech.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gray-200 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="prose max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 id="publications" className="mt-8 mb-4">Publications</h2>
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
                  {pub.frontmatter.coauthors && `with ${pub.frontmatter.coauthors} • `}
                  {pub.frontmatter.publisher}
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