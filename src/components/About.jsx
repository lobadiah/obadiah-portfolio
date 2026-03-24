import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function About() {
  return (
    <SectionWrapper id="about" label="01 — About">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: narrative */}
        <div>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: 'var(--color-text)',
            }}
          >
            Building AI that
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>actually matters.</em>
          </h2>

          <p
            className="mb-5 leading-relaxed"
            style={{ color: 'rgba(232,228,216,0.75)', fontWeight: 300 }}
          >
            I&apos;m a Data Scientist and AI Engineer currently pursuing an MSc in
            Artificial Intelligence Engineering at Okan University, Istanbul. My
            work lives at the intersection of rigorous machine learning and
            real-world problem-solving — from medical image segmentation to
            fairness-aware AI systems.
          </p>

          <p
            className="mb-5 leading-relaxed"
            style={{ color: 'rgba(232,228,216,0.75)', fontWeight: 300 }}
          >
            With a BSc in Computer Science and a parallel degree in Business
            Administration in progress, I bring a rare combination of technical
            depth and strategic thinking. I&apos;ve applied this across roles in
            government data analysis, humanitarian operations with the Nigerian
            Red Cross, and ICT management — giving me genuine appreciation for
            data&apos;s power in high-stakes environments.
          </p>

          <p
            className="leading-relaxed"
            style={{ color: 'rgba(232,228,216,0.75)', fontWeight: 300 }}
          >
            My ethos: <em style={{ color: 'var(--color-gold)' }}>Never Give Up.</em> Every
            model trained, every dataset cleaned, every deployment shipped is a
            step toward AI systems that are not only powerful but equitable and
            interpretable.
          </p>
        </div>

        {/* Right: details card */}
        <div
          className="p-8 border"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="space-y-6">
            {/* Education */}
            <div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: 'var(--color-gold)' }}
              >
                Education
              </div>
              <div className="space-y-3">
                {[
                  {
                    degree: 'MSc Artificial Intelligence Engineering',
                    school: 'Okan University, Istanbul',
                    status: 'In Progress',
                  },
                  {
                    degree: 'BSc Computer Science',
                    school: 'Completed',
                    status: 'Completed',
                  },
                  {
                    degree: 'BSc Business Administration',
                    school: 'In Progress',
                    status: 'In Progress',
                  },
                ].map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--color-gold)' }}
                    />
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {edu.degree}
                      </div>
                      <div
                        className="font-mono text-xs mt-0.5"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {edu.school}
                        {edu.status === 'In Progress' && (
                          <span
                            className="ml-2 px-1.5 py-0.5 text-xs"
                            style={{
                              background: 'rgba(212,168,67,0.1)',
                              color: 'var(--color-gold)',
                              border: '1px solid rgba(212,168,67,0.2)',
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="h-px"
              style={{ background: 'var(--color-border)' }}
            />

            {/* Location / Focus */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Location
                </div>
                <div
                  className="text-sm"
                  style={{ color: 'var(--color-text)' }}
                >
                  Istanbul, Türkiye
                </div>
              </div>
              <div>
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Status
                </div>
                <div
                  className="text-sm flex items-center gap-2"
                  style={{ color: 'var(--color-text)' }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: '#4ade80',
                      boxShadow: '0 0 8px rgba(74,222,128,0.5)',
                    }}
                  />
                  Open to Opportunities
                </div>
              </div>
            </div>

            <div
              className="h-px"
              style={{ background: 'var(--color-border)' }}
            />

            {/* Focus areas */}
            <div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: 'var(--color-gold)' }}
              >
                Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI Systems', 'Deep Learning', 'Data Science',
                  'Fair AI', 'Full-Stack Dev', 'Medical AI',
                ].map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
