import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaCode,
  FaCubes,
  FaPalette,
  FaServer,
  FaTools,
  FaChevronRight,
} from 'react-icons/fa';
import { skillCategories } from '../../data/portfolioData';
import './Skills.scss';

const iconMap: Record<string, ReactNode> = {
  FaReact: <FaReact />,
  FaCode: <FaCode />,
  FaCubes: <FaCubes />,
  FaPalette: <FaPalette />,
  FaServer: <FaServer />,
  FaTools: <FaTools />,
};

// Map categories to specific accent class names
const categoryClassMap: Record<string, string> = {
  'Frontend': 'cat-frontend',
  'Languages': 'cat-languages',
  'State Management': 'cat-state',
  'Styling & UI': 'cat-style',
  'APIs': 'cat-api',
  'Tools & DevOps': 'cat-tools',
};

const Skills = () => {
  const [activeId, setActiveId] = useState<string | null>('Frontend');

  const handlePanelClick = (title: string) => {
    // toggle if clicking the same one, but keep at least one open on desktop usually feels better
    // For this design, let's always have one open on desktop to maintain the layout integrity
    setActiveId(title);
  };

  return (
    <section className="skills-section section" id="skills">
      <div className="container-fluid">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Skills <span className="accent">Ecosystem</span>
          </h2>
          <p className="section-subtitle">
            Explore my technical expertise by expanding the zones below.
          </p>
        </motion.div>

        <div className="accordion-container">
          {skillCategories.map((category) => {
            const isActive = activeId === category.title;
            const catClass = categoryClassMap[category.title] || 'cat-default';

            return (
              <motion.div
                key={category.title}
                className={`accordion-panel ${catClass} ${isActive ? 'active' : ''}`}
                onClick={() => handlePanelClick(category.title)}
                layout
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                {/* Background Pattern/Gradient */}
                <div className="panel-bg" />

                {/* Collapsed Content (Visible when inactive or active) */}
                <div className="panel-header">
                  <span className="panel-icon">{iconMap[category.icon]}</span>
                  <h3 className="panel-title-vertical">{category.title}</h3>
                  <motion.div 
                    className="active-indicator"
                    animate={{ rotate: isActive ? 90 : 0 }}
                  >
                    <FaChevronRight />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence mode='wait'>
                  {isActive && (
                    <motion.div
                      className="panel-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h3 className="panel-title-horizontal">{category.title}</h3>
                      
                      <div className="skills-list">
                        {category.skills.map((skill, index) => (
                          <div key={skill.name} className="skill-item">
                             <div className="skill-info">
                               <span className="skill-name">{skill.name}</span>
                               <span className="skill-percent">{skill.level}%</span>
                             </div>
                             <div className="skill-bar-track">
                               <motion.div
                                 className="skill-bar-fill"
                                 initial={{ width: 0 }}
                                 animate={{ width: `${skill.level}%` }}
                                 transition={{ duration: 0.8, delay: 0.3 + (index * 0.1), ease: "circOut" }}
                               />
                             </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
