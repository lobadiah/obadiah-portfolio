import React from 'react'

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-surface)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="w-7 h-7 flex items-center justify-center border border-[var(--color-gold)] text-[var(--color-gold)] font-serif font-bold text-sm"
          >
            O
          </span>
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Obadiah Louis Adamu
          </span>
        </div>

        <div
          className="font-mono text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Built with React · Vite · Tailwind CSS
        </div>

        <div
          className="font-mono text-xs italic"
          style={{ color: 'var(--color-gold)', opacity: 0.7 }}
        >
          Never Give Up.
        </div>
      </div>
    </footer>
  )
}
