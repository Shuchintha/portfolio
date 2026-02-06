import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../../data/portfolioData';
import './Footer.scss';

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaTwitter: <FaTwitter />,
  FaEnvelope: <FaEnvelope />,
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              {iconMap[link.icon]}
            </motion.a>
          ))}
        </div>

        <motion.p
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Designed & Built by{' '}
          <span className="name">Shuchintha Srinivasa</span>
        </motion.p>
        <motion.p
          className="footer-tech"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          React · TypeScript
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
