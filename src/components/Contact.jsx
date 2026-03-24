import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const contactLinks = [
  {
    label: 'Email',
    value: 'louisobadiah@gmail.com',
    href: 'mailto:louisobadiah@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    value: 'github.com/lobadiah',
    href: 'https://github.com/lobadiah',
    icon: '⌥',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/louisobadiah',
    href: 'https://linkedin.com/in/louisobadiah',
    icon: '◎',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('louisobadiah@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SectionWrapper id="contact" label="05 — Contact">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: 'var(--color-text)',
            }}
          >
            Let&apos;s build something
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>extraordinary.</em>
          </h2>

          <p
            className="mb-8 leading-relaxed"
            style={{ color: 'rgba(232,228,216,0.7)', fontWeight: 300 }}
          >
            I&apos;m currently open to AI engineering roles, data science positions,
            research collaborations, and freelance projects. Based in Istanbul,
            available for remote and on-site opportunities.
          </p>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-3 px-6 py-3 border font-mono text-sm tracking-wider uppercase transition-all duration-300"
            style={{
              borderColor: 'var(--color-gold)',
              color: 'var(--color-gold)',
              background: copied ? 'rgba(212,168,67,0.1)' : 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212,168,67,0.08)'
            }}
            onMouseLeave={(e) => {
              if (!copied) e.currentTarget.style.background = 'transparent'
            }}
          >
            <span>{copied ? '✓ Copied!' : '✉ Copy Email'}</span>
          </button>
        </div>

        {/* Right: links */}
        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border card-hover"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                textDecoration: 'none',
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-xl w-8 text-center"
                  style={{ color: 'var(--color-gold)' }}
                >
                  {link.icon}
                </span>
                <div>
                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-1"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link.label}
                  </div>
                  <div
                    className="text-sm transition-colors duration-200 group-hover:text-[var(--color-gold)]"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {link.value}
                  </div>
                </div>
              </div>
              <span
                className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--color-gold)' }}
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
