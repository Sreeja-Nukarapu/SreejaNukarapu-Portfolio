import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Publication = {
  title: string;
  journal: string;
  date: string;
  description: string;
  link: string;
  tags: string[];
  previewImage: string; // path to first-page screenshot in /public/papers/
  contributions: string[];
  methodology: string[];
  keyResults: string[];
  role: string;
};

const publicationsData: Publication[] = [
  {
    title:
      "Leveraging Image Fusion and Transfer Learning for Enhanced Tumor Diagnosis",
    journal:
      "Indonesian Journal of Electrical Engineering and Computer Science",
    date: "Jan 3, 2025",
    description:
      "CNN-based MRI + CT fusion achieving 96.43% diagnostic precision, reducing false-negative rate and reliance on invasive biopsies.",
    link: "http://doi.org/10.11591/ijeecs.v37.i3.pp1804-1814",
    tags: ["CNN", "Transfer Learning", "Medical Imaging", "Image Fusion"],
    previewImage: "/papers/tumor-diagnosis.png",
    role: "First Author — Research Design, Experiments, Writing",
    contributions: [
      "Designed the dual-modality image fusion pipeline combining MRI and CT scan inputs.",
      "Selected and fine-tuned the CNN transfer learning backbone for medical image classification.",
      "Ran all training experiments, evaluated precision/recall, and analyzed false-negative reduction.",
      "Wrote the majority of the paper including methodology, results, and discussion sections.",
    ],
    methodology: [
      "Collected and preprocessed paired MRI + CT scans from public medical imaging datasets.",
      "Applied pixel-level and feature-level fusion strategies to combine modalities.",
      "Fine-tuned a pre-trained CNN (transfer learning) on the fused image representations.",
      "Evaluated on diagnostic precision, recall, and false-negative rate against single-modality baselines.",
    ],
    keyResults: [
      "96.43% diagnostic precision on fused MRI+CT inputs.",
      "Significant reduction in false-negative rate compared to single-modality baselines.",
      "Demonstrated potential to reduce reliance on invasive biopsy procedures.",
    ],
  },
  {
    title: "XLTransGAN: A Fusion of XLNet and GANs for Text-to-Image Synthesis",
    journal:
      "Innovations in Computational Intelligence and Computer Vision (ICICV 2024, Springer)",
    date: "Jan 1, 2025",
    description:
      "XLNet + GAN generator for semantically aligned text-to-image synthesis. Inception Score 3.023 on Oxford 102 Flowers, outperforming CNN baselines.",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-6995-7_1",
    tags: ["GANs", "XLNet", "Transformers", "Text-to-Image", "NLP"],
    previewImage: "/papers/xltransgan.png",
    role: "Co-Author — Model Architecture, GAN Training, Evaluation",
    contributions: [
      "Designed the XLNet-based text encoder to extract rich semantic embeddings for conditioning.",
      "Integrated the transformer output with the GAN generator architecture (XLTransGAN).",
      "Ran GAN training experiments, tuned hyperparameters, and stabilized training dynamics.",
      "Evaluated synthesis quality using Inception Score (IS) on Oxford 102 Flowers dataset.",
    ],
    methodology: [
      "Used XLNet to encode input text descriptions into dense, contextually-aware embeddings.",
      "Conditioned a GAN generator on XLNet embeddings to guide image synthesis.",
      "Trained on the Oxford 102 Flowers dataset with adversarial loss + perceptual loss.",
      "Benchmarked Inception Score (IS) against CNN-based text-to-image baselines.",
    ],
    keyResults: [
      "Inception Score of 3.023 on Oxford 102 Flowers — outperforming CNN baselines.",
      "Semantically aligned synthesis: generated images matched textual descriptions more accurately.",
      "Published at Springer ICICV 2024.",
    ],
  },
  {
    title:
      "Generative Adversarial Networks in Medical Image Analysis: A Comprehensive Survey",
    journal:
      "International Conference on Innovative Computing and Communication (ICICC 2024, Springer)",
    date: "Sep 27, 2024",
    description:
      "Surveyed the transformative impact of GANs on medical image processing: disease detection, synthetic data generation, and privacy-preserving augmentation.",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-4149-6_26",
    tags: ["GANs", "Medical Imaging", "Deep Learning", "Survey"],
    previewImage: "/papers/gans-survey.png",
    role: "Co-Author — Literature Review, GAN Architecture Analysis, Writing",
    contributions: [
      "Surveyed 50+ papers on GAN applications in medical imaging across radiology, pathology, and ophthalmology.",
      "Categorized GAN architectures (DCGAN, CycleGAN, cGAN) and their specific medical use cases.",
      "Authored the sections on privacy-preserving synthetic data generation and dataset augmentation.",
      "Compiled comparison tables of model performance across medical imaging benchmarks.",
    ],
    methodology: [
      "Systematic literature review of GAN-based medical imaging research (2018–2024).",
      "Categorized by application: image synthesis, denoising, super-resolution, and segmentation.",
      "Analyzed trade-offs between image fidelity (FID, SSIM) and clinical utility.",
      "Discussed ethical considerations around synthetic medical data and patient privacy.",
    ],
    keyResults: [
      "Comprehensive taxonomy of GAN architectures applied across 5+ medical imaging domains.",
      "Identified key open challenges: training instability, evaluation metrics, and clinical validation.",
      "Cited by subsequent works in medical image synthesis.",
    ],
  },
  {
    title:
      "A Refactoring Advisor for Enhanced Cloned Software Using Machine Learning",
    journal:
      "EAI 3rd International Conference on Intelligent Systems and Machine Learning (ICISML 2024)",
    date: "Jul 8, 2024",
    description:
      "ML-based refactoring advisor to detect and improve cloned software, enhancing code quality and maintainability.",
    link: "https://eudl.eu/doi/10.4108/eai.5-1-2024.2342581",
    tags: [
      "Machine Learning",
      "Software Engineering",
      "Code Quality",
      "Clone Detection",
    ],
    previewImage: "/papers/refactoring-advisor.png",
    role: "Co-Author — ML Model Design, Feature Engineering, Experiments",
    contributions: [
      "Designed feature extraction pipeline from source code ASTs for clone pattern detection.",
      "Trained and evaluated multiple ML classifiers (Random Forest, SVM, Gradient Boosting) on code quality metrics.",
      "Proposed the refactoring recommendation logic based on detected clone type and context.",
      "Conducted ablation studies on feature sets to identify most predictive code metrics.",
    ],
    methodology: [
      "Parsed source code into Abstract Syntax Trees (ASTs) and extracted structural + semantic features.",
      "Applied ML classifiers to detect Type-1, Type-2, and Type-3 code clones.",
      "Generated targeted refactoring suggestions based on clone category and coupling metrics.",
      "Validated on open-source Java repositories with manual ground-truth labeling.",
    ],
    keyResults: [
      "Demonstrated measurable improvement in code maintainability scores post-refactoring.",
      "ML classifier outperformed rule-based clone detection tools on precision and recall.",
      "Published at EAI ICISML 2024.",
    ],
  },
];

function PublicationModal({
  pub,
  onClose,
}: {
  pub: Publication;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black transition-all duration-200"
        >
          ✕
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {pub.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-bold text-black leading-snug mb-1">
              {pub.title}
            </h2>
            <p className="text-sm text-gray-500">{pub.journal}</p>
            <p className="text-xs text-gray-400 mt-1">📅 {pub.date}</p>
          </div>

          {/* Paper First Page Preview */}
          <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center min-h-[200px]">
            <img
              src={pub.previewImage}
              alt={`First page of ${pub.title}`}
              className="w-full object-contain max-h-[320px]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                target.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="hidden flex-col items-center justify-center text-center p-8 gap-2">
              <span className="text-4xl">📄</span>
              <p className="text-sm text-gray-400">Paper preview coming soon</p>
              <p className="text-xs text-gray-300">
                Add screenshot to /public/papers/
              </p>
            </div>
          </div>

          {/* Role */}
          <div className="mb-5 px-4 py-3 bg-black rounded-xl">
            <p className="text-xs font-semibold text-white tracking-wide">
              🎯 My Role &nbsp;—&nbsp; {pub.role}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Contributions */}
            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
                <span>✍️</span> My Contributions
              </h4>
              <ul className="space-y-2">
                {pub.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-xs text-gray-600 leading-relaxed"
                  >
                    <span className="text-black mt-0.5 flex-shrink-0">→</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology */}
            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
                <span>⚙️</span> How We Did It
              </h4>
              <ul className="space-y-2">
                {pub.methodology.map((m, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-xs text-gray-600 leading-relaxed"
                  >
                    <span className="text-black mt-0.5 flex-shrink-0">
                      {i + 1}.
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Results */}
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <h4 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
              <span>📊</span> Key Results
            </h4>
            <div className="flex flex-col gap-2">
              {pub.keyResults.map((r, i) => (
                <div
                  key={i}
                  className="flex gap-2 text-xs text-gray-600 leading-relaxed"
                >
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={pub.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200"
          >
            Read Full Paper →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Publications() {
  const [selected, setSelected] = useState<Publication | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col min-h-screen justify-center mx-auto items-center px-6 md:px-20 py-24 max-w-5xl"
      >
        <h3 className="absolute top-16 text-2xl font-bold tracking-[10px] text-burgundy uppercase">
          Publications
        </h3>

        <div className="flex flex-col gap-5 w-full mt-10">
          {publicationsData.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.07)" }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300"
            >
              <div className="flex-1">
                <h4 className="text-base font-bold text-black mb-1">
                  {pub.title}
                </h4>
                <p className="text-sm text-gray-500 mb-1">{pub.journal}</p>
                <p className="text-xs text-gray-400 mb-3">📅 {pub.date}</p>
                <p className="text-sm text-gray-600 mb-4">{pub.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-black border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-200"
                  >
                    View Publication →
                  </a>
                  <button
                    onClick={() => setSelected(pub)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 border border-gray-300 px-4 py-2 rounded-full hover:border-black hover:text-black transition-all duration-200"
                  >
                    More Details ↗
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <PublicationModal pub={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Publications;
