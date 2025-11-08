export default function TechStack() {
  const tech = ["GPT-4 & Claude", "LangChain", "AutoGen", "CrewAI", "OpenAI API", "Pinecone", "Weaviate", "AWS & Azure", "PostgreSQL", "MongoDB", "Python", "Node.js"]
  
  return (
    <section id="tech" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Our <span className="text-primary">Tech Stack</span></h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            State-of-the-art tools and technologies for AI agent development.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {tech.map((item, i) => (
            <div key={i} className="px-6 py-3 bg-gray-100 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
