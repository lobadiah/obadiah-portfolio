import React from 'react'
import SectionWrapper from './SectionWrapper'

const skillGroups = [
  {
    category: 'AI / Machine Learning',
    icon: '◈',
    skills: [
      'Scikit-learn', 'TensorFlow', 'Keras', 'U-Net',
      'SHAP', 'AI Fairness 360', 'CNN', 'Transfer Learning',
    ],
  },
  {
    category: 'Programming & Data',
    icon: '⟨⟩',
    skills: [
      'Python', 'R', 'SQL', 'JavaScript',
      'Pandas', 'NumPy', 'React', 'HTML & CSS',
    ],
  },
  {
    category: 'Data Visualisation',
    icon: '◉',
    skills: [
      'Power BI', 'Matplotlib', 'Seaborn',
      'Excel', 'Jupyter Notebook', 'Plotly',
    ],
  },
  {
    category: 'Tools & Deployment',
    icon: '⌘',
    skills: [
      'Git & GitHub', 'Streamlit', 'VS Code',
      'CI/CD Fundamentals', 'REST APIs', 'Vite',
    ],
  },
  {
    category: 'Business & Domain',
    icon: '◎',
    skills: [
      'Data Analysis', 'Reporting', 'Humanitarian Data',
      'Grant Strategy', 'Project Management', 'Stakeholder Engagement',
    ],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills" label="02 — Skills">
      <div className="mb-12">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 600,
            color: 'var(--color-text)',
          }}
        >
          Technical Expertise
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            className="p-6 border card-hover"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xl"
                style={{ color: 'var(--color-gold)' }}
              >
                {group.icon}
              </span>
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {group.category}
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}

        {/* GitHub activity card */}
        <div
          className="p-6 border card-hover sm:col-span-2 lg:col-span-1"
          style={{
            background: 'linear-gradient(135deg, rgba(212,168,67,0.06) 0%, var(--color-surface) 60%)',
            borderColor: 'rgba(212,168,67,0.3)',
          }}
        >
          <div
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            GitHub Activity
          </div>
          <div
            className="text-4xl font-bold mb-2"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-gold)',
            }}
          >
            11
          </div>
          <div
            className="text-sm mb-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Public Repositories
          </div>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Jupyter Notebook', 'ML Projects', 'Deep Learning'].map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
          <a
            href="https://github.com/lobadiah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-mono text-xs tracking-wider uppercase transition-colors duration-200"
            style={{ color: 'var(--color-gold)' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            View GitHub →
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
