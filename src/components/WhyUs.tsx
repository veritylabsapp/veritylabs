export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose <span className="text-primary">Verity Labs</span></h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Rapid Prototyping</h3>
            <p className="text-gray-600">Accelerate go-to-market with pre-trained AI agents.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">Combine AI with your existing applications.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
            <p className="text-gray-600">From startups to Fortune 500 companies.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
            <p className="text-gray-600">ISO 27001-certified practices, GDPR, HIPAA compliant.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
