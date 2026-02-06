import { useEffect, useRef, useState } from 'react';
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
      <div className="section-header">
        <h2 className="section-title">
          My <span className="accent">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build exceptional digital products
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, catIdx) => (
          <div
            key={category.title}
            className={`skill-category animate-fade-in-up stagger-${catIdx + 1}`}
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
                    <div
                      className="skill-fill"
                      style={{ width: visible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
