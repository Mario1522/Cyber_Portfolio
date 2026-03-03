import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Wireshark', icon: '🔍', description: 'Network Protocol Analyzer' },
    { name: 'Nmap', icon: '🗺️', description: 'Network Mapper & Scanner' },
    { name: 'Metasploit', icon: '💣', description: 'Penetration Testing Framework' },
    { name: 'Burp Suite', icon: '🛡️', description: 'Web Application Security' },
    { name: 'Kali Linux', icon: '🐉', description: 'Security Distribution' },
    { name: 'OWASP ZAP', icon: '⚡', description: 'Security Testing Tool' },
    { name: 'Nessus', icon: '🔎', description: 'Vulnerability Scanner' },
  { name: 'Python', icon: '🐍', description: 'Security Scripting & Automation' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="skill-card"
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

