'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

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

import * as React from 'react'

export default function KJCakesCase() {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">KJ Cakes PH</h1>
              <p className="text-2xl text-muted-foreground mb-8">Turning a luxury cake brand into a full digital presence</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://v0-kj-cakes-ph-website.vercel.app"
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
                <span className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground rounded">WhatsApp API</span>
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
                KJ Cakes had no online presence beyond social media. Potential customers had no central place to see their full portfolio, understand their services, or book a consultation. Everything depended on word of mouth and WhatsApp status posts.
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
                The brand positions itself as premium and high-end — Cake Engineering, not just baking. A light, elegant design was chosen — clean whites and gold accents that feel refined and airy. The aesthetic communicates luxury without heaviness, letting the cake photography breathe and take center stage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                A cluttered or generic template would have undermined the premium brand identity Kate has built. Every section was built to move a visitor from curiosity to booking in as few steps as possible.
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
                A complete brand website with a hero section, founder story, gallery, services, and a WhatsApp booking button with a pre-filled message. One tap takes a potential customer from seeing a cake they love to reaching the business directly — zero friction.
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
