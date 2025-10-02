import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPost, getBlogFiles } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getBlogFiles();

  return posts.map((post) => ({
    year: post.frontmatter.year,
    month: post.frontmatter.month,
    day: post.frontmatter.day,
    slug: post.frontmatter.slug,
  }));
}

export default async function BlogPost({
  params
}: {
  params: Promise<{ year: string; month: string; day: string; slug: string }>
}) {
  const { year, month, day, slug } = await params;
  const post = getBlogPost(year, month, day, slug);

  if (!post) {
    notFound();
  }

  const markdownComponents = {
    img: ({ src, alt }: any) => (
      <span className="flex justify-center my-4">
        <img src={src} alt={alt || ''} className="max-w-full h-auto" />
      </span>
    ),
  };

  return (
    <>
      <article>
        <header className="mb-8">
          <h1 className="mb-4">{post.frontmatter.title}</h1>
          {post.frontmatter.date && (
            <div className="text-sm text-gray-400">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </header>

        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}
