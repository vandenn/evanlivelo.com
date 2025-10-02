import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LinkButton from '@/components/LinkButton';
import { MailIcon, DocumentIcon } from '@/components/icons';
import { getMarkdownContent } from '@/lib/markdown';
import type { Metadata } from 'next';
import { sharedMetadata } from '../layout';

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    title: "About | Evan Livelo",
    description: sharedMetadata.description,
    url: `${sharedMetadata.siteUrl}/about`,
    siteName: sharedMetadata.siteName,
    locale: sharedMetadata.locale,
    type: sharedMetadata.type,
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Evan Livelo",
    description: sharedMetadata.description,
  },
};

export default function About() {
  const meContent = getMarkdownContent('content/about/me.md');
  const websiteContent = getMarkdownContent('content/about/website.md');
  const stuffContent = getMarkdownContent('content/about/stuff.md');

  return (
    <>
      <h1>
        About
      </h1>

      <div className="space-y-8 mt-8">
        <section>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 id="me" className="mb-4">About Me</h2>
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {meContent.content}
                </ReactMarkdown>
              </div>
            </div>
            {meContent.frontmatter.image && (
              <div className="flex-shrink-0">
                <div className="relative w-full md:w-64 h-64 rounded-lg overflow-hidden">
                  <Image
                    src={meContent.frontmatter.image}
                    alt="About Me"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                    quality={90}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 id="website" className="mt-8 mb-4">About this Website</h2>
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {websiteContent.content}
            </ReactMarkdown>
          </div>
        </section>

        <section>
          <h2 id="stuff" className="mt-8 mb-4">Stuff I've Done</h2>
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {stuffContent.content}
            </ReactMarkdown>
          </div>
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