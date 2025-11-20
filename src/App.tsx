import { Mail, Github, GraduationCap, Briefcase, Award, FileText, ExternalLink } from 'lucide-react';
import cvPdf from './assets/CV_AdithyaMauryaKR.pdf';
import portraitImg from './assets/IMG_6535-011.jpeg';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Adithya Maurya K R</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-[#5771fe] transition-colors">About</a>
            <a href="#research" className="text-gray-600 hover:text-[#5771fe] transition-colors">Research</a>
            <a href="#publications" className="text-gray-600 hover:text-[#5771fe] transition-colors">Publications</a>
            <a href="#cv" className="text-gray-600 hover:text-[#5771fe] transition-colors">CV</a>
            <a href="#contact" className="text-gray-600 hover:text-[#5771fe] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#59ebe3] mb-3">Chemical Sciences | ML for Materials</p>
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">Hi, I'm Adithya</h2>
              </div>
              <p className="text-2xl text-[#5771fe] font-medium">Chemical Sciences Researcher & Machine Learning Enthusiast</p>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                4th year Int-M.Sc. student at UM–DAE–Centre for Excellence in Basic Sciences, Mumbai.
                I work at the intersection of computational chemistry, machine learning, and materials science,
                developing innovative solutions for material screening and molecular predictions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:adithya.maurya@cbs.ac.in" className="flex items-center gap-2 px-6 py-3 bg-[#5771fe] text-white rounded-lg hover:bg-[#223180] transition-colors">
                  <Mail size={20} />
                  <span>Contact Me</span>
                </a>
                <a href="https://github.com/adithyamauryakr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-[#5771fe] hover:text-[#5771fe] transition-colors">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href={cvPdf} download className="flex items-center gap-2 px-6 py-3 border border-[#5771fe] text-[#5771fe] rounded-lg hover:bg-[#5771fe]/10 transition-colors">
                  <FileText size={20} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5771fe] via-transparent to-[#59ebe3] blur-3xl opacity-20" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden border border-white/60 shadow-2xl">
                <img
                  src={portraitImg}
                  alt="Adithya Maurya smiling outdoors"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <GraduationCap className="text-[#5771fe] mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">Int-M.Sc. Chemical Sciences</p>
                <p className="text-sm text-gray-500 mt-1">CGPA: 8.56/10</p>
                <p className="text-sm text-[#59ebe3] font-medium mt-2">1st Rank in Major</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <Briefcase className="text-[#5771fe] mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Current Research</h3>
                <p className="text-gray-600">IIIT Hyderabad (CCNSB)</p>
                <p className="text-sm text-gray-500 mt-1">GNN architectures for MOF-CO₂ predictions</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <Award className="text-[#5771fe] mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Fellowship</h3>
                <p className="text-gray-600">DAE–DISHA Fellow</p>
                <p className="text-sm text-gray-500 mt-1">Dept. of Atomic Energy, Govt. of India</p>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Research Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-[#5771fe] pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">International Institute of Information Technology</h3>
                <span className="text-sm text-gray-500">May 2025 – Present</span>
              </div>
              <p className="text-[#5771fe] font-medium mb-3">CCNSB, Hyderabad | Supervisor: Prof. U. Deva Priyakumar</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Designed and trained Graph Neural Network architectures for MOF-CO₂ adsorption energy predictions</li>
                <li>• Adapted ML models on MNSolv dataset for enhanced solute-solvent interaction capture</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#9aaafe] pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">CSIR-CLRI Centre for High Computing</h3>
                <span className="text-sm text-gray-500">May 2024 – Aug 2024</span>
              </div>
              <p className="text-[#5771fe] font-medium mb-3">Chennai | Supervisor: Dr. Mudit Dixit</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Developed innovative pipeline accelerating material screening using MLIPs prior to DFT calculations</li>
                <li>• Spearheaded PACE development for determining low-energy adsorption sites using pre-trained MLIPs</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#9aaafe] pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">KLE Technological University</h3>
                <span className="text-sm text-gray-500">May 2023 – Dec 2023</span>
              </div>
              <p className="text-[#5771fe] font-medium mb-3">Karnataka | Supervisor: Dr. Ashok Sajjan</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Fabricated flexible supercapacitors and optimized high-performance electrode materials</li>
                <li>• Examined electrolytes using EIS, GCD, and CV electroanalytical techniques</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="publications" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Publications</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#5771fe] transition-colors">
                <div className="flex items-start gap-4">
                  <FileText className="text-[#5771fe] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-gray-900 leading-relaxed mb-2">
                      Kumar, S., <span className="font-semibold">KR, Adithya. Maurya.</span>, Dixit, M. (2025).
                      Unravelling the catalytic activity of Dual-Metal doped N6-Graphene for sulfur reduction via Machine Learning-Accelerated First-Principles calculations.
                    </p>
                    <a href="https://arxiv.org/abs/2510.15397" target="_blank" rel="noopener noreferrer" className="text-[#5771fe] hover:text-[#223180] text-sm flex items-center gap-1">
                      arXiv <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#5771fe] transition-colors">
                <div className="flex items-start gap-4">
                  <FileText className="text-[#5771fe] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-gray-900 leading-relaxed mb-2">
                      Singh, P., <span className="font-semibold">KR, Adithya. Maurya.</span>, Dixit, M. (2024).
                      Unraveling the Contribution of Cationic and Anionic Redox in Na-Rich Cathode Materials through First-Principles Calculations.
                    </p>
                    <a href="https://doi.org/10.1021/acsaelm.4c01199" target="_blank" rel="noopener noreferrer" className="text-[#5771fe] hover:text-[#223180] text-sm flex items-center gap-1">
                      ACS Applied Electronic Materials <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#5771fe] transition-colors">
                <div className="flex items-start gap-4">
                  <FileText className="text-[#5771fe] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-gray-900 leading-relaxed mb-2">
                      Chikkatti, B. S., <span className="font-semibold">KR, Adithya. Maurya.</span>, Sajjan, A. M., Banapurmath, N. R. (2024).
                      Elucidating the electrochemical performance of poly(methyl methacrylate) embracing manganese dioxide membranes for supercapacitors.
                    </p>
                    <a href="https://doi.org/10.1039/d4nj02854f" target="_blank" rel="noopener noreferrer" className="text-[#5771fe] hover:text-[#223180] text-sm flex items-center gap-1">
                      New Journal of Chemistry <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#5771fe] transition-colors">
                <div className="flex items-start gap-4">
                  <FileText className="text-[#5771fe] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-gray-900 leading-relaxed mb-2">
                      <span className="font-semibold">KR, Adithya. Maurya.</span>, Chikkatti, B. S., Sajjan, A. M., Banapurmath, N. R., Khan, T. Y., Saleel, C. A. (2024).
                      Facile development of flexible cellulose acetate-lead dioxide membrane electrodes for supercapacitor applications.
                    </p>
                    <a href="https://doi.org/10.1016/j.nxener.2024.100178" target="_blank" rel="noopener noreferrer" className="text-[#5771fe] hover:text-[#223180] text-sm flex items-center gap-1">
                      Next Energy <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Git', 'Linux', 'LaTeX'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#5771fe]/10 text-[#223180] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Libraries & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'ASE', 'Pymatgen', 'Scikit-learn', 'Fairchem', 'RDKit'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#59ebe3]/10 text-[#223180] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900">Research Areas</h3>
              <div className="flex flex-wrap gap-2">
                {['DFT', 'Machine Learning Interatomic Potentials', 'Graph Neural Networks', 'Transformers', 'Deep Learning'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#9aaafe]/10 text-[#223180] rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-[#5771fe]/10 via-white to-[#59ebe3]/10 rounded-2xl p-10 border border-gray-100 shadow-sm">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#5771fe] mb-2">Curriculum Vitae</p>
                  <h2 className="text-3xl font-bold text-gray-900">Explore My Complete Academic Journey</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dive into detailed summaries of my research appointments, publications, coursework, and leadership initiatives. The CV is regularly updated to reflect ongoing projects and honors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={cvPdf}
                    download="Adithya_Maurya_KR_CV.pdf"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#5771fe] text-white rounded-lg hover:bg-[#223180] transition-colors"
                  >
                    <FileText size={20} />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={cvPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-[#5771fe] hover:text-[#5771fe] transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View in Browser</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to discussing research collaborations, opportunities, or interesting projects in computational chemistry and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:adithya.maurya@cbs.ac.in" className="flex items-center gap-2 px-6 py-3 bg-[#5771fe] text-white rounded-lg hover:bg-[#223180] transition-colors">
                <Mail size={20} />
                <span>adithya.maurya@cbs.ac.in</span>
              </a>
              <a href="https://github.com/adithyamauryakr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-[#5771fe] hover:text-[#5771fe] transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-500">Mumbai, India</p>
              <p className="text-gray-500 mt-1">+91 6363013855</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© 2025 Adithya Maurya K R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
