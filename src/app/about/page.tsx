export default function About() {
  return (
    <>
      <h1 className="text-3xl mb-6">
        About Me
      </h1>
      <div className="space-y-4">
        <p>
          I'm a senior machine learning consultant lead at Thinking Machines Data Science, Inc., where I specialize in natural language processing, computer vision, deep learning, and generative AI.
        </p>

        <h2 className="text-xl mt-6 mb-3">Professional Experience</h2>
        <p>
          Currently, I lead flagship GenAI solutions, including a RAG-powered coaching system, and helped establish Thinking Machines as OpenAI's first APAC partner. I manage distributed ML engineering teams across the Philippines and Thailand, developing complex data infrastructure and graph algorithms for enterprise clients.
        </p>

        <h2 className="text-xl mt-6 mb-3">Technical Expertise</h2>
        <p>
          My technical toolkit includes Python, JavaScript, and C#, along with frameworks like LangChain, PyTorch, TensorFlow, FastAPI, and React+Redux. I work extensively with cloud platforms (GCP, AWS, Azure) and DevOps tools like Docker, Kubernetes, Jenkins, and GitLab CI.
        </p>

        <h2 className="text-xl mt-6 mb-3">Education & Achievements</h2>
        <p>
          I hold a Master's and Bachelor's degree in Computer Science from De La Salle University, graduating Magna Cum Laude with research publications in IEEE and IJCAI conferences. My academic work focused on advancing the field of artificial intelligence and machine learning.
        </p>

        <h2 className="text-xl mt-6 mb-3">Personal Interests</h2>
        <p>
          When I'm not working on AI projects, you'll find me enjoying board games, experimenting in the kitchen as a home cook, learning the art of coffee brewing, creating graphic designs, or studying Japanese. These diverse interests keep me creative and help me approach problems from different perspectives.
        </p>
      </div>
    </>
  );
}