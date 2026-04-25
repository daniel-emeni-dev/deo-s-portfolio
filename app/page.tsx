'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Heart, MessageCircle, Globe, Rocket, Settings } from 'lucide-react'
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

  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <main className="bg-background text-foreground">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2349139690181"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
          animation: 'pulse-glow 3s ease-in-out infinite'
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.6)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
        }}
      >
        <MessageCircle size={28} className="text-white" />
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-white text-[#25D366] text-sm font-medium rounded whitespace-nowrap">
            Let's talk on WhatsApp
          </div>
        )}
      </a>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          }
          50% {
            box-shadow: 0 4px 24px rgba(37, 211, 102, 0.6);
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <nav className="max-w-5xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-primary">DEO</span> Websites
          </div>
          <div className="hidden md:flex gap-12">
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm flex items-center gap-2"
            >
              Contact
              <ArrowRight size={16} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Glow orb */}
        <div className="glow-orb w-96 h-96 -left-48 -top-32"></div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-50"></div>

        <ScrollReveal id="hero">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-8 tracking-tight leading-tight w-full">
              I Build<br className="hidden sm:block" /> Websites <br className="hidden sm:block" /><span className="text-primary">That Work</span>.
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(245, 232, 216, 0.8)' }}>
              Hi, I&apos;m Daniel — a Nigerian web developer helping small businesses look professional, get found online, and win more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-children">
              <button
                onClick={() => scrollToSection('work')}
                className="px-6 py-4 sm:px-8 bg-primary text-primary-foreground font-bold rounded flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 hover:bg-secondary"
              >
                See My Work <ArrowRight size={20} />
              </button>
              <a
                href="https://wa.me/2349139690181"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 sm:px-8 border-2 border-primary text-primary rounded font-bold flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Let&apos;s Talk <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" id="about">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="about-content">
            <h2 className="heading-accent text-4xl md:text-5xl font-heading font-black mb-12">The Person Behind the <span className="text-primary">Work</span></h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  I&apos;m <strong>Daniel Emeni Ogheneruno</strong>, a self-taught web developer based in Nigeria. I build things that are visually sharp, responsive, and actually solve problems for real businesses.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  I got into this because I love it — and because I want to build an honest living from something meaningful. Every site I build carries that intention.
                </p>
              </div>

              {/* Profile Photo Placeholder */}
              <div className="flex items-center justify-center">
                <div className="rotating-border relative w-80 h-80 rounded-full border-2 border-dashed border-primary flex items-center justify-center bg-muted">
                  <div className="text-center">
                    <div className="font-heading font-bold text-primary text-2xl md:text-3xl">Daniel E.O</div>
                    <p className="text-muted-foreground text-sm mt-2">Profile photo</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" id="work">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="work-content">
            <h2 className="heading-accent text-4xl md:text-5xl font-heading font-black mb-16">What I&apos;ve <span className="text-primary">Built</span></h2>

            <div className="grid gap-8 mb-12">
              {/* KJ Cakes Project */}
              <Link href="/projects/kj-cakes">
                <div className="group rounded-3xl p-6 md:p-8 transition-all duration-300 cursor-pointer" style={{
                  backgroundColor: '#252525',
                  border: '1px solid rgba(218, 165, 32, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DAA520';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(218, 165, 32, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(218, 165, 32, 0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">KJ Cakes PH</h3>
                    <p className="text-muted-foreground text-sm font-medium">Turning a luxury cake brand into a full digital presence</p>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed mb-8">
                    A luxury cake business in Port Harcourt. Full brand website with gallery, services, and WhatsApp booking integration.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">WhatsApp API</span>
                  </div>

                  <div className="link-accent flex items-center gap-2">
                    View Case Study <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Beleza Natural Project */}
              <Link href="/projects/beleza-natural">
                <div className="group rounded-3xl p-6 md:p-8 transition-all duration-300 cursor-pointer" style={{
                  backgroundColor: '#252525',
                  border: '1px solid rgba(218, 165, 32, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DAA520';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(218, 165, 32, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(218, 165, 32, 0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Beleza Natural Hair Clinic</h3>
                    <p className="text-muted-foreground text-sm font-medium">Reimagining what a Nigerian hair clinic could look like</p>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed mb-8">
                    A futuristic hair and scalp care clinic concept. Full brand website featuring AI-powered scalp analysis, services showcase, and WhatsApp integration.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">UI Design</span>
                  </div>

                  <div className="link-accent flex items-center gap-2">
                    View Case Study <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="rounded-3xl p-8 md:p-12 text-center" style={{
              backgroundColor: '#252525',
              border: '2px dashed #DAA520'
            }}>
              <p className="text-muted-foreground">More projects coming soon</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" id="services">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="services-content">
            <h2 className="heading-accent text-4xl md:text-5xl font-heading font-black mb-4">What I <span className="text-primary">Offer</span></h2>
            <p className="text-lg md:text-xl mb-16 max-w-3xl" style={{ color: 'rgba(245, 232, 216, 0.8)' }}>
              Every project is built with care, clarity, and your business goals in mind.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Card 1: Business Website */}
              <div className="group rounded-3xl p-6 md:p-8 transition-all duration-300" style={{
                backgroundColor: '#252525',
                border: '1px solid rgba(218, 165, 32, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DAA520';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(218, 165, 32, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218, 165, 32, 0.25)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Globe size={32} className="text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Business Website</h3>
                <p className="text-base leading-relaxed mb-6">A clean, fast, mobile-first website that represents your brand professionally and converts visitors into customers.</p>
                <p className="font-bold mb-4" style={{ color: '#DAA520' }}>Starting from ₦30,000</p>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded" style={{ backgroundColor: 'rgba(255, 111, 97, 0.12)', color: '#FF6F61', border: '1px solid rgba(255, 111, 97, 0.3)' }}>Most Popular</span>
              </div>

              {/* Card 2: Landing Page */}
              <div className="group rounded-3xl p-6 md:p-8 transition-all duration-300" style={{
                backgroundColor: '#252525',
                border: '1px solid rgba(218, 165, 32, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DAA520';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(218, 165, 32, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218, 165, 32, 0.25)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Rocket size={32} className="text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Landing Page</h3>
                <p className="text-base leading-relaxed mb-6">A single focused page built to promote one product, service, or event — designed to drive action.</p>
                <p className="font-bold" style={{ color: '#DAA520' }}>Starting from ₦15,000</p>
              </div>

              {/* Card 3: Website + SEO */}
              <div className="group rounded-3xl p-6 md:p-8 transition-all duration-300" style={{
                backgroundColor: '#252525',
                border: '1px solid rgba(218, 165, 32, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DAA520';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(218, 165, 32, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218, 165, 32, 0.25)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Settings size={32} className="text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Website + SEO Setup</h3>
                <p className="text-base leading-relaxed mb-6">Your website plus the basics that help you show up on Google — page titles, meta descriptions, speed optimisation, and Google indexing.</p>
                <p className="font-bold" style={{ color: '#DAA520' }}>Starting from ₦45,000</p>
              </div>
            </div>

            <div className="text-center text-base">
              <p>Prices are flexible depending on your needs and budget. <a href="https://wa.me/2349139690181" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-secondary transition-colors">Let's talk</a> — no pressure.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" id="process">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="process-content">
            <h2 className="heading-accent text-4xl md:text-5xl font-heading font-black mb-4">How It <span className="text-primary">Works</span></h2>
            <p className="text-lg md:text-xl mb-16 max-w-3xl" style={{ color: 'rgba(245, 232, 216, 0.8)' }}>
              Simple, transparent, and built around you.
            </p>

            <div className="space-y-8 md:space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-6 md:gap-8 group">
                <div className="absolute left-0 top-16 bottom-0 w-0.5 bg-primary opacity-30 -translate-x-1/2"></div>
                <div className="absolute left-3 top-6 w-7 h-7 rounded-full bg-primary z-10"></div>
                <div className="flex-1">
                  <div className="absolute left-0 top-0 text-7xl md:text-8xl font-heading font-black opacity-10 -translate-y-4 -translate-x-8" style={{ color: '#DAA520' }}>01</div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 relative z-10">Discovery</h3>
                  <p className="text-base md:text-lg leading-relaxed">We have a quick conversation about your business, your goals, and what you need. No jargon, no pressure.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 md:gap-8 group transition-all delay-100">
                <div className="absolute left-0 top-16 bottom-0 w-0.5 bg-primary opacity-30 -translate-x-1/2"></div>
                <div className="absolute left-3 top-6 w-7 h-7 rounded-full bg-primary z-10"></div>
                <div className="flex-1">
                  <div className="absolute left-0 top-0 text-7xl md:text-8xl font-heading font-black opacity-10 -translate-y-4 -translate-x-8" style={{ color: '#DAA520' }}>02</div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 relative z-10">Design & Build</h3>
                  <p className="text-base md:text-lg leading-relaxed">I get to work building your site — clean, fast, and designed to represent your brand properly.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 md:gap-8 group transition-all delay-200">
                <div className="absolute left-0 top-16 bottom-0 w-0.5 bg-primary opacity-30 -translate-x-1/2"></div>
                <div className="absolute left-3 top-6 w-7 h-7 rounded-full bg-primary z-10"></div>
                <div className="flex-1">
                  <div className="absolute left-0 top-0 text-7xl md:text-8xl font-heading font-black opacity-10 -translate-y-4 -translate-x-8" style={{ color: '#DAA520' }}>03</div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 relative z-10">Review & Refine</h3>
                  <p className="text-base md:text-lg leading-relaxed">You see the first version and we adjust together until it feels exactly right.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-6 md:gap-8 group transition-all delay-300">
                <div className="absolute left-3 top-6 w-7 h-7 rounded-full bg-primary z-10"></div>
                <div className="flex-1">
                  <div className="absolute left-0 top-0 text-7xl md:text-8xl font-heading font-black opacity-10 -translate-y-4 -translate-x-8" style={{ color: '#DAA520' }}>04</div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 relative z-10">Launch</h3>
                  <p className="text-base md:text-lg leading-relaxed">Your site goes live. I handle the deployment and make sure everything works perfectly.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" id="testimonials">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="testimonials-content">
            <h2 className="heading-accent text-4xl md:text-5xl font-heading font-black mb-16">What Clients <span className="text-primary">Say</span></h2>

            <div className="max-w-2xl">
              <div className="border-2 border-dashed border-primary rounded-lg p-8 md:p-12 text-center">
                <div className="quote-mark flex justify-center">"</div>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Client testimonials coming soon. Building trust through real work and real results.
                </p>
                <p className="text-sm text-muted-foreground">
                  More stories to be added as I work with amazing businesses.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 px-6 md:px-12" id="contact">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal id="contact-content">
            <h2 className="heading-accent text-4xl md:text-5xl font-heading font-black mb-6 text-center">Let&apos;s Build <span className="text-primary">Something</span></h2>
            <p className="text-lg md:text-xl text-center mb-16 max-w-2xl mx-auto" style={{ color: 'rgba(245, 232, 216, 0.8)' }}>
              Have a project in mind? I&apos;d love to hear about it and explore how we can work together.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-lg p-8 md:p-10" style={{ borderColor: 'rgba(218, 165, 32, 0.2)', borderWidth: '1px' }}>
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">Quick response, direct communication. Let&apos;s chat there.</p>
                <a
                  href="https://wa.me/2349139690181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  Message me <ArrowRight size={18} />
                </a>
              </div>

              <div className="rounded-lg p-8 md:p-10" style={{ borderColor: 'rgba(218, 165, 32, 0.2)', borderWidth: '1px' }}>
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Email</h3>
                <p className="text-muted-foreground mb-6">Send me a detailed message with your project details.</p>
                <a
                  href="mailto:danielemeni07@gmail.com"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  Send email <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="text-center border-t border-border pt-12">
              <p className="text-muted-foreground mb-4">Or reach out directly at:</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
                <a href="tel:+2349139690181" className="text-primary font-medium hover:text-secondary transition-colors text-lg">
                  +234 913 969 0181
                </a>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <a href="mailto:danielemeni07@gmail.com" className="text-primary font-medium hover:text-secondary transition-colors text-lg">
                  danielemeni07@gmail.com
                </a>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                <strong className="text-foreground">Response time:</strong> I typically reply within 24 hours. Let&apos;s make something great together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary py-12 md:py-16 px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted-foreground text-sm md:text-base flex items-center justify-center gap-1 whitespace-nowrap">
            © 2026 DEO Websites — Built with <span className="heartbeat inline-block mx-1"><Heart size={16} className="text-secondary" /></span> intention.
          </p>
        </div>
      </footer>
    </main>
  )
}
