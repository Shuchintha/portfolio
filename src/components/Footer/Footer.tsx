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
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>

        <p className="footer-text">
          Designed & Built with <span className="heart">♥</span> by{' '}
          <span className="name">Shuchintha Srinivasa</span>
        </p>
        <p className="footer-tech">
          React · TypeScript · SASS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
