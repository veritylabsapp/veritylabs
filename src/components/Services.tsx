export default function Services() {
  const services = [
    { title: "Custom AI Agent Development", description: "Build intelligent agents tailored to your business needs." },
    { title: "LLM Integration", description: "Integrate GPT-4, Claude, and Mistral into your applications." },
    { title: "Workflow Automation", description: "Automate complex business processes with AI agents." },
    { title: "AI Consultation", description: "Strategic consulting for AI implementation." },
    { title: "Data Analytics & BI", description: "Transform data into actionable insights." },
    { title: "Cloud Integration", description: "Deploy and scale on AWS, Azure, and more." },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Our <span className="text-primary">Agentic AI Services</span></h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At Verity Labs, we empower businesses through comprehensive AI/ML development services.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary text-white font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
