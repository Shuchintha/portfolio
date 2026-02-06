import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { experiences } from '../../data/portfolioData';
import './Experience.scss';

const Experience = () => {
  return (
    <section className="experience section">
      <div className="section-header">
        <h2 className="section-title">
          Work <span className="accent">Experience</span>
        </h2>
        <p className="section-subtitle">
          My professional journey building impactful software
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className={`timeline-item animate-fade-in-up stagger-${idx + 1}`}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="role">{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <div className="meta">
                  <span className="meta-item">
                    <FiCalendar /> {exp.duration}
                  </span>
                  <span className="meta-item">
                    <FiMapPin /> {exp.location}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div className="card-tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
