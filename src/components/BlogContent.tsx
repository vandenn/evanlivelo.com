import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const blogMarkdownComponents = {
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'text';

      return !inline && match ? (
        <SyntaxHighlighter
          style={vs}
          language={language}
          PreTag="div"
          customStyle={{
            fontSize: "1.125rem",
            margin: 0,
          }}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code
          className={className}
          style={{
            fontWeight: "normal",
            backgroundColor: "#ffffff",
            padding: "0.25em 0.5em",
          }}
          {...props}
        >
          {children}
        </code>
      );
    },
    img: ({ src, alt }: any) => (
      <span className="flex justify-center my-4">
        <img src={src} alt={alt || ''} className="max-w-full h-auto" />
      </span>
    ),
  };

  return (
    <div className="prose max-w-none prose-pre:bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 prose-code:before:content-none prose-code:after:content-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={blogMarkdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
