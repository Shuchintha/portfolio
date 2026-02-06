import { FiArrowRight, FiMail } from 'react-icons/fi';
import './Home.scss';

const Home = () => {
  return (
    <section className="hero" id="home">
      {/* Background effects */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="wave">👋</span> Hello, I'm
          </p>
          <h1 className="hero-name">
            Shuchintha<br />Srinivasa
          </h1>
          <h2 className="hero-title">Senior Frontend Developer</h2>
          <p className="hero-summary">
            Building enterprise-grade web applications with React, Angular &amp; TypeScript.
            Passionate about scalable architectures, high-performance UIs, and crafting
            exceptional digital experiences.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <FiMail /> Get In Touch
            </a>
            <a href="#about" className="btn-outline">
              Learn More <FiArrowRight />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-ring-2" />
            <div className="avatar-circle">SS</div>
            <span className="float-badge badge-react">⚛ React</span>
            <span className="float-badge badge-ts">TS TypeScript</span>
            <span className="float-badge badge-angular">▲ Angular</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Home;
