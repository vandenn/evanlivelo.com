import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LinkButton from "@/components/LinkButton";
import SocialIconButton from "@/components/SocialIconButton";
import { UserIcon, WrenchIcon, MailIcon, DocumentIcon, GitHubIcon, LinkedInIcon, SocialsMailIcon } from "@/components/icons";
import { getMarkdownContent } from '@/lib/markdown';

export default function Home() {
  const homeContent = getMarkdownContent('content/home/index.md');

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center mb-12 max-sm:gap-6">
        <div className="space-y-4">
          <h1 className="lg:text-7xl leading-tight">
            <span style={{ color: "var(--text)" }}>Hi! I'm </span>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1lVXxnXQq8VAEACIecbdmW-O1AFSAf2e0/view?usp=sharing"
              style={{ color: "var(--accent)" }}
            >
              Evan Livelo
            </Link>
            <span style={{ color: "var(--text)" }}>.</span>
          </h1>

          <div className="prose max-w-none text-base lg:text-lg leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {homeContent.content}
            </ReactMarkdown>
          </div>

          <div className="flex gap-4 items-center pt-2">
            <SocialIconButton
              href="mailto:evan.livelo@gmail.com"
              ariaLabel="Email"
              icon={<SocialsMailIcon />}
            />
            <SocialIconButton
              href="https://github.com/vandenn"
              ariaLabel="GitHub"
              icon={<GitHubIcon />}
            />
            <SocialIconButton
              href="https://linkedin.com/in/evanlivelo"
              ariaLabel="LinkedIn"
              icon={<LinkedInIcon />}
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end max-sm:order-first">
          <div className="relative w-40 h-40 lg:w-64 lg:h-64">
            <Image
              src="/images/home/me.png"
              alt="Evan Livelo"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <LinkButton href="/about" icon={<UserIcon />}>
            Learn more about me
          </LinkButton>

          <LinkButton href="/projects" icon={<WrenchIcon />}>
            See my projects
          </LinkButton>

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
