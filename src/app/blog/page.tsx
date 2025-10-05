import readingDuration from 'reading-duration';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Title from '@/components/Title';
import { getBlogFiles, getMarkdownContent } from '@/lib/markdown';
import type { Metadata } from 'next';
import { sharedMetadata } from '../layout';

export const metadata: Metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog | Evan Livelo",
    url: `${sharedMetadata.siteUrl}/blog`,
    description: sharedMetadata.description,
    siteName: sharedMetadata.siteName,
    type: sharedMetadata.type,
    locale: sharedMetadata.locale,
    images: sharedMetadata.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Evan Livelo",
    description: sharedMetadata.description,
    images: [sharedMetadata.images[0].url],
  },
};

export default function Blog() {
  const blogIntro = getMarkdownContent('content/blog/index.md');
  const posts = getBlogFiles();

  return (
    <>
      <Title>
        Blog
      </Title>
      <div className="mt-4 prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blogIntro.content}
        </ReactMarkdown>
      </div>

      <div className="space-y-8 mt-8">
        {posts.map((post, index) => (
          <article key={index} className="mb-8">
            <Link
              href={`/blog/${post.frontmatter.year}/${post.frontmatter.month}/${post.frontmatter.day}/${post.frontmatter.slug}`}
              className="block"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {post.frontmatter['og-img'] && (
                  <div className="flex-shrink-0">
                    <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden">
                      <Image
                        src={post.frontmatter['og-img']}
                        alt={post.frontmatter.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                        quality={90}
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <h1 style={{ color: "var(--accent)" }}>
                    {post.frontmatter.title}
                  </h1>
                  <div className="flex items-center gap-2 mb-2" style={{ color: "var(--subtext)" }}>
                    {post.frontmatter.date && (
                      <>
                        <span>
                          {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span>/</span>
                      </>
                    )}
                    <span>{readingDuration(post.content, { wordsPerMinute: 200, emoji: false })}</span>
                  </div>
                  {post.frontmatter.description && (
                    <p>{post.frontmatter.description}</p>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
