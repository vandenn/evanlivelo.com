import readingDuration from 'reading-duration';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogFiles } from '@/lib/markdown';
import type { Metadata } from 'next';
import { sharedMetadata } from '../layout';

export const metadata: Metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog | Evan Livelo",
    description: sharedMetadata.description,
    url: `${sharedMetadata.siteUrl}/blog`,
    siteName: sharedMetadata.siteName,
    locale: sharedMetadata.locale,
    type: sharedMetadata.type,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Evan Livelo",
    description: sharedMetadata.description,
  },
};

export default function Blog() {
  const posts = getBlogFiles();

  return (
    <>
      <h1>
        Blog
      </h1>

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
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <h3 style={{ color: "var(--accent)" }}>
                    {post.frontmatter.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2 text-sm" style={{ color: "var(--subtext)" }}>
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
