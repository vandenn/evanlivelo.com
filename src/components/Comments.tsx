"use client";

import { useEffect, useRef } from "react";
import Head from "next/head";

interface CommentsProps {
  title: string;
}

export default function Comments({ title }: CommentsProps) {
  const commentsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = commentsContainer.current;
    if (!container) return;

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
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [title]);

  return (
    <>
      <Head>
        <link rel="preload" href="https://utteranc.es/client.js" as="script" />
      </Head>
      <div ref={commentsContainer} />
    </>
  );
}
