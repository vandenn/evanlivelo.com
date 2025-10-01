import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getMarkdownContent, getExperienceFiles, getEducationFiles } from '@/lib/markdown';

export default function About() {
  const aboutContent = getMarkdownContent('content/about/index.md');
  const experiences = getExperienceFiles();
  const education = getEducationFiles();

  const markdownComponents = {
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 my-4">{children}</ol>,
    li: ({ children }: any) => <li>{children}</li>,
    p: ({ children }: any) => <p className="my-2">{children}</p>,
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
  };

  return (
    <>
      <h1 className="text-3xl mb-6">
        About Me
      </h1>

      <div className="space-y-8">
        <section>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {aboutContent.content}
          </ReactMarkdown>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{exp.frontmatter.title}</h3>
                <div className="text-sm text-gray-400">
                  {exp.frontmatter.company} • {exp.frontmatter.range}
                </div>
              </div>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {exp.content}
              </ReactMarkdown>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{edu.frontmatter.degree}</h3>
                <div className="text-sm text-gray-400">
                  {edu.frontmatter.institution} • {edu.frontmatter.range}
                </div>
              </div>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {edu.content}
              </ReactMarkdown>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}