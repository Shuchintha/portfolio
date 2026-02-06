import { Link } from 'react-router-dom';
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

const About = () => {
  return (
    <section className="about section">
      <div className="section-header">
        <h2 className="section-title">
          About <span className="accent">Me</span>
        </h2>
        <p className="section-subtitle">
          A passionate developer who turns ideas into elegant, scalable solutions
        </p>
      </div>

      <div className="about-content">
        <div className="about-visual animate-fade-in-up">
          <div className="about-image-frame">
            <div className="frame-border" />
            <div className="frame-fill">
              <FiUser className="about-icon" />
              <span className="about-label">Shuchintha S.</span>
            </div>
            <div className="stat-badge stat-years">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-badge stat-projects">
              <span className="stat-number">30+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <p className="about-intro animate-fade-in-up stagger-1">
            // who am i?
          </p>
          <p className="about-description animate-fade-in-up stagger-2">
            Over 5+ years of professional experience developing enterprise-grade web applications
            using both React and Angular. I specialize in designing robust TypeScript-based
            architectures, ranging from Angular's RxJS-driven streams and NgModules to React's
            functional components and Hooks API.
          </p>
          <p className="about-description animate-fade-in-up stagger-3">
            Expert in managing complex application states via Redux Toolkit and NgRx, ensuring
            seamless data flow across micro-frontend and mono-repo architectures. My expertise
            is centered on high-performance data integration, leveraging GraphQL and RESTful
            Web Services to communicate data between complex frontend UIs and backend systems.
          </p>
          <p className="about-description animate-fade-in-up stagger-4">
            With a strong focus on engineering velocity, I incorporate AI-native tools (Cursor,
            Copilot) to optimize delivery and stay current with evolving development patterns.
          </p>

          <div className="about-highlights animate-fade-in-up stagger-5">
            {highlights.map((item) => (
              <div key={item} className="highlight-item">
                <FiCheckCircle className="highlight-icon" />
                <span className="highlight-text">{item}</span>
              </div>
            ))}
          </div>

          <div className="about-actions animate-fade-in-up stagger-6">
            <a href="#" className="btn-primary">
              <FiDownload /> Download CV
            </a>
            <Link to="/skills" className="btn-outline">
              View Skills <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
