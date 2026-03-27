import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const projects = [
    // --- IoT & AI Solutions ---
    {
      id: 0,
      title: 'Precision Farming System',
      subtitle: 'IoT-Driven Smart Agriculture Platform',
      description:
        'A full-stack IoT platform for smart farming. Integrates real-time sensor data, AI-driven recommendations, and a visual dashboard to optimize irrigation and fertilization. Modular, containerized architecture with Docker, MQTT, InfluxDB, Postgres, ML worker, and Grafana. Supports simulation, real hardware, and a web dashboard for actionable insights.',
      tech: ['Python', 'Docker', 'MQTT', 'InfluxDB', 'Postgres', 'Grafana', 'HTML', 'IoT'],
      impact: 'Automates crop monitoring and resource management, enabling data-driven precision agriculture.',
      link: 'https://github.com/lobadiah/Precision-Farming-System',
      tag: 'IoT & AI',
      featured: true,
    },

    // --- AI & Machine Learning Projects ---
    {
      id: 1,
      title: 'Bias & Fairness in AI Systems',
      subtitle: 'Empirical Validation Through Reweighing Mitigation',
      description:
        'Empirical study of algorithmic bias in machine learning. Implemented reweighing as a pre-processing mitigation strategy, evaluated fairness metrics (equalized odds, demographic parity), and demonstrated measurable reduction in bias while maintaining model performance.',
      tech: ['Python', 'AI Fairness 360', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      impact: 'Reduced demographic parity difference by 30%+ post-mitigation.',
      link: 'https://github.com/lobadiah/Bias-and-Fairness-in-AI-Systems-Empirical-Validation-Through-Reweighing-Mitigation',
      tag: 'AI Ethics',
      featured: true,
    },
    {
      id: 2,
      title: 'MRI Brain Tumour Segmentation',
      subtitle: 'Multimodal U-Net on BraTS 2020',
      description:
        'Deep learning pipeline for brain tumour segmentation using the BraTS 2020 dataset. Built a 2D U-Net architecture with multimodal MRI input (T1, T1ce, T2, FLAIR). Evaluated with Dice Score and IoU, achieving strong segmentation on glioma sub-regions.',
      tech: ['TensorFlow', 'Keras', 'U-Net', 'Python', 'NumPy', 'Matplotlib'],
      impact: 'Dice Score > 0.80 on whole tumour region.',
      link: 'https://github.com/lobadiah/Multimodal-MRI-Brain-Tumor-Segmentation-Using-U-Net-A-2D-Deep-Learning-Approach-on-BraTS-2020',
      tag: 'Medical AI',
      featured: true,
    },
    {
      id: 3,
      title: 'Medical Insurance Premium Prediction',
      subtitle: 'ML & Deep Learning Pipeline with Interpretability',
      description:
        'Comprehensive ML and deep learning pipeline for predicting medical insurance premiums. Benchmarked Linear Regression, Random Forest, XGBoost, and Neural Network models with full feature engineering. Used SHAP values for interpretability, surfacing the most influential cost drivers.',
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'Keras', 'SHAP', 'Pandas'],
      impact: 'R² > 0.87 with SHAP-based model interpretability.',
      link: 'https://github.com/lobadiah/medical_insurance_premium_prediction_using_machine_learning_and_deep_learning_techniques',
      tag: 'Predictive ML',
      featured: true,
    },

    // --- Computer Vision & Classification ---
    {
      id: 4,
      title: 'Brain Tumour Classification',
      subtitle: 'CNN vs Handcrafted Feature ML Comparison',
      description:
        'Comparative study of deep learning and traditional ML for brain tumour classification (Tumour vs Non-Tumour). Benchmarked a custom CNN and MobileNetV2 against SVM, Random Forest, k-NN, and Logistic Regression using HOG, LBP, and Sobel edge features. Full evaluation with confusion matrices and learning curves.',
      tech: ['TensorFlow', 'Keras', 'MobileNetV2', 'Scikit-learn', 'OpenCV', 'Python'],
      impact: 'CNN outperformed feature-based classifiers by ~8% accuracy.',
      link: 'https://github.com/lobadiah/Brain-Tumor-Classification-Tumor-vs-Non-Tumor-using-Handcrafted-Features-Machine-Learning',
      tag: 'Deep Learning',
      featured: false,
    },
    {
      id: 6,
      title: 'EuroSAT Land-Use Classification',
      subtitle: 'Satellite Imagery with CNN & Transfer Learning',
      description:
        'CNN-based classification of 10 land-use classes from the EuroSAT satellite imagery dataset. Used custom CNN and MobileNetV2 transfer learning, with experiments on augmentation, optimizer comparison, and fine-tuning.',
      tech: ['TensorFlow', 'Keras', 'MobileNetV2', 'Python', 'NumPy'],
      impact: 'Transfer learning and augmentation improved validation accuracy.',
      link: 'https://github.com/lobadiah/lobadiah/blob/main/cnn_image_classification.ipynb',
      tag: 'Computer Vision',
      featured: false,
    },
    {
      id: 7,
      title: 'Brain Tumor Feature-Based Classification',
      subtitle: 'Traditional ML with HOG, LBP, SVM, RF, k-NN',
      description:
        'Feature-based classification of brain tumor MRI using HOG, LBP, Sobel edges, and ML classifiers (SVM, Random Forest, k-NN, Logistic Regression). Demonstrates the effectiveness of traditional ML pipelines for medical imaging.',
      tech: ['Python', 'Scikit-learn', 'SVM', 'Random Forest', 'k-NN', 'Logistic Regression'],
      impact: 'Showcases robust traditional ML for medical images.',
      link: 'https://github.com/lobadiah/lobadiah/blob/main/brain_tumor_feature_classification.py',
      tag: 'Machine Learning',
      featured: false,
    },

    // --- Classic ML & Data Science ---
    {
      id: 8,
      title: 'Data Preprocessing for Machine Learning',
      subtitle: 'Essential ML Data Preparation',
      description:
        'Guide and codebase for preparing raw data for ML tasks. Covers cleaning, encoding, scaling, and splitting datasets for robust model training.',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      impact: 'Enables reliable and reproducible ML pipelines.',
      link: 'https://github.com/lobadiah/Data-Preprocessing-for-Machine-Learning',
      tag: 'ML Pipeline',
      featured: false,
    },
    {
      id: 9,
      title: 'Build a Simple Linear Regression Model',
      subtitle: 'Regression Analysis in Python',
      description:
        'Implements a simple linear regression model from scratch and with Scikit-learn. Demonstrates model fitting, evaluation, and visualization for predictive analytics.',
      tech: ['Python', 'Scikit-learn', 'Matplotlib'],
      impact: 'Introduces core regression concepts for beginners.',
      link: 'https://github.com/lobadiah/Build-a-Simple-Linear-Regression-Model',
      tag: 'Regression',
      featured: false,
    },
    {
      id: 10,
      title: 'Implement K-Nearest Neighbors (KNN) Classifier',
      subtitle: 'Instance-Based Learning',
      description:
        'Builds a KNN classifier for supervised learning tasks. Includes distance metrics, model evaluation, and parameter tuning for optimal classification performance.',
      tech: ['Python', 'Scikit-learn'],
      impact: 'Demonstrates practical KNN implementation and analysis.',
      link: 'https://github.com/lobadiah/Implement-K-Nearest-Neighbors-KNN-Classifier',
      tag: 'Classification',
      featured: false,
    },
    {
      id: 11,
      title: 'Decision Trees for Classification',
      subtitle: 'Tree-Based ML Models',
      description:
        'Explores decision tree algorithms for classification problems. Covers tree construction, visualization, pruning, and performance evaluation.',
      tech: ['Python', 'Scikit-learn', 'Graphviz'],
      impact: 'Provides interpretable and powerful classification models.',
      link: 'https://github.com/lobadiah/Decision-Trees-for-Classification',
      tag: 'Classification',
      featured: false,
    },
    {
      id: 12,
      title: 'Logistic Regression for Binary Classification',
      subtitle: 'Binary Outcome Prediction',
      description:
        'Implements logistic regression for binary classification tasks. Includes model training, evaluation, and interpretation of results.',
      tech: ['Python', 'Scikit-learn'],
      impact: 'Facilitates robust binary outcome predictions.',
      link: 'https://github.com/lobadiah/Logistic_Regression_for_Binary_Classification',
      tag: 'Classification',
      featured: false,
    },
  {
        id: 8,
        title: 'Data Preprocessing for Machine Learning',
        subtitle: 'Essential ML Data Preparation',
        description:
          'A comprehensive guide and codebase for preparing raw data for machine learning tasks. Covers cleaning, encoding, scaling, and splitting datasets for robust model training.',
        tech: ['Python', 'Pandas', 'Scikit-learn'],
        impact: 'Enables reliable and reproducible ML pipelines.',
        link: 'https://github.com/lobadiah/Data-Preprocessing-for-Machine-Learning',
        tag: 'ML Pipeline',
        featured: false,
      },
      {
        id: 9,
        title: 'Build a Simple Linear Regression Model',
        subtitle: 'Regression Analysis in Python',
        description:
          'Implements a simple linear regression model from scratch and with Scikit-learn. Demonstrates model fitting, evaluation, and visualization for predictive analytics.',
        tech: ['Python', 'Scikit-learn', 'Matplotlib'],
        impact: 'Introduces core regression concepts for beginners.',
        link: 'https://github.com/lobadiah/Build-a-Simple-Linear-Regression-Model',
        tag: 'Regression',
        featured: false,
      },
      {
        id: 10,
        title: 'Implement K-Nearest Neighbors (KNN) Classifier',
        subtitle: 'Instance-Based Learning',
        description:
          'Builds a KNN classifier for supervised learning tasks. Includes distance metrics, model evaluation, and parameter tuning for optimal classification performance.',
        tech: ['Python', 'Scikit-learn'],
        impact: 'Demonstrates practical KNN implementation and analysis.',
        link: 'https://github.com/lobadiah/Implement-K-Nearest-Neighbors-KNN-Classifier',
        tag: 'Classification',
        featured: false,
      },
      {
        id: 11,
        title: 'Decision Trees for Classification',
        subtitle: 'Tree-Based ML Models',
        description:
          'Explores decision tree algorithms for classification problems. Covers tree construction, visualization, pruning, and performance evaluation.',
        tech: ['Python', 'Scikit-learn', 'Graphviz'],
        impact: 'Provides interpretable and powerful classification models.',
        link: 'https://github.com/lobadiah/Decision-Trees-for-Classification',
        tag: 'Classification',
        featured: false,
      },
      {
        id: 12,
        title: 'Logistic Regression for Binary Classification',
        subtitle: 'Binary Outcome Prediction',
        description:
          'Implements logistic regression for binary classification tasks. Includes model training, evaluation, and interpretation of results.',
        tech: ['Python', 'Scikit-learn'],
        impact: 'Facilitates robust binary outcome predictions.',
        link: 'https://github.com/lobadiah/Logistic_Regression_for_Binary_Classification',
        tag: 'Classification',
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
