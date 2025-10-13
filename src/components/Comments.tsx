"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";

interface CommentsProps {
  title: string;
}

export default function Comments({ title }: CommentsProps) {
  const commentsContainer = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = commentsContainer.current;
    if (!container) return;

    setIsLoading(true);
    let observer: MutationObserver | null = null;

    // Wait a bit before clearing to ensure previous utterances is done
    const timeoutId = setTimeout(() => {
      // Remove any existing utterances
      const existingUtterances = container.querySelector(".utterances");
      if (existingUtterances) {
        existingUtterances.remove();
      }

      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "vandenn/comments.evanlivelo.com");
      script.setAttribute("issue-term", "title");
      script.setAttribute("theme", "github-light");
      script.setAttribute("crossorigin", "anonymous");
      script.async = true;

      container.appendChild(script);

      // Watch for when utterances iframe is added
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement && node.classList.contains('utterances')) {
              setIsLoading(false);
              if (observer) {
                observer.disconnect();
              }
            }
          });
        });
      });

      observer.observe(container, { childList: true, subtree: true });

      // Fallback: stop showing loading after 10 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [title]);

  return (
    <>
      <Head>
        <link rel="preload" href="https://utteranc.es/client.js" as="script" />
      </Head>
      <div className="relative">
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-pulse text-gray-500">Loading comments...</div>
          </div>
        )}
        <div ref={commentsContainer} className={isLoading ? "hidden" : ""} />
      </div>
    </>
  );
}
