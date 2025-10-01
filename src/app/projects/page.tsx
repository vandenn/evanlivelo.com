import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProjectFiles, getPublicationFiles } from '@/lib/markdown';

export default function Projects() {
  const projects = getProjectFiles();
  const publications = getPublicationFiles();

  const markdownComponents = {
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1 my-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1 my-4">{children}</ol>,
    li: ({ children }: any) => <li>{children}</li>,
    p: ({ children }: any) => <p className="my-2">{children}</p>,
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
  };

  return (
    <>
      <h1 className="text-3xl mb-6">
        Projects
      </h1>

      <div className="space-y-8">
        <section>
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
                  <h3 className="text-xl">
                    {project.frontmatter.link ? (
                      <a
                        href={project.frontmatter.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
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
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {project.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl mt-8 mb-4">Publications</h2>
          {publications.map((pub, index) => (
            <div key={index} className="mb-6">
              <div className="mb-2">
                <h3 className="text-xl">
                  {pub.frontmatter.link ? (
                    <a
                      href={pub.frontmatter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.frontmatter.title}
                    </a>
                  ) : (
                    pub.frontmatter.title
                  )}
                </h3>
                <div className="text-sm text-gray-400">
                  {pub.frontmatter.coauthors && `with ${pub.frontmatter.coauthors} • `}
                  {pub.frontmatter.publisher}
                </div>
              </div>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {pub.content}
              </ReactMarkdown>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}