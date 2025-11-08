import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Verity Labs</h3>
            <p className="text-gray-400">Empowering Innovation Through Advanced AI Solutions</p>
            <p className="text-gray-400 mt-2">⭐⭐⭐⭐⭐ 4.9/5.0</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#services" className="hover:text-primary">AI Agent Development</Link></li>
              <li><Link href="#services" className="hover:text-primary">LLM Integration</Link></li>
              <li><Link href="#services" className="hover:text-primary">Workflow Automation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>🇺🇸 USA: Great Neck, NY</li>
              <li>🇬🇧 UK: London, E2 6AH</li>
              <li>🇮🇳 India: Punjab 160062</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:sales@veritylabs.com" className="hover:text-primary">Email Us</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Verity Labs, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
