import type { PersonalInfo, Project, SkillCategory, EducationItem, AchievementItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Anmol Shrestha',
  title: 'Computer Engineering Student | Aspiring AI/ML Engineer & Data Scientist',
  location: 'Kathmandu, Nepal',
  email: 'sheresthaanmol2065@gmail.com',
  phone: '+977-9866291452',
  linkedin: 'https://www.linkedin.com/in/anmol-shrestha-4130523ba/',
  github: 'https://github.com/AnmolShrestha-0009',
  statusBadge: 'Undergraduate @ IOE Pulchowk • Exploring AI/ML Systems',
  heroHeading: 'Building Intelligent Systems Through AI & Code.',
  heroSupporting:
    "I'm Anmol Shrestha, a Computer Engineering student at IOE, Pulchowk Campus, passionate about Machine Learning, Artificial Intelligence, and Data Science. I enjoy building practical projects that combine predictive modeling, intelligent systems, and software engineering.",
  aboutTitle: 'A Little About Me',
  aboutParagraphs: [
    "I'm a Computer Engineering student at Tribhuvan University, IOE, Pulchowk Campus, with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. My learning approach combines theoretical understanding with hands-on implementation, allowing me to explore how intelligent systems can solve real-world problems.",
    "Through projects involving financial risk prioritization, poker intelligence, and sports prediction, I've been developing my skills in Python, machine learning, data processing, and software development. I'm particularly interested in building systems that combine predictive models, analytical reasoning, and usable software interfaces."
  ],
  themes: [
    {
      title: 'Learning by Building',
      description: 'Bridging algorithmic theory and software engineering through concrete, runnable implementations.'
    },
    {
      title: 'Applied Machine Learning',
      description: 'Focusing on end-to-end pipelines: from data preprocessing and feature engineering to predictive modeling.'
    },
    {
      title: 'Analytical Problem-Solving',
      description: 'Formulating complex probabilistic and domain-specific challenges with disciplined mathematical thinking.'
    },
    {
      title: 'Continuous Technical Growth',
      description: 'Systematically mastering computer engineering foundations, machine learning libraries, and systems programming.'
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core languages used for systems programming, data manipulation, and software development.',
    badge: 'Core Tools',
    skills: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 'ml-ai',
    name: 'Machine Learning & AI',
    description: 'Libraries, modeling workflows, and evaluation methods applied across practical projects.',
    badge: 'Modeling',
    skills: ['Scikit-learn', 'TensorFlow', 'Predictive Modeling', 'Classification', 'Model Evaluation']
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Scientific computing, exploratory data analysis, and tabular feature engineering workflows.',
    badge: 'Analysis',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Data Preprocessing', 'Exploratory Data Analysis']
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Relational data modeling, schema querying, and structured storage.',
    badge: 'Storage',
    skills: ['MySQL']
  }
];

export const projects: Project[] = [
  {
    id: 'poker-nexus',
    title: 'Poker Nexus',
    category: 'systems',
    visualType: 'poker',
    shortDescription:
      'An experimental poker intelligence system exploring the combination of probabilistic simulation and machine learning.',
    fullDescription:
      'Poker Nexus is an exploratory decision-support and poker intelligence project. It investigates how high-speed Monte Carlo simulations can be paired with predictive machine learning models to analyze hand equity, model multi-street decision spaces, and evaluate game-state probabilities in real time.',
    technologies: ['C++', 'Raylib', 'TensorFlow', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/AnmolShrestha-0009/PokerNexus',
    keyContributions: [
      'Implemented Monte Carlo simulation for poker equity estimation.',
      'Contributed to the development of a meta-learning model combining predictive outputs.',
      'Assisted with development of the C++ poker game engine.'
    ],
    architectureSteps: [
      'Game State Modeling: Card state and action tracking encapsulated in high-performance C++ classes.',
      'Monte Carlo Engine: Simulates thousands of rollout outcomes per hand to calculate empirical win/tie probabilities.',
      'Feature Extraction: Hand ranks, board textures, pot odds, and player tendencies vectorized via Pandas.',
      'Meta-Learning Pipeline: Integrates simulation outcomes with predictive machine learning models for strategic evaluation.'
    ],
    technicalHighlights: [
      'Designed C++ simulation loops optimized for rapid rollout evaluations.',
      'Integrated Raylib graphics for visualizing table state and equity curves.',
      'Employed Scikit-learn and TensorFlow for exploratory hand classification and outcome estimation.'
    ]
  },
  {
    id: 'risk-scoring',
    title: 'Risk Scoring & Prioritization',
    category: 'data-science',
    visualType: 'risk',
    shortDescription:
      'A machine learning-based workflow for prioritizing financial accounts according to potential risk, combining predictive modeling, account-level feature aggregation, and explainable AI.',
    fullDescription:
      'A structured analytical pipeline developed to rank financial accounts by potential exposure. The workflow processes multi-dimensional account attributes, generates risk rankings through supervised classification models, and provides transparent feature contribution breakdowns to assist human review.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Streamlit'],
    githubUrl: 'https://github.com/AnmolShrestha-0009/Risk-Scoring-Prioritization',
    disclaimer: 'Note: Visualizations and data represent illustrative sample distributions for research and demonstration purposes.',
    keyContributions: [
      'Developed the end-to-end project.',
      'Implemented data processing and account-level feature aggregation.',
      'Built machine learning-based risk scoring and ranking.',
      'Integrated explainability features to support analyst investigation.',
      'Developed a Streamlit-based interface.'
    ],
    architectureSteps: [
      'Data Ingestion & Cleaning: Handles missing values, scales numerical features, and normalizes financial indicators.',
      'Account-Level Feature Aggregation: Synthesizes transaction recency, frequency, and monetary profiles.',
      'Risk Classification Engine: Trains and validates Scikit-learn estimators to output probabilistic risk rankings.',
      'Model Explainability: Surfaces feature weights and attribution factors to clarify why specific accounts were flagged.',
      'Interactive Streamlit Interface: Provides interactive filters, sorting, and exploratory charts for review.'
    ],
    technicalHighlights: [
      'Engineered custom aggregation pipelines using Pandas and NumPy.',
      'Evaluated predictive performance using precision, recall, and ROC-AUC curves.',
      'Designed user-friendly Streamlit dashboard components for exploratory analysis.'
    ]
  },
  {
    id: 'world-cup-predictor',
    title: 'World Cup Predictor',
    category: 'ai-ml',
    visualType: 'worldcup',
    shortDescription:
      'A machine learning project exploring FIFA World Cup outcome prediction using data preprocessing, feature engineering, and predictive modeling.',
    fullDescription:
      'A sports analytics experiment applying machine learning to historical international football match data. The pipeline aggregates international rankings, head-to-head records, and team form into predictive features to estimate match outcomes and tournament progression.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/AnmolShrestha-0009/World-cup-predictor',
    disclaimer: 'Note: Bracket visual displays illustrative tournament match probabilities generated by the modeling workflow.',
    keyContributions: [
      'Prepared and analyzed data.',
      'Developed the predictive modeling workflow.',
      'Generated tournament outcome predictions.'
    ],
    architectureSteps: [
      'Historical Data Curation: Compiled international match records, goal differentials, and FIFA ranking timelines.',
      'Feature Engineering: Computed rolling team form, home/neutral venue effects, and historical goal averages.',
      'Predictive Modeling: Trained multi-class classifiers to estimate win, draw, and loss probabilities.',
      'Tournament Simulation: Simulated group stages and knockout brackets through probabilistic sampling.'
    ],
    technicalHighlights: [
      'Structured end-to-end reproducible modeling notebooks using Pandas and Scikit-learn.',
      'Validated model behavior against hold-out tournament matches.',
      'Extracted feature importance rankings highlighting the impact of recent form vs overall ranking.'
    ]
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
    category: 'ai-ml',
    visualType: 'sentiment',
    shortDescription:
      'A text classification project exploring sentiment analysis and the use of machine learning techniques to identify sentiment in textual data.',
    fullDescription:
      'A foundational natural language processing project focusing on text classification. It covers text preprocessing (cleaning, tokenization, and vectorization) followed by machine learning classification models to discern subjective polarity within text samples.',
    technologies: ['Python', 'NLP', 'Machine Learning'],
    isGithubConfigurable: true,
    keyContributions: [
      'Implemented textual data preprocessing and token preparation.',
      'Explored feature representation techniques for textual inputs.',
      'Trained classification models to categorize text sentiment polarity.'
    ],
    architectureSteps: [
      'Text Preprocessing: Normalization, punctuation removal, and lowercasing.',
      'Feature Representation: Vocabulary indexing and frequency-based vector representation.',
      'Classifier Training: Supervised classification pipeline for positive, neutral, and negative sentiment detection.',
      'Evaluation: Assessed classification outputs with standard precision and recall matrices.'
    ],
    technicalHighlights: [
      'Constructed clean, modular Python preprocessing routines.',
      'Explored baseline text classification architectures.',
      'Prepared configurable pipeline ready for custom dataset integration.'
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    institution: 'Tribhuvan University, Institute of Engineering, Pulchowk Campus',
    degree: 'Bachelor of Engineering in Computer Engineering',
    period: '2025 – 2029 (Expected)',
    location: 'Lalitpur / Kathmandu, Nepal',
    status: 'In Progress',
    details: [
      'Pursuing an intensive engineering curriculum spanning algorithms, computer architecture, data structures, and mathematics.',
      'Focusing academic exploration on artificial intelligence, systems programming, and applied data science.'
    ]
  },
  {
    institution: "St. Xavier's College, Maitighar",
    degree: 'Higher Secondary Education — Science (+2)',
    period: '2023 – 2025',
    location: 'Kathmandu, Nepal',
    grade: 'GPA: 3.90 / 4.00',
    status: 'Completed (2025)',
    details: [
      'Graduated with academic distinction (GPA 3.90 / 4.00).',
      'Solidified foundational coursework in advanced mathematics, physics, and computational thinking.'
    ]
  },
  {
    institution: 'NIC Academy',
    degree: 'Secondary Education Examination (SEE)',
    period: '2023',
    location: 'Kathmandu, Nepal',
    grade: 'GPA: 3.90 / 4.00',
    status: 'Completed (2023)',
    details: [
      'Graduated with outstanding academic performance (GPA 3.90 / 4.00).',
      'Developed early passion for computer science and logical problem-solving.'
    ]
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: 'academic-consistency',
    title: 'Academic Consistency',
    highlight: 'GPA 3.90 / 4.00',
    description:
      'Achieved a 3.90/4.00 GPA in both SEE and +2 Science at St. Xavier’s College, demonstrating disciplined academic dedication.',
    badge: 'Academics'
  },
  {
    id: 'learning-discipline',
    title: 'Self-Directed Discipline',
    highlight: 'Theory to Code',
    description:
      'Demonstrated consistent initiative by studying machine learning mathematical concepts and directly converting them into runnable codebases.',
    badge: 'Discipline'
  },
  {
    id: 'rapid-acquisition',
    title: 'Rapid Concept Acquisition',
    highlight: 'Curiosity-Driven',
    description:
      'Quickly adapts to new languages, simulation paradigms, and modeling libraries across C++, Python, and data tooling.',
    badge: 'Agility'
  },
  {
    id: 'applied-mindset',
    title: 'Applied Engineering Focus',
    highlight: 'Practical Systems',
    description:
      'Dedicated to engineering practical predictive models and analytical software tools that tackle concrete problem domains.',
    badge: 'Engineering'
  }
];
