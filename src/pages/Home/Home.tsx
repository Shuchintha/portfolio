import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import './Home.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={fadeUp} custom={0}>
            Hello, I'm
          </motion.p>
          <motion.h1 className="hero-name" variants={fadeUp} custom={1}>
            Shuchintha<br />Srinivasa
          </motion.h1>
          <motion.h2 className="hero-title" variants={fadeUp} custom={2}>
            Senior Frontend Developer
          </motion.h2>
          <motion.p className="hero-summary" variants={fadeUp} custom={3}>
            Building enterprise-grade web applications with React, Angular &amp; TypeScript.
            Passionate about scalable architectures, high-performance UIs, and crafting
            exceptional digital experiences.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp} custom={4}>
            <a href="#contact" className="btn-primary">
              <FiMail /> Get In Touch
            </a>
            <a href="#about" className="btn-outline">
              Learn More <FiArrowRight />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <div className="avatar-wrapper">
            <motion.div
              className="avatar-ring"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
            />
            <motion.div
              className="avatar-circle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              SS
            </motion.div>
            <motion.span
              className="float-badge badge-react"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                x: { duration: 0.6, delay: 0.8 },
                scale: { duration: 0.6, delay: 0.8 },
                y: { duration: 4, delay: 1.4, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              ⚛ React
            </motion.span>
            <motion.span
              className="float-badge badge-ts"
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.0 },
                x: { duration: 0.6, delay: 1.0 },
                scale: { duration: 0.6, delay: 1.0 },
                y: { duration: 4, delay: 1.8, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              TS TypeScript
            </motion.span>
            <motion.span
              className="float-badge badge-angular"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1, y: [0, -7, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.2 },
                x: { duration: 0.6, delay: 1.2 },
                scale: { duration: 0.6, delay: 1.2 },
                y: { duration: 4, delay: 2.2, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              GraphQL
            </motion.span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Home;
