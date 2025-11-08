import { Mail, MessageSquare, Globe } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Get in <span className="text-primary">Touch</span></h2>
          <p className="mt-4 text-lg text-gray-600">Ready to transform your business with AI? Let's discuss your project.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:sales@veritylabs.com" className="text-primary hover:underline">
              sales@veritylabs.com
            </a>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skype</h3>
            <p className="text-gray-600">live:bizdev.veritylabs</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <p className="text-gray-600">@veritylabsapp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
