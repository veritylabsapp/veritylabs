"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Custom <span className="text-primary">AI Agent Development</span> Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering Innovation Through Advanced AI Solutions. Transform your business with cutting-edge agentic AI services that automate tasks, enhance decisions, and drive growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
