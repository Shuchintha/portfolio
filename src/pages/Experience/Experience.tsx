import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { experiences } from '../../data/portfolioData';
import './Experience.scss';

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.exp-card')?.clientWidth ?? 340;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -cardWidth - 24 : cardWidth + 24,
      behavior: 'smooth',
    });
  };

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
        <div className="header-line" />
        <p className="section-subtitle">
          My professional journey building impactful software
        </p>
      </motion.div>

      <div className="exp-carousel">
        <button className="carousel-btn left" onClick={() => scroll('left')} aria-label="Scroll left">
          <FiChevronLeft />
        </button>

        <div className="exp-track" ref={scrollRef}>
          {experiences.map((exp, idx) => (
            <motion.div
              layout
              key={exp.id}
              className="exp-card"
              onMouseEnter={() => setExpandedId(exp.id)}
              onMouseLeave={() => setExpandedId(null)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                layout: { duration: 0.3, type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                y: { duration: 0.5, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] },
              }}
            >
              <div className="card-index">{String(idx + 1).padStart(2, '0')}</div>
              <div className="card-content">
                <h3 className="role">{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <span className="duration">
                  <FiCalendar /> {exp.duration}
                </span>
                <motion.p layout className={`desc ${expandedId === exp.id ? 'expanded' : ''}`}>
                  {exp.description.join(' ')}
                </motion.p>
              </div>
              <div className="card-tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={() => scroll('right')} aria-label="Scroll right">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Experience;
