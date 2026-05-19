'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

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

export default function BelezaNaturalCase() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <main className="bg-background text-foreground">
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className="max-w-5xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-primary">Dore</span><span style={{ color: '#F5E8D8' }}>Build</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-dm-sans transition-colors duration-200 hover:opacity-80"
            style={{ color: '#DAA520' }}
          >
            ← Back to Portfolio
          </Link>
        </nav>
      </header>

      {/* Project Header */}
      <section className="pt-40 pb-12 md:pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="header">
            <div className="mb-12 relative">
              <div className="number-watermark">01</div>
              <h1 className="font-heading font-black text-5xl md:text-7xl mb-4 tracking-tight">Beleza Natural Hair <span className="text-primary">Clinic</span></h1>
              <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl">Reimagining what a Nigerian hair clinic could look like</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://v0-beleza-natural-website.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 w-full sm:w-fit justify-center sm:justify-start"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">UI Design</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Brief */}
      <section className="py-12 md:py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="brief">
            <div className="relative">
              <div className="number-watermark">02</div>
              <h2 className="heading-accent font-heading font-black text-3xl md:text-4xl mb-8">The Brief</h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
                A concept brand exploring what a modern Nigerian hair clinic could look like if it leaned fully into health, science, and premium wellness. Built to demonstrate range as a developer — showing the ability to handle not just local business sites but forward-thinking brand concepts.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="approach">
            <div className="relative">
              <div className="number-watermark">03</div>
              <h2 className="heading-accent font-heading font-black text-3xl md:text-4xl mb-8">The Approach</h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
                The natural hair and wellness space in Nigeria is growing fast but most businesses in that space look outdated. A futuristic direction — AI scalp analysis, clinical precision, Friday clinic bookings — was chosen to show what the industry could look like and make the brand instantly memorable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Result */}
      <section className="py-12 md:py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="result">
            <div className="relative">
              <div className="number-watermark">04</div>
              <h2 className="heading-accent font-heading font-black text-3xl md:text-4xl mb-8">The Result</h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
                A full brand website with an AI scalp analysis feature, services showcase, Friday clinic booking section, and WhatsApp integration. The futuristic positioning reframes a hair salon as a tech-forward wellness clinic — elevating the entire brand perception and justifying premium pricing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 border-t border-border text-center">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="cta">
            <h2 className="heading-accent font-heading font-black text-3xl md:text-4xl mb-4">Ready to build?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'rgba(245, 232, 216, 0.8)' }}>
              Liked what you saw? Your business could be next. Let&apos;s build something worth showing off.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-4 sm:px-8 bg-primary text-primary-foreground font-bold rounded transition-all duration-300 hover:bg-secondary"
            >
              Back to Portfolio
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary py-12 md:py-16 px-6 md:px-12 text-center mt-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted-foreground text-sm md:text-base">
            © 2026 DoreBuild — Built with intention.
          </p>
        </div>
      </footer>
    </main>
  )
}
