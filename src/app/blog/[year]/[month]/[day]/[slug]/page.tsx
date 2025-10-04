import readingDuration from 'reading-duration';
import { getBlogPost, getBlogFiles } from '@/lib/markdown';
import Title from '@/components/Title';
import LinkButton from '@/components/LinkButton';
import BlogContent from '@/components/BlogContent';
import { MailIcon } from '@/components/icons';
import SocialIconButton from '@/components/SocialIconButton';
import { GitHubIcon, LinkedInIcon, SocialsMailIcon } from '@/components/icons';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { sharedMetadata } from '@/app/layout';

export async function generateStaticParams() {
  const posts = getBlogFiles();

  return posts.map((post) => ({
    year: post.frontmatter.year,
    month: post.frontmatter.month,
    day: post.frontmatter.day,
    slug: post.frontmatter.slug,
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ year: string; month: string; day: string; slug: string }>
}): Promise<Metadata> {
  const { year, month, day, slug } = await params;
  const post = getBlogPost(year, month, day, slug);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  const { title, description, date, tags } = post.frontmatter;
  const ogImage = post.frontmatter['og-img'];
  const url = `https://evanlivelo.com/blog/${year}/${month}/${day}/${slug}`;
  const absoluteImageUrl = ogImage?.startsWith('http') ? ogImage : `https://evanlivelo.com${ogImage}`;

  // Combine default keywords with post-specific tags
  const postTags = Array.isArray(tags) ? tags : [];
  const allKeywords = [...sharedMetadata.keywords, ...postTags];

  return {
    title,
    description: description || title,
    keywords: allKeywords,
    openGraph: {
      title,
      description: description || title,
      type: "article",
      publishedTime: date,
      url,
      ...(ogImage && { images: [{ url: absoluteImageUrl }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || title,
      ...(ogImage && { images: [absoluteImageUrl] }),
    },
  };
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

  return (
    <>
      <article>
        <header className="mb-8">
          <Title className="mb-4">{post.frontmatter.title}</Title>
          <div className="flex flex-wrap items-center gap-2">
            {post.frontmatter.date && (
              <>
                <span className="whitespace-nowrap">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span>/</span>
              </>
            )}
            {post.frontmatter.author && (
              <>
                <span className="whitespace-nowrap">{post.frontmatter.author}</span>
                <span>/</span>
              </>
            )}
            <span className="whitespace-nowrap">{readingDuration(post.content, { wordsPerMinute: 200, emoji: false })}</span>
            <span>/</span>
            <span className="flex items-center gap-2 whitespace-nowrap">
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

        <BlogContent content={post.content} />

        <div className="flex justify-center my-8">
          <LinkButton href="mailto:evan.livelo@gmail.com" icon={<MailIcon />}>
            Get in touch
          </LinkButton>
        </div>
      </article>
    </>
  );
}
