import Link from 'next/link';
import { getBlogFiles } from '@/lib/markdown';

export default function Blog() {
  const posts = getBlogFiles();

  return (
    <>
      <h1>
        Blog
      </h1>

      <div className="space-y-6 mt-8">
        {posts.map((post, index) => (
          <article key={index} className="mb-6">
            <Link
              href={`/blog/${post.frontmatter.year}/${post.frontmatter.month}/${post.frontmatter.day}/${post.frontmatter.slug}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <h2 className="mb-2 hover:underline">{post.frontmatter.title}</h2>
              {post.frontmatter.date && (
                <div className="text-sm text-gray-400 mb-2">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              )}
              {post.frontmatter.description && (
                <p className="text-gray-300">{post.frontmatter.description}</p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
