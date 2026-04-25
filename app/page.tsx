'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const ScrollReveal = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(id)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [id])

  return (
    <div
      id={id}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-primary">DEO</span> Websites
          </div>
          <div className="hidden md:flex gap-12">
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 min-h-screen flex items-center justify-center">
        <ScrollReveal id="hero">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              I Build Websites That Work.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Hi, I&apos;m Daniel — a Nigerian web developer helping small businesses look professional, get found online, and win more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                See My Work <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349139690181"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* About */}
      <section className="py-20 px-6 md:px-12" id="about">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">The Person Behind the Work</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I&apos;m <strong className="text-foreground">Daniel Emeni Ogheneruno</strong>, a self-taught web developer based in Nigeria. I build things that are visually sharp, responsive, and actually solve problems for real businesses.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I got into this because I love it — and because I want to build an honest living from something meaningful. Every site I build carries that intention.
                </p>
              </div>
              <div className="w-full aspect-square rounded-lg bg-muted flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-muted-foreground text-sm">Profile photo</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Work */}
      <section className="py-20 px-6 md:px-12" id="work">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="work-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">What I&apos;ve Built</h2>
            
            {/* Project Cards Grid */}
            <div className="grid md:grid-cols-1 gap-8 mb-12">
              {/* KJ Cakes Project Card */}
              <Link href="/projects/kj-cakes">
                <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">KJ Cakes PH</h3>
                      <span className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground rounded">
                        Live Site
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    A luxury cake business in Port Harcourt. Full brand website with gallery, services, and WhatsApp booking integration.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <span className="text-primary font-medium flex items-center gap-2">
                      View Case Study <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Beleza Natural Project Card */}
              <Link href="/projects/beleza-natural">
                <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Beleza Natural Hair Clinic</h3>
                      <span className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground rounded">
                        Live Site
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    A futuristic hair and scalp care clinic concept. Full brand website featuring AI-powered scalp analysis, services showcase, and WhatsApp integration.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <span className="text-primary font-medium flex items-center gap-2">
                      View Case Study <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Placeholder for more projects */}
            <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center">
              <p className="text-muted-foreground">More projects coming soon</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12" id="testimonials">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="testimonials-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">What Clients Say</h2>
            
            <div className="border border-dashed border-border rounded-lg p-8 text-center max-w-2xl">
              <p className="text-muted-foreground text-lg mb-4">
                More client testimonials coming soon
              </p>
              <p className="text-sm text-muted-foreground">
                Building trust through real work and real results
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-12" id="contact">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal id="contact-content">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Something</h2>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? I&apos;d love to hear about it and explore how we can work together.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* WhatsApp */}
              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">Quick response, direct communication. Let&apos;s chat there.</p>
                <a
                  href="https://wa.me/2349139690181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-secondary transition-colors flex items-center gap-2"
                >
                  Message me <ArrowRight size={18} />
                </a>
              </div>

              {/* Email */}
              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold mb-3">Email</h3>
                <p className="text-muted-foreground mb-6">Send me a detailed message with your project details.</p>
                <a
                  href="mailto:danielemeni07@gmail.com"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-secondary transition-colors flex items-center gap-2"
                >
                  Send email <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="text-center border-t border-border pt-12">
              <p className="text-muted-foreground mb-4">
                Or reach out directly at:
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a href="tel:+2349139690181" className="text-primary font-medium hover:text-secondary transition-colors">
                  +234 913 969 0181
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="mailto:danielemeni07@gmail.com" className="text-primary font-medium hover:text-secondary transition-colors">
                  danielemeni07@gmail.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Response time:</strong> I typically reply within 24 hours. Let&apos;s make something great together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted-foreground text-sm">© 2026 DEO Websites — Built with intention.</p>
        </div>
      </footer>
    </main>
  )
}
