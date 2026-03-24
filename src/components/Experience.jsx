import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const experiences = [
  {
    id: 1,
    role: 'Data Science Trainee',
    org: 'NITDA Nigeria',
    orgFull: 'National Information Technology Development Agency',
    period: '2022 – 2023',
    type: 'Government / Tech',
    highlights: [
      'Developed and deployed predictive models using Python and Scikit-learn on government datasets',
      'Collaborated with senior data scientists on national digital infrastructure projects',
      'Conducted exploratory data analysis and produced executive-level reports for decision-makers',
      'Applied data cleaning, feature engineering, and model evaluation across structured datasets',
    ],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Power BI', 'SQL'],
  },
  {
    id: 2,
    role: 'Administrative Data Analyst',
    org: 'Federal Ministry of Youth Development',
    orgFull: 'Federal Republic of Nigeria',
    period: '2021 – 2022',
    type: 'Government',
    highlights: [
      'Managed and analysed administrative datasets tracking youth development programme outcomes',
      'Produced quarterly and annual statistical reports for ministry leadership and external stakeholders',
      'Developed Excel and Power BI dashboards to visualise programme reach and impact metrics',
      'Collaborated with cross-departmental teams to improve data collection processes and accuracy',
    ],
    tools: ['Excel', 'Power BI', 'SQL', 'Data Reporting'],
  },
  {
    id: 3,
    role: 'ICT Manager',
    org: 'TechPoint Services',
    orgFull: 'IT Services & Solutions',
    period: '2020 – 2021',
    type: 'Technology',
    highlights: [
      'Managed end-to-end IT operations including network administration, hardware procurement, and software deployment',
      'Led a small technical team providing IT support and systems integration for business clients',
      'Designed and maintained internal databases and client reporting infrastructure',
      'Delivered ICT training workshops for non-technical staff across client organisations',
    ],
    tools: ['Network Administration', 'Database Management', 'IT Support', 'Team Leadership'],
  },
  {
    id: 4,
    role: 'Partnerships & Programme Officer',
    org: 'Create My Future Foundation',
    orgFull: 'Youth-Focused Non-Profit',
    period: '2019 – 2020',
    type: 'Non-Profit',
    highlights: [
      'Developed grant proposals and managed donor relationships, contributing to sustained programme funding',
      'Designed data collection tools and led M&E (monitoring & evaluation) activities',
      'Analysed programme data to measure outcomes and inform strategic planning decisions',
      'Coordinated partnerships with corporate sponsors and government agencies for youth programmes',
    ],
    tools: ['Grant Writing', 'M&E Frameworks', 'Excel', 'Stakeholder Management'],
  },
  {
    id: 5,
    role: 'Volunteer Data Staff',
    org: 'Nigerian Red Cross Society',
    orgFull: 'Humanitarian Organisation',
    period: '2018 – 2019',
    type: 'Humanitarian',
    highlights: [
      'Collected, entered, and validated field data for humanitarian response operations',
      'Maintained beneficiary databases to support aid distribution and programme monitoring',
      'Generated reports on intervention coverage for field coordinators and national office',
      'Demonstrated the importance of clean, reliable data in high-stakes humanitarian contexts',
    ],
    tools: ['Data Entry', 'Excel', 'Beneficiary Management', 'Field Reporting'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <SectionWrapper id="experience" label="04 — Experience">
      <div className="mb-12">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 600,
            color: 'var(--color-text)',
          }}
        >
          Professional History
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-0 border" style={{ borderColor: 'var(--color-border)' }}>
        {/* Sidebar */}
        <div
          className="lg:col-span-2 border-r"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-surface)',
          }}
        >
          {experiences.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActive(i)}
              className={`w-full text-left px-6 py-5 border-b transition-all duration-200 ${
                active === i ? 'border-l-2' : 'border-l-2 border-l-transparent'
              }`}
              style={{
                borderBottomColor: 'var(--color-border)',
                borderLeftColor: active === i ? 'var(--color-gold)' : 'transparent',
                background: active === i ? 'rgba(212,168,67,0.04)' : 'transparent',
              }}
            >
              <div
                className="font-medium text-sm mb-1"
                style={{ color: active === i ? 'var(--color-gold)' : 'var(--color-text)' }}
              >
                {e.role}
              </div>
              <div
                className="font-mono text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {e.org}
              </div>
              <div
                className="font-mono text-xs mt-1"
                style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
              >
                {e.period}
              </div>
            </button>
          ))}
        </div>

        {/* Detail pane */}
        <div
          className="lg:col-span-3 p-8"
          style={{ background: 'var(--color-surface)' }}
          key={active}
        >
          {/* Type badge */}
          <span
            className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border mb-4 inline-block"
            style={{
              color: 'var(--color-gold)',
              borderColor: 'rgba(212,168,67,0.3)',
              background: 'rgba(212,168,67,0.06)',
            }}
          >
            {exp.type}
          </span>

          <h3
            className="mb-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 600,
              color: 'var(--color-text)',
            }}
          >
            {exp.role}
          </h3>
          <div
            className="font-mono text-sm mb-1"
            style={{ color: 'var(--color-gold)' }}
          >
            {exp.org}
          </div>
          <div
            className="font-mono text-xs mb-6"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {exp.orgFull} · {exp.period}
          </div>

          {/* Highlights */}
          <div className="space-y-3 mb-6">
            {exp.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1.5 font-mono text-xs"
                  style={{ color: 'var(--color-gold)' }}
                >
                  →
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(232,228,216,0.75)', fontWeight: 300 }}
                >
                  {h}
                </p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div
            className="pt-4"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <div
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Tools & Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.tools.map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
