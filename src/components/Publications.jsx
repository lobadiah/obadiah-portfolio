import React from 'react'
import SectionWrapper from './SectionWrapper'

const papers = [
  {
    id: 1,
    title: 'Bias and Fairness in AI Systems: Theoretical Analysis and Empirical Validation Through Reweighing Mitigation',
    authors: 'Obadiah, L. A., Godwin, D., Edward, N. M., Abubakar, N. M., Daniel, J., & Titus, D. K.',
    year: '2026',
    venue: 'Proceedings of the 8th International Congress on Human-Computer Interaction, Optimization and Robotic Applications (ICHORA 2026)',
    location: 'Ankara, Türkiye',
    publisher: 'IEEE',
    presentation: 'Oral Presentation',
    type: 'Lead Author',
  },
  {
    id: 2,
    title: 'Explainable Prediction of Daily Stress and Sleep Quality from Passive Smartphone Behavioral Sensing: A SHAP-Based Analysis of the StudentLife Dataset',
    authors: 'Daniel, J., Wilson, S., Edward, N. M., Ishaya, C., Musa, Z. S., Augustine, V., Bello, Y. G., Obadiah, L. A., & Titus, D. K.',
    year: '2026',
    venue: 'Proceedings of the 8th International Congress on Human-Computer Interaction, Optimization and Robotic Applications (ICHORA 2026)',
    location: 'Ankara, Türkiye',
    publisher: 'IEEE',
    presentation: 'Oral Presentation',
    type: 'Co-Author',
  }
]

export default function Publications() {
  return (
    <SectionWrapper id="publications" label="05 — Publications">
      <div className="mb-12">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 600,
            color: 'var(--color-text)',
          }}
        >
          Research Publications
        </h2>
      </div>

      <div className="grid gap-6">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="p-8 border card-hover"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <span
                  className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border inline-block mb-4"
                  style={{
                    color: 'var(--color-gold)',
                    borderColor: 'rgba(212,168,67,0.3)',
                    background: 'rgba(212,168,67,0.06)',
                  }}
                >
                  {paper.type}
                </span>
                <span
                  className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border inline-block mb-4 ml-2"
                  style={{
                    color: 'var(--color-text-muted)',
                    borderColor: 'var(--color-border)',
                    background: 'transparent',
                  }}
                >
                  {paper.presentation}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}
                >
                  {paper.title}
                </h3>
              </div>
              <div 
                className="font-mono text-lg shrink-0 mt-1 md:mt-0" 
                style={{ color: 'var(--color-gold)' }}
              >
                {paper.year}
              </div>
            </div>

            <div
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'rgba(232,228,216,0.85)', fontWeight: 300 }}
            >
              {paper.authors.split('Obadiah, L. A.').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}>
                      Obadiah, L. A.
                    </strong>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div
              className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              <div
                className="font-mono text-xs leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <span style={{ color: 'var(--color-text)' }}>{paper.venue}</span> • {paper.location}
              </div>
              <div
                className="font-mono text-xs tracking-widest font-semibold"
                style={{ color: 'var(--color-gold)' }}
              >
                {paper.publisher}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
