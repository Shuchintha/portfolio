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

// Assign grid area classes based on category
const getGridClass = (title: string) => {
  switch (title) {
    case 'Frontend': return 'card-featured';
    case 'Languages': return 'card-tall';
    default: return 'card-standard';
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const Skills = () => {
  return (
    <section className="skills-bento section" id="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="section-title">
          Tech <span className="accent">Stack</span>
        </h2>
        <p className="section-subtitle">
          My command center for building digital excellence
        </p>
      </motion.div>

      <motion.div
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className={`bento-card ${getGridClass(category.title)}`}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Background Gradient Blob */}
            <div className="card-gradient" />

            <div className="card-top">
              <div className="card-icon-wrapper">
                {iconMap[category.icon]}
              </div>
              <h3 className="card-title">{category.title}</h3>
            </div>

            <div className="card-items">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-val">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
