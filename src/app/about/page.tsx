import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LinkButton from '@/components/LinkButton';
import Title from '@/components/Title';
import { MailIcon, DocumentIcon } from '@/components/icons';
import { getMarkdownContent } from '@/lib/markdown';
import type { Metadata } from 'next';
import { sharedMetadata } from '../layout';

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    title: "About | Evan Livelo",
    url: `${sharedMetadata.siteUrl}/about`,
    description: sharedMetadata.description,
    siteName: sharedMetadata.siteName,
    type: sharedMetadata.type,
    locale: sharedMetadata.locale,
    images: sharedMetadata.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Evan Livelo",
    description: sharedMetadata.description,
    images: [sharedMetadata.images[0].url],
  },
};

export default function About() {
  const aboutIntro = getMarkdownContent('content/about/index.md');
  const meContent = getMarkdownContent('content/about/me.md');
  const websiteContent = getMarkdownContent('content/about/website.md');
  const stuffContent = getMarkdownContent('content/about/stuff.md');

  return (
    <>
      <Title>
        About
      </Title>
      <div className="mt-4 prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {aboutIntro.content}
        </ReactMarkdown>
      </div>

      <div className="space-y-8 mt-8">
        <section>
          <h1 id="me" className="mb-4">About Me</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {meContent.content}
                </ReactMarkdown>
              </div>
            </div>
            {meContent.frontmatter.image && (
              <div className="flex-shrink-0">
                <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                  <Image
                    src={meContent.frontmatter.image}
                    alt="About Me"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        <section>
          <h1 id="stuff" className="mt-8 mb-4">Stuff I've Done</h1>
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {stuffContent.content}
            </ReactMarkdown>
          </div>
        </section>

        <section>
          <h1 id="website" className="mt-8 mb-4">About this Website</h1>
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {websiteContent.content}
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