"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">Verity Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">
            Why Us
          </Link>
          <Link href="#tech" className="text-sm font-medium hover:text-primary transition-colors">
            Tech Stack
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Why Us
            </Link>
            <Link href="#tech" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Tech Stack
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
