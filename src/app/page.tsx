import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyUs from "@/components/WhyUs"
import TechStack from "@/components/TechStack"
import Contact from "@/components/Contact"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
