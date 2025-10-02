import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import readingDuration from 'reading-duration';
import { getBlogPost, getBlogFiles } from '@/lib/markdown';
import SocialIconButton from '@/components/SocialIconButton';
import { GitHubIcon, LinkedInIcon, SocialsMailIcon } from '@/components/icons';
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
          <div className="flex items-center gap-2 text-sm">
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
            <span>/</span>
            <span className="flex items-center gap-2">
              <SocialIconButton
                href="mailto:evan.livelo@gmail.com"
                ariaLabel="Email"
                icon={<SocialsMailIcon />}
                className="w-5 h-5 flex items-center"
              />
              <SocialIconButton
                href="https://github.com/vandenn"
                ariaLabel="GitHub"
                icon={<GitHubIcon />}
                className="w-5 h-5 flex items-center"
              />
              <SocialIconButton
                href="https://linkedin.com/in/evanlivelo"
                ariaLabel="LinkedIn"
                icon={<LinkedInIcon />}
                className="w-5 h-5 flex items-center"
              />
            </span>
          </div>
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
