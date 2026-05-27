import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 1s ease'
      el.style.opacity = '1'
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center mesh-bg overflow-hidden"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64"
        style={{
          background: 'radial-gradient(circle, rgba(20,40,100,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Vertical line decoration */}
      <div className="absolute left-6 top-0 bottom-0 hidden lg:flex flex-col items-center gap-0">
        <div className="flex-1" />
        <div
          className="w-px h-40 mt-32"
          style={{
            background: 'linear-gradient(180deg, transparent, var(--color-gold), transparent)',
          }}
        />
        <div className="flex-1" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-32 w-full">
        <div className="max-w-3xl">
          {/* Pre-title */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{ animationDelay: '0.2s' }}
          >
            <div
              className="h-px w-12"
              style={{ background: 'var(--color-gold)' }}
            />
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-gold)' }}
            >
              Portfolio
            </span>
          </div>

          {/* Name */}
          <h1
            className="mb-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
            }}
          >
            Obadiah
            <br />
            <span className="text-gradient">Louis Adamu</span>
          </h1>

          {/* Title */}
          <div className="flex items-center gap-3 mt-4 mb-8">
            <span
              className="font-mono text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Data Scientist &amp; Artificial Intelligence Engineer
            </span>
          </div>

          {/* Summary */}
          <p
            className="text-lg leading-relaxed mb-10 max-w-2xl"
            style={{
              color: 'rgba(232,228,216,0.7)',
              fontWeight: 300,
              fontFamily: 'var(--font-body)',
            }}
          >
            MSc AI Engineering student at Okan University, Istanbul building
            intelligent systems that bridge the gap between raw data and
            real-world impact. Specialising in machine learning, deep learning,
            and fair AI systems with a background spanning healthcare, humanitarian
            data, and full-stack development.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToAbout}
              className="px-7 py-3 font-mono text-sm tracking-wider uppercase transition-all duration-300"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-bg)',
                fontWeight: 500,
                border: '1px solid var(--color-gold)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-gold)'
                e.currentTarget.style.color = 'var(--color-bg)'
              }}
            >
              Explore Work
            </button>
            <a
              href="#contact"
              className="px-7 py-3 font-mono text-sm tracking-wider uppercase transition-all duration-300"
              style={{
                background: 'transparent',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)'
                e.currentTarget.style.color = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text)'
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10" style={{ borderTop: '1px solid var(--color-border)' }}>
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '10+', label: 'GitHub Repositories' },
              { value: 'MSc', label: 'AI Engineering' },
              { value: 'Istanbul', label: 'Türkiye' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-gold)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-xs tracking-widest uppercase mt-1"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--color-text-muted)' }}>scroll</span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(180deg, var(--color-gold), transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
