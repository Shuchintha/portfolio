import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiCopy, FiCheck } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "shuchinthas397@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact section" id="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">
          Get In <span className="accent">Touch</span>
        </h2>
        <div className="header-line" />
        <p className="section-subtitle">
          Have a question or want to work together?
        </p>
      </motion.div>

      <div className="contact-container">
        {/* Left Side: Call to Action */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-heading">
            Let's build something <span className="accent">amazing</span> together.
          </h2>
          <p className="contact-desc">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below!.
          </p>
          
          <div className="location-badge">
            <div className="pulse-dot"></div>
            Based in Milpitas, CA
          </div>
        </motion.div>

        {/* Right Side: Action Links */}
        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-mini">
            {/* Email Pill */}
            <div className="email-pill">
              <FiMail className="pill-icon" />
              <a href={`mailto:${email}`} className="pill-text">{email}</a>
              <button className="copy-btn" onClick={handleCopy} aria-label="Copy email">
                 <AnimatePresence mode='wait'>
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <FiCheck />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <FiCopy />
                      </motion.span>
                    )}
                  </AnimatePresence>
              </button>
            </div>

            {/* Social Row */}
            <div className="social-row">
              <a 
                href="https://linkedin.com/in/shuchinthasrinivasa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a 
                href="https://github.com/shuchintha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a 
                href="https://twitter.com/shuchintha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
