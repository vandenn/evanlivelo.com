import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LinkButton from '@/components/LinkButton';
import { MailIcon, DocumentIcon } from '@/components/icons';
import { getMarkdownContent } from '@/lib/markdown';

export default function About() {
  const meContent = getMarkdownContent('content/about/me/index.md');
  const websiteContent = getMarkdownContent('content/about/website/index.md');
  const stuffContent = getMarkdownContent('content/about/stuff/index.md');

  const markdownComponents = {
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1 my-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1 my-4">{children}</ol>,
    li: ({ children }: any) => <li>{children}</li>,
    p: ({ children }: any) => <p className="my-2">{children}</p>,
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
  };

  return (
    <>
      <h1 className="text-5xl leading-tight">
        About
      </h1>

      <div className="space-y-8">
        <section>
          <h2 id="me" className="text-2xl mt-8 mb-4">About Me</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {meContent.content}
          </ReactMarkdown>
        </section>

        <section>
          <h2 id="website" className="text-2xl mt-8 mb-4">About this Website</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {websiteContent.content}
          </ReactMarkdown>
        </section>

        <section>
          <h2 id="stuff" className="text-2xl mt-8 mb-4">Stuff I've Done</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {stuffContent.content}
          </ReactMarkdown>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center my-8">
          <LinkButton href="mailto:evan.livelo@gmail.com" icon={<MailIcon />}>
            Get in touch
          </LinkButton>
          <LinkButton
            href="https://drive.google.com/file/d/1lVXxnXQq8VAEACIecbdmW-O1AFSAf2e0/view?usp=sharing"
            icon={<DocumentIcon />}
            external
          >
            Download my CV
          </LinkButton>
        </div>

      </div>
    </>
  );
}