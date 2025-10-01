import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Two-column header section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center mb-12 max-sm:gap-6">
        {/* Left column - Text content */}
        <div className="space-y-2">
          <h1 className="text-5xl lg:text-7xl leading-tight">
            <span style={{ color: "var(--text)" }}>Hi! I'm </span>
            <span style={{ color: "var(--accent)" }}>Evan Livelo</span>
            <span style={{ color: "var(--text)" }}>.</span>
          </h1>

          <div className="text-base lg:text-lg leading-relaxed">
            <p>I'm a senior machine learning consultant who builds AI systems that solve real-world problems. I lead teams that create everything from generative AI solutions to data infrastructure for enterprise clients.</p>
          </div>
        </div>

        {/* Right column - Profile picture */}
        <div className="flex justify-center lg:justify-end max-sm:order-first">
          <div className="relative w-40 h-40 lg:w-64 lg:h-64">
            <Image
              src="/me.png"
              alt="Evan Livelo"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Rest of content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a
            href="/about"
            className="flex items-center gap-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200 text-lg font-medium"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="3" fill="currentColor"/>
              <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" fill="currentColor"/>
            </svg>
            Learn more about me
          </a>

          <a
            href="/projects"
            className="flex items-center gap-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200 text-lg font-medium"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            See my projects
          </a>

          <a
            href="mailto:evan.livelo@gmail.com"
            className="flex items-center gap-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200 text-lg font-medium"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Get in touch
          </a>

          <a
            href="https://drive.google.com/file/d/1lVXxnXQq8VAEACIecbdmW-O1AFSAf2e0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200 text-lg font-medium"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Download my CV
          </a>
        </div>
      </div>
    </>
  );
}
