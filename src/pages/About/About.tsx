import { motion } from 'framer-motion';
import {
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

const codeLines = [
  { indent: 0, tokens: [{ type: 'keyword', text: 'const ' }, { type: 'variable', text: 'developer' }, { type: 'plain', text: ' = {' }] },
  { indent: 1, tokens: [{ type: 'key', text: 'name' }, { type: 'plain', text: ': ' }, { type: 'string', text: '"Shuchintha S."' }, { type: 'plain', text: ',' }] },
  { indent: 1, tokens: [{ type: 'key', text: 'role' }, { type: 'plain', text: ': ' }, { type: 'string', text: '"Frontend Engineer"' }, { type: 'plain', text: ',' }] },
  { indent: 1, tokens: [{ type: 'key', text: 'experience' }, { type: 'plain', text: ': ' }, { type: 'number', text: '10+' }, { type: 'plain', text: ',' }, { type: 'comment', text: ' // years' }] },
  { indent: 1, tokens: [{ type: 'key', text: 'stack' }, { type: 'plain', text: ': [' }, { type: 'string', text: '"React"' }, { type: 'plain', text: ', ' }, { type: 'string', text: '"Angular"' }, { type: 'plain', text: ', ' }, { type: 'string', text: '"TypeScript"' }, { type: 'plain', text: '],' }] },
  { indent: 1, tokens: [{ type: 'key', text: 'passion' }, { type: 'plain', text: ': ' }, { type: 'string', text: '"Building elegant UIs"' }, { type: 'plain', text: ',' }] },
  { indent: 0, tokens: [{ type: 'plain', text: '};' }] },
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="code-card">
            {/* macOS-style title bar */}
            <div className="code-card-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="file-name">developer.ts</span>
            </div>

            {/* Code body */}
            <div className="code-card-body">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  className="code-line"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
                >
                  <span className="line-number">{i + 1}</span>
                  <span className="line-content" style={{ paddingLeft: `${line.indent * 1.4}rem` }}>
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={`tok-${tok.type}`}>{tok.text}</span>
                    ))}
                  </span>
                </motion.div>
              ))}
              <motion.div
                className="code-line cursor-line"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="line-number">{codeLines.length + 1}</span>
                <span className="line-content"><span className="typing-cursor" /></span>
              </motion.div>
            </div>

            {/* Status bar */}
            <div className="code-card-footer">
              <span className="footer-item">TypeScript</span>
              <span className="footer-item">UTF-8</span>
              <span className="footer-item status-ready">
                <span className="status-dot" /> Ready
              </span>
            </div>
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
