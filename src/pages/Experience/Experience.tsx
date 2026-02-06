import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { experiences } from '../../data/portfolioData';
import './Experience.scss';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="section-title">
          Work <span className="accent">Experience</span>
        </h2>
        <p className="section-subtitle">
          My professional journey building impactful software
        </p>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.6,
              delay: idx * 0.12,
              ease: [0.25, 0.1, 0.25, 1],
            }}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
