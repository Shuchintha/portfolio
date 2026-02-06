import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaCode,
  FaCubes,
  FaPalette,
  FaServer,
  FaTools,
} from 'react-icons/fa';
import { skillCategories } from '../../data/portfolioData';
import './Skills.scss';

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  FaCode: <FaCode />,
  FaCubes: <FaCubes />,
  FaPalette: <FaPalette />,
  FaServer: <FaServer />,
  FaTools: <FaTools />,
};

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="section-title">
          My <span className="accent">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build exceptional digital products
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: catIdx * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <div className="category-header">
              <div className="category-icon">
                {iconMap[category.icon]}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      animate={visible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: catIdx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
