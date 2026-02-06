import { motion } from 'framer-motion';
import {
  FiUser,
  FiArrowRight,
  FiDownload,
  FiCheckCircle,
} from 'react-icons/fi';
import './About.scss';

const highlights = [
  'React & Angular Expert',
  'TypeScript Architecture',
  'Redux & NgRx State Mgmt',
  'GraphQL & REST APIs',
  'Micro-Frontend Design',
  'AI-Native Dev Tools',
  'OAuth & JWT Security',
  'CI/CD & DevOps',
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const About = () => {
  return (
    <section className="about section" id="about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="section-title">
          About <span className="accent">Me</span>
        </h2>
        <p className="section-subtitle">
          A passionate developer who turns ideas into elegant, scalable solutions
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="about-image-frame">
            <div className="frame-fill">
              <FiUser className="about-icon" />
              <span className="about-label">Shuchintha S.</span>
            </div>
            <motion.div
              className="stat-badge stat-years"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Exp</span>
            </motion.div>
            <motion.div
              className="stat-badge stat-projects"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="stat-number">30+</span>
              <span className="stat-label">Projects</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p className="about-intro" variants={fadeUp}>
            // Who am i?
          </motion.p>
          <motion.p className="about-description" variants={fadeUp}>
            Over 10+ years of professional experience developing enterprise-grade web applications
            using both React and Angular. I specialize in designing robust TypeScript-based
            architectures, ranging from Angular's RxJS-driven streams and NgModules to React's
            functional components and Hooks API.
          </motion.p>
          <motion.p className="about-description" variants={fadeUp}>
            Expert in managing complex application states via Redux Toolkit and NgRx, ensuring
            seamless data flow across micro-frontend and mono-repo architectures. My expertise
            is centered on high-performance data integration, leveraging GraphQL and RESTful
            Web Services to communicate data between complex frontend UIs and backend systems.
          </motion.p>
          <motion.p className="about-description" variants={fadeUp}>
            With a strong focus on engineering velocity, I incorporate AI-native tools (Cursor,
            Copilot) to optimize delivery and stay current with evolving development patterns.
          </motion.p>

          <motion.div className="about-highlights" variants={fadeUp}>
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                className="highlight-item"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <FiCheckCircle className="highlight-icon" />
                <span className="highlight-text">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="about-actions" variants={fadeUp}>
            <a href="#" className="btn-primary">
              <FiDownload /> Download CV
            </a>
            <a href="#skills" className="btn-outline">
              View Skills <FiArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
