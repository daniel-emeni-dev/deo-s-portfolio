'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import * as React from 'react'

const ScrollReveal = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
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

export default function BelezaNaturalCase() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-primary">DEO</span> Websites
          </Link>
          <Link
            href="/"
            className="text-sm font-medium px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </nav>
      </header>

      {/* Project Header */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="header">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Beleza Natural Hair Clinic</h1>
              <p className="text-2xl text-muted-foreground mb-8">Reimagining what a Nigerian hair clinic could look like</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://v0-beleza-natural-website.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-secondary transition-colors flex items-center gap-2 w-fit"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground rounded">Next.js</span>
                <span className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground rounded">Tailwind CSS</span>
                <span className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground rounded">UI Design</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Brief */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="brief">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Brief</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                A concept brand exploring what a modern Nigerian hair clinic could look like if it leaned fully into health, science, and premium wellness. Built to demonstrate range as a developer — showing the ability to handle not just local business sites but forward-thinking brand concepts.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="approach">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
                The natural hair and wellness space in Nigeria is growing fast but most businesses in that space look outdated. A futuristic direction — AI scalp analysis, clinical precision, Friday clinic bookings — was chosen to show what the industry could look like and make the brand instantly memorable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Every design element was chosen to communicate health, science, and premium care. This isn&apos;t just another hair salon — it&apos;s a tech-forward wellness clinic that happens to serve the natural hair community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Result */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="result">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Result</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                A full brand website with an AI scalp analysis feature, services showcase, Friday clinic booking section, and WhatsApp integration. The futuristic positioning reframes a hair salon as a tech-forward wellness clinic — elevating the entire brand perception and justifying premium pricing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal id="cta">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to build something?</h2>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-secondary transition-colors"
            >
              Back to Portfolio
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 text-center text-muted-foreground text-sm">
        <p>© 2026 DEO Websites — Built with intention.</p>
      </footer>
    </main>
  )
}
