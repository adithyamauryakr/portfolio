export const profile = {
  name: 'Adithya Maurya K R',
  role: 'Chemical Sciences Researcher & ML Enthusiast',
  tagline: 'Chemical Sciences · AI/ML for Chemistry',
  summary:
    '4th year Int-M.Sc. student at UM–DAE–Centre for Excellence in Basic Sciences, Mumbai. I work at the intersection of computational chemistry, machine learning, and materials science, developing innovative solutions for material screening and molecular predictions.',
  location: 'Mumbai, India',
  email: 'adithya.maurya@cbs.ac.in',
  github: 'https://github.com/adithyamauryakr',
  linkedin: 'https://www.linkedin.com/in/adithyamauryakr/',
};

export const highlights = [
  {
    icon: 'GraduationCap',
    title: 'Education',
    lines: ['Int-M.Sc. Chemical Sciences', 'CGPA: 8.56/10'],
    note: '1st Rank in Chemical Sciences Major',
  },
  {
    icon: 'Briefcase',
    title: 'Current Research',
    lines: ['IIIT Hyderabad (CCNSB)', 'GNN architectures for MOF-CO₂ predictions'],
  },
  {
    icon: 'Award',
    title: 'Fellowship',
    lines: ['DAE–DISHA Fellow', 'Dept. of Atomic Energy, Govt. of India'],
  },
];

export const experience = [
  {
    org: 'International Institute of Information Technology',
    place: 'CCNSB, Hyderabad',
    supervisor: 'Prof. U. Deva Priyakumar',
    period: 'May 2025 – Present',
    points: [
      'Designed and trained Graph Neural Network architectures for MOF-CO₂ adsorption energy predictions',
      'Adapted ML models on MNSolv dataset for enhanced solute-solvent interaction capture',
    ],
  },
  {
    org: 'CSIR-CLRI Centre for High Computing',
    place: 'Chennai',
    supervisor: 'Dr. Mudit Dixit',
    period: 'May 2024 – Aug 2024',
    points: [
      'Developed innovative pipeline accelerating material screening using MLIPs prior to DFT calculations',
      'Spearheaded PACE development for determining low-energy adsorption sites using pre-trained MLIPs',
    ],
  },
  {
    org: 'KLE Technological University',
    place: 'Karnataka',
    supervisor: 'Dr. Ashok Sajjan',
    period: 'May 2023 – Dec 2023',
    points: [
      'Fabricated flexible supercapacitors and optimized high-performance electrode materials',
      'Examined electrolytes using EIS, GCD, and CV electroanalytical techniques',
    ],
  },
];

export const publications = [
  {
    citation:
      'Kumar, S., KR, Adithya. Maurya., Dixit, M. (2025). Unravelling the catalytic activity of Dual-Metal doped N6-Graphene for sulfur reduction via Machine Learning-Accelerated First-Principles calculations.',
    venue: 'arXiv',
    url: 'https://arxiv.org/abs/2510.15397',
  },
  {
    citation:
      'Singh, P., KR, Adithya. Maurya., Dixit, M. (2024). Unraveling the Contribution of Cationic and Anionic Redox in Na-Rich Cathode Materials through First-Principles Calculations.',
    venue: 'ACS Applied Electronic Materials',
    url: 'https://doi.org/10.1021/acsaelm.4c01199',
  },
  {
    citation:
      'Chikkatti, B. S., KR, Adithya. Maurya., Sajjan, A. M., Banapurmath, N. R. (2024). Elucidating the electrochemical performance of poly(methyl methacrylate) embracing manganese dioxide membranes for supercapacitors.',
    venue: 'New Journal of Chemistry',
    url: 'https://doi.org/10.1039/d4nj02854f',
  },
  {
    citation:
      'KR, Adithya. Maurya., Chikkatti, B. S., Sajjan, A. M., Banapurmath, N. R., Khan, T. Y., Saleel, C. A. (2024). Facile development of flexible cellulose acetate-lead dioxide membrane electrodes for supercapacitor applications.',
    venue: 'Next Energy',
    url: 'https://doi.org/10.1016/j.nxener.2024.100178',
  },
];

export const skillGroups = [
  { title: 'Technical Skills', skills: ['Python', 'Git', 'Linux', 'LaTeX'] },
  {
    title: 'Libraries & Frameworks',
    skills: ['PyTorch', 'ASE', 'Pymatgen', 'Scikit-learn', 'Fairchem', 'RDKit'],
  },
  {
    title: 'Research Areas',
    skills: [
      'DFT',
      'Machine Learning Interatomic Potentials',
      'Graph Neural Networks',
      'Transformers',
      'Deep Learning',
    ],
  },
];
