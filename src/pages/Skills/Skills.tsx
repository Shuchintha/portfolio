import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaCode,
  FaCubes,
  FaPalette,
  FaServer,
  FaTools,
  FaArrowRight,
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

// Category Colors for dynamic theming
const categoryColors: Record<string, string> = {
  'Frontend': '#61DAFB',
  'Languages': '#3178C6',
  'State Management': '#764ABC',
  'Styling & UI': '#DB7093',
  'APIs': '#009688',
  'Tools & DevOps': '#F05032',
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0]);

  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">
            Technical <span className="accent">Command</span>
          </h2>
          <div className="header-line" />
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and tools
          </p>
        </motion.div>

        <div className="skills-interface">
          {/* 1. Sidebar Navigation */}
          <div className="skills-nav">
            {skillCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveTab(category)}
                className={`nav-item ${activeTab.title === category.title ? 'active' : ''}`}
                style={{
                  // @ts-ignore custom property for css
                  '--cat-color': categoryColors[category.title]
                }}
              >
                <span className="nav-icon">{iconMap[category.icon]}</span>
                <span className="nav-label">{category.title}</span>
                {activeTab.title === category.title && (
                  <motion.div
                    className="active-bg"
                    layoutId="activeTabBg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* 2. Content Display Area */}
          <div className="skills-display">
            {/* Dynamic Background Mesh Gradient */}
            <motion.div
              className="mesh-gradient"
              animate={{
                background: `radial-gradient(circle at 50% 50%, ${categoryColors[activeTab.title]}20 0%, transparent 70%)`
              }}
              transition={{ duration: 0.5 }}
            />

            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab.title}
                className="display-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="display-header">
                  <div 
                    className="header-icon-large"
                    style={{ color: categoryColors[activeTab.title] }}
                  >
                    {iconMap[activeTab.icon]}
                  </div>
                  <h3 className="display-title">{activeTab.title}</h3>
                </div>

                <div className="skills-grid">
                  {activeTab.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="tech-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      style={{ 
                        // @ts-ignore
                        '--accent': categoryColors[activeTab.title] 
                      }}
                    >
                      <div className="tech-card-content">
                        <span className="tech-name">{skill.name}</span>
                        <FaArrowRight className="tech-arrow" />
                      </div>
                      {skill.desc && (
                        <div className="tech-desc">
                          {skill.desc}
                        </div>
                      )}
                      <div className="tech-card-border" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
