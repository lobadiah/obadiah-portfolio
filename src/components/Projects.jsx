import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    id: 1,
    title: 'Bias & Fairness in AI Systems',
    subtitle: 'Empirical Validation Through Reweighing Mitigation',
    description:
      'A rigorous empirical study investigating algorithmic bias in machine learning models. Implemented reweighing as a pre-processing mitigation strategy, evaluating fairness metrics including equalised odds and demographic parity. Demonstrated measurable reduction in discriminatory outcomes while maintaining model performance.',
    tech: ['Python', 'AI Fairness 360', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    impact: 'Quantified 30%+ reduction in demographic parity difference post-mitigation',
    link: 'https://github.com/lobadiah/Bias-and-Fairness-in-AI-Systems-Empirical-Validation-Through-Reweighing-Mitigation',
    tag: 'AI Ethics',
    featured: true,
  },
  {
    id: 2,
    title: 'MRI Brain Tumour Segmentation',
    subtitle: 'Multimodal U-Net on BraTS 2020',
    description:
      'End-to-end deep learning pipeline for brain tumour segmentation using the BraTS 2020 dataset. Built a 2D U-Net architecture in TensorFlow/Keras with multimodal MRI input (T1, T1ce, T2, FLAIR). Evaluated with Dice Score and IoU metrics, achieving strong segmentation performance on glioma sub-regions.',
    tech: ['TensorFlow', 'Keras', 'U-Net', 'Python', 'NumPy', 'Matplotlib'],
    impact: 'Dice Score > 0.80 on whole tumour region',
    link: 'https://github.com/lobadiah/Multimodal-MRI-Brain-Tumor-Segmentation-Using-U-Net-A-2D-Deep-Learning-Approach-on-BraTS-2020',
    tag: 'Medical AI',
    featured: true,
  },
  {
    id: 3,
    title: 'Medical Insurance Premium Prediction',
    subtitle: 'ML & Deep Learning Pipeline with Interpretability',
    description:
      'Comprehensive machine learning and deep learning pipeline for predicting medical insurance premiums. Benchmarked multiple models — Linear Regression, Random Forest, XGBoost, and a Neural Network — with full feature engineering. Used SHAP values for model interpretability, surfacing the most influential cost drivers.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Keras', 'SHAP', 'Pandas'],
    impact: 'R² > 0.87 with SHAP providing full model interpretability',
    link: 'https://github.com/lobadiah/medical_insurance_premium_prediction_using_machine_learning_and_deep_learning_techniques',
    tag: 'Predictive ML',
    featured: true,
  },
  {
    id: 4,
    title: 'Brain Tumour Classification',
    subtitle: 'CNN vs Handcrafted Feature ML Comparison',
    description:
      'Comparative study of deep learning vs traditional machine learning for brain tumour classification (Tumour vs Non-Tumour). Benchmarked a custom CNN and MobileNetV2 against SVM, Random Forest, k-NN, and Logistic Regression using HOG, LBP, and Sobel edge features. Full rubric-grade evaluation with confusion matrices and learning curves.',
    tech: ['TensorFlow', 'Keras', 'MobileNetV2', 'Scikit-learn', 'OpenCV', 'Python'],
    impact: 'CNN outperformed feature-based classifiers by ~8% accuracy',
    link: 'https://github.com/lobadiah/Brain-Tumor-Classification-Tumor-vs-Non-Tumor-using-Handcrafted-Features-Machine-Learning',
    tag: 'Deep Learning',
    featured: false,
  },
  {
    id: 5,
    title: 'EuroSAT CNN Land Classification',
    subtitle: 'Satellite Imagery Classification via Transfer Learning',
    description:
      'CNN-based classification of 10 land-use classes from the EuroSAT satellite imagery dataset. Ran controlled experiments comparing data augmentation effects and optimizer strategies. Used MobileNetV2 transfer learning for final deployment-ready model.',
    tech: ['TensorFlow', 'Keras', 'MobileNetV2', 'Python', 'NumPy'],
    impact: 'Transfer learning improved validation accuracy by ~12%',
    link: 'https://github.com/lobadiah',
    tag: 'Computer Vision',
    featured: false,
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <SectionWrapper id="projects" label="03 — Projects">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 600,
            color: 'var(--color-text)',
          }}
        >
          Selected Work
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: 'var(--color-gold)' }}
        >
          {showAll ? '← Featured Only' : 'View All →'}
        </button>
      </div>

      <div className="space-y-6">
        {displayed.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="group border card-hover"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            {/* Tag + Number */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 border"
                style={{
                  color: 'var(--color-gold)',
                  borderColor: 'rgba(212,168,67,0.3)',
                  background: 'rgba(212,168,67,0.06)',
                }}
              >
                {project.tag}
              </span>
              <span
                className="font-mono text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                #{String(project.id).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h3
              className="mb-1 transition-colors duration-200 group-hover:text-[var(--color-gold)]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 600,
                color: 'var(--color-text)',
              }}
            >
              {project.title}
            </h3>
            <div
              className="font-mono text-xs mb-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {project.subtitle}
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'rgba(232,228,216,0.65)', fontWeight: 300 }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>

            {/* Impact */}
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--color-gold)' }}
            >
              <span>↑</span>
              <span className="font-mono text-xs">{project.impact}</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2.5 border font-mono text-xs tracking-wider uppercase transition-all duration-200"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-gold)'
              e.currentTarget.style.color = 'var(--color-gold)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.color = 'var(--color-text-muted)'
            }}
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}
